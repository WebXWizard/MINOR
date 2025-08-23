import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Font configurations
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: true,
});

// Enhanced metadata
export const metadata = {
  title: "React Library Directory",
  description:
    "A web-based library directory built with Next.js that enables users to browse, search, and manage library resources with ",
  charset: "utf-8",
  keywords: " react libraries, web, mantineDev, reading",
  authors: [{ name: "WebXWizard" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster
          position="bottom-left"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
