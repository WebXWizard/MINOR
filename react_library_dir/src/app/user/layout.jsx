import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./navbar";

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

export const metadata = {
  title: "React Library Directory",
  description:
    "A web-based library directory built with Next.js that enables users to browse, search, and manage library resources with ",
  charset: "utf-8",
  keywords: " react libraries, web docs, mantineDev, reading",
  authors: [{ name: "WebXWizard" }],
};

export default function UserLayout({ children }) {  // Renamed to UserLayout
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
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
      <Navbar />
      {children}
    </div>
  );
}