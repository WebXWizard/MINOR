# AWS Deployment Guide for Three-Tier Web App

This guide outlines how to deploy your **MERN** (MongoDB, Express, React/Next.js, Node.js) application to AWS.

**Architecture:**
1.  **Frontend (Next.js)**: AWS Amplify (Easiest & Best for Next.js)
2.  **Backend (Node.js/Express)**: AWS EC2 (Ubuntu)
3.  **Database**: MongoDB Atlas (Cloud)

---

## Prerequisite: Database (MongoDB Atlas)

Since you are likely using MongoDB Atlas, ensure your database is accessible from AWS.
1.  Go to **MongoDB Atlas Dashboard** > **Network Access**.
2.  Add IP Address: `0.0.0.0/0` (Allow access from anywhere - simplest for testing) OR wait until you have your EC2 IP and add only that.
3.  Get your Connection String (e.g., `mongodb+srv://...`).

---

## Part 1: Deploy Backend to AWS EC2

### 1. Launch an EC2 Instance
1.  Log in to **AWS Console** > **EC2**.
2.  Click **Launch Instance**.
3.  **Name**: `Minor-Backend`
4.  **OS**: **Ubuntu Server 24.04 LTS** (Free Tier eligible).
5.  **Instance Type**: `t2.micro` (Free Tier eligible) or `t3.micro`.
6.  **Key Pair**: Create a new key pair (e.g., `minor-key.pem`) and **download it**.
7.  **Network Settings**:
    *   Allow SSH traffic from **Anywhere** (0.0.0.0/0) or My IP.
    *   Allow HTTP (80) and HTTPS (443).
8.  Click **Launch Instance**.

### 2. Connect to EC2
1.  Open your terminal where your `.pem` key is located.
2.  Restrict key permissions (Linux/Mac only): `chmod 400 minor-key.pem`
3.  Connect via SSH:
    ```bash
    ssh -i "minor-key.pem" ubuntu@<YOUR_EC2_PUBLIC_IP>
    ```

### 3. Setup the Server (Node.js & Git)
Run these commands inside your EC2 terminal:
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js (v20)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node -v
npm -v

# Install Git
sudo apt install git -y
```

### 4. Clone and Run Backend
```bash
# Clone your repository
git clone https://github.com/WebXWizard/MINOR.git
cd MINOR/BackEnd

# Install dependencies
npm install

# Create .env file
nano .env
# PASTE your environment variables here (PORT=5000, MONGODB_URL=...)
# Press Ctrl+X, then Y, then Enter to save.

# Test run
node index.js
# (Press Ctrl+C to stop after verifying it starts)
```

### 5. Keep Backend Running (PM2)
```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the app
pm2 start index.js --name "minor-backend"

# Ensure it restarts on reboot
pm2 startup
# (Run the command output by the above line, e.g., sudo env PATH=...)
pm2 save
```

### 6. Open Port 5000 (Security Group)
By default, AWS blocks port 5000.
1.  Go to **AWS Console** > **EC2** > **Security Groups**.
2.  Select your instance's security group (e.g., `launch-wizard-1`).
3.  **Edit Inbound Rules**.
4.  Add Rule:
    *   Type: **Custom TCP**
    *   Port: **5000**
    *   Source: **Anywhere-IPv4** (`0.0.0.0/0`)
5.  Save Rules.

**Test**: Visit `http://<YOUR_EC2_PUBLIC_IP>:5000` in your browser.

---

## Part 2: Deploy Frontend to AWS Amplify

AWS Amplify is the easiest way to deploy Next.js apps.

### 1. Connect Repository
1.  Go to **AWS Console** > **AWS Amplify**.
2.  Click **Create New App** > **GitHub**.
3.  Authorize GitHub and select your repository (`WebXWizard/MINOR`).

### 2. Build Settings
1.  Amplify automatically detects Next.js.
2.  **Important**: Check the "Monorepo" settings if requested, or explicitly set the **base directory** to `react_library_dir`.
    *   Click "Edit" on the Repository settings step if possible to specify `react_library_dir` as the app root.
    *   OR after selecting the repo, look for **Monorepo settings** and enter `react_library_dir`.
3.  **Build Command**:
    ```bash
    cd react_library_dir && npm install && npm run build
    ```
    *(Amplify usually auto-detects this if you point it to the folder)*.

### 3. Environment Variables
1.  Add your environment variables in the Amplify console:
    *   `NEXT_PUBLIC_API_URL`: `http://<YOUR_EC2_PUBLIC_IP>:5000` (The backend URL from Part 1).
2.  **Deploy**.

### 4. Finalize
*   Wait for the deployment to finish.
*   Click the provided domain (e.g., `https://main.d123.amplifyapp.com`) to view your live site.

---

## Part 3: Secure Backend with Nginx & SSL (Production Ready)

Running your backend on `http://IP:5000` is insecure and will cause "Mixed Content" errors when your frontend uses HTTPS. We will use **Nginx** as a reverse proxy and **Certbot** for free SSL.

### 1. Install Nginx
Run on your EC2 instance:
```bash
sudo apt install nginx -y
```

### 2. Configure Nginx Reverse Proxy
1.  Remove the default config:
    ```bash
    sudo rm /etc/nginx/sites-enabled/default
    ```
2.  Create a new config file:
    ```bash
    sudo nano /etc/nginx/sites-available/minor-backend
    ```
3.  **Paste the following code** (Replace `your-domain.com` with your actual domain, or just use `_` if you only have an IP for now):

    ```nginx
    server {
        listen 80;
        server_name _; # Use '3.110.203.240' for all domains/IPs if you don't have a domain yet

        location / {
            proxy_pass http://localhost:5000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```
4.  Save and Exit: `Ctrl+X` -> `Y` -> `Enter`.

5.  Enable the new site:
    ```bash
    sudo ln -s /etc/nginx/sites-available/minor-backend /etc/nginx/sites-enabled/
    ```
6.  Test and Restart Nginx:
    ```bash
    sudo nginx -t
    sudo systemctl restart nginx
    ```

**Now your backend is accessible on Port 80 (HTTP)!**
*   Test: `http://<YOUR_EC2_PUBLIC_IP>` (No need for `:5000` anymore).

---

## Part 4: Add SSL (HTTPS) with Certbot
**Prerequisite**: You MUST have a custom domain name (e.g., `api.myapp.com`) pointing to your EC2 IP address. **You cannot get an SSL certificate for an AWS Public IP.**

If you have a domain:
1.  Install Certbot:
    ```bash
    sudo apt install certbot python3-certbot-nginx -y
    ```
2.  Update Nginx config `server_name` to your real domain:
    ```bash
    sudo nano /etc/nginx/sites-available/minor-backend
    # Change 'server_name _;' to 'server_name api.yourdomain.com;'
    ```
3.  Obtain Certificate:
    ```bash
    sudo certbot --nginx -d api.yourdomain.com
    ```
4.  Follow instructions (Select '2' to Redirect HTTP to HTTPS).

**Done! Your backend is now `https://api.yourdomain.com`.**
*   Update your Frontend Env Variable `NEXT_PUBLIC_API_URL` to this new HTTPS URL.
