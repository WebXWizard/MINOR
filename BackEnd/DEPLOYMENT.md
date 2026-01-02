# Backend Deployment Guide (Render)

This guide walks you through deploying your backend API to [Render.com](https://render.com).

## Prerequisites
1.  **GitHub Repository**: Ensure your code is pushed to a GitHub repository.
2.  **Render Account**: Sign up at [dashboard.render.com](https://dashboard.render.com).

## Steps

### 1. Create a New Web Service
1.  Log in to your Render dashboard.
2.  Click the **"New +"** button and select **"Web Service"**.
3.  Connect your GitHub account if you haven't already.
4.  Search for your repository (e.g., `WebXWizard/MINOR`) and click **"Connect"**.

### 2. Configure the Service
Fill in the details as follows:

| Field | Value |
| :--- | :--- |
| **Name** | Choose a unique name (e.g., `minor-backend`) |
| **Region** | Singapore (or closest to you) |
| **Branch** | `main` (or your working branch) |
| **Root Directory** | `BackEnd` (Important! Since your app is in a subfolder) |
| **Runtime** | Node |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

### 3. Environment Variables
Scroll down to the **Environment Variables** section and add the following:

| Key | Value |
| :--- | :--- |
| `MONGODB_URL` | Your MongoDB Connection String (from `.env`) |
| `PORT` | `5000` (Render will override this, but good to have) |

> **Note**: Do NOT commit your `.env` file. Copy the *values* from your local `.env` and paste them here.

### 4. Deploy
1.  Click **"Create Web Service"**.
2.  Render will start building your app. Watch the logs.
3.  Once the build finishes, you will see a green **"Live"** badge.
4.  Your API URL will be displayed at the top (e.g., `https://minor-backend.onrender.com`).

### 5. Update Frontend (Important!)
After deployment, go to your Frontend code (`react_library_dir/src/app/...`) and update all API calls:
- **Change**: `http://localhost:5000`
- **To**: `https://your-new-render-url.onrender.com`

## Troubleshooting
- **Build Failed?**: Check if you set the **Root Directory** correctly to `BackEnd`.
- **Connection Error?**: Ensure `MONGODB_URL` is correct and your MongoDB Atlas IP Access List allows `0.0.0.0/0` (Allow Access from Anywhere).
