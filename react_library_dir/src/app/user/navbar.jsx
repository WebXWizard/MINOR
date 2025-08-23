"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-auto max-w-screen-2xl px-2 md:px-4 mt-1 ml-1 mr-1 rounded-lg bg-zinc-900">
      <header className="flex flex-wrap items-center justify-between py-1 font-[sans-serif]">
        {/* logo - start */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white font-bold"
          aria-label="logo"
        >
          <img
            className="w-auto h-12"
            src="https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg"
            alt=""
          />
          React Library Directory
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>

        {/* Navigation and buttons container */}
        <div
          className={`w-full lg:flex lg:w-auto lg:items-center ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* nav - start */}
          <nav className="flex flex-col gap-4 lg:flex-row lg:gap-16 mt-4 lg:mt-0">
             <Link
                href="/"
                className="text-xl font-semibold text-white hover:border-b-2 border-blue-400"
              >
                Home
              </Link>

              <Link
                href="/user/about"
                className="text-xl font-semibold text-white hover:border-b-2 border-blue-400"
              >
                About Us
              </Link>
              <Link
                href="/user/browseLibraries"
                className="text-xl font-semibold text-white hover:border-b-2 border-blue-400"
              >
                Browse Libraries
              </Link>
              <Link
                href="/user/contactUs"
                className="text-xl font-semibold text-white hover:border-b-2 border-blue-400"
              >
                Contact Us
              </Link>
               <Link
                href="/user/adminLogin"
                className="text-xl font-semibold text-white hover:border-b-2 border-blue-400"
              >
                Admin
              </Link>
          </nav>

          {/* buttons - start */}
          <div className="mt-4 lg:mt-0 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:ml-5">
            <Link
              href="/user/login"
              className="inline-block rounded-lg px-4 py-3 text-center text-xl font-semibold text-white outline-none ring-indigo-300 hover:bg-zinc-800"
            >
              Sign in
            </Link>
            <Link
              href="/user/signup"
              className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-center text-xl font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-800 focus-visible:ring active:bg-indigo-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
