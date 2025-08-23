"use client";
import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <div className="relative overflow-hidden mt-1 bg-gradient-to-bl from-indigo-900 via-transparent font-[sans-serif] ">
        <div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
              React Library Hub Is Designed for
              <span className="text-blue-600"> You to Get More Simple</span>
            </h1>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            <div className="w-full object-cover h-96 sm:h-[480px] bg-[url('https://i.pinimg.com/564x/52/9f/59/529f59b59e2e18b081d572f21208d38f.jpg')] bg-no-repeat bg-center bg-cover rounded-xl" />
            <div className="absolute inset-0 size-full">
              <div className="flex flex-col justify-center items-center size-full">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  href="https://www.youtube.com/watch?v=LzJsuPm9UuM"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play the overview
                </a>
              </div>
            </div>
            <div className="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
              <div className="bg-white size-48 rounded-lg" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
              <div className="bg-white size-48 rounded-full mb-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <section
        id="goal"
        className=" p-8 rounded-xl shadow-md font-[sans-serif]"
      >
        <h2 className="lg:text-5xl sm:text-3xl font-bold text-indigo-600 mb-4 text-center">
          {" "}
          Your Guide to the Best React Libraries
        </h2>
        <p className="text-xl sm:text-lg text-gray-700 mb-4 max-w-7xl">
          At{" "}
          <span className="font-semibold text-blue-600">
            React Library Directory
          </span>
          , our mission is to make the development journey smoother and more
          efficient for React developers — from beginners to experienced
          professionals. We understand how time-consuming it can be to find the
          right tools and packages while building scalable and modern web
          applications.
        </p>
        <p className="text-lg text-gray-700 mb-6 max-w-6xl">
          That’s why we created this directory — to provide a centralized hub
          where you can discover, compare, and implement React libraries with
          confidence.
        </p>
        <p className="text-xl text-gray-700 mb-4 max-w-3xl">
          Our platform helps developers by offering:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
          <li>
            <span className="font-medium">Key features</span> of each library to
            help evaluate usefulness at a glance
          </li>
          <li>
            <span className="font-medium">Installation guides</span> for quick
            setup
          </li>
          <li>
            <span className="font-medium">Code examples</span> to demonstrate
            real-world usage
          </li>
          <li>
            <span className="font-medium">Direct links</span> to official
            documentation and GitHub repositories
          </li>
        </ul>
        <p className="text-lg text-gray-700 max-w-6xl">
          Whether you're working on a personal project or a production-level
          app,{" "}
          <span className="font-semibold text-blue-600">
            React Library Directory
          </span>{" "}
          empowers you to build faster, smarter, and with confidence.
        </p>
      </section>

      {/* Testimonial Section */}
      <section className="bg-white font-[sans-serif]">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-lg mx-auto">
            <svg
              className="h-12 mx-auto mb-3  dark:text-gray-800"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="lg:text-2xl sm:text-lg font-medium text-gray-700 ">
                React Library Directory has become a regular part of my
                development workflow. Whether I need a UI kit or a form helper,
                it’s all just a few clicks away.This platform is exactly what
                the React community needed. Clean UI, fast search, and
                well-organized categories. I discovered libraries I hadn’t even
                heard of before
              </p>
            </blockquote>
          </figure>
        </div>
      </section>

    {/* Footer Section */}
      <footer className="w-full font-[sans-serif] bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/*Grid*/}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-2 lg:col-span-2 lg:mb-0">
              <a
                href="/"
                className="text-xl font-bold flex justify-center lg:justify-start"
              >
                React Library Directory
              </a>
              <p className="py-4 text-md text-gray-500 lg:max-w-xs text-center lg:text-left">
                Trusted in more than 100 countries &amp; 5 million customers.
                Have any query ?
              </p>
              <a
                href="/user/contactUs"
                className="py-2 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-md text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
              >
                Contact us
              </a>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Company
              </h4>
              <ul className="text-md  transition-all duration-500">
                <li className="mb-6">
                  <a href="/" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/user/about"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/user/browseLibraries"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Our Libraries
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Products
              </h4>
              <ul className="text-md  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="/user/browseLibraries"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    UI Components
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/user/browseLibraries"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    UI Kits
                  </a>
                </li>
                <li>
                  <a
                    href="/user/browseLibraries"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    React Libraries
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Support
              </h4>
              <ul className="text-md  transition-all duration-500">
                <li className="mb-6">
                  <a
                    href="/user/contactUs"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Customer Support
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/user/signup"
                    className=" text-gray-600 hover:text-gray-900"
                  >
                    Become a Member
                  </a>
                </li>
              </ul>
            </div>
            {/*End Col*/}
            <div className="lg:mx-auto text-left ">
              <h4 className="text-lg text-gray-900 font-medium mb-7">
                Subscribe
              </h4>
              <p className="text-md text-gray-500 leading-6 mb-7">
                Subscribe to get the latest news from us
              </p>
              <a
                href="/user/login"
                className="flex items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit lg:mx-0  text-md text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50"
              >
                Subscribe
                <svg
                  width={15}
                  height={12}
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                    stroke="#4F46E5"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/*Grid*/}
          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-lg text-gray-500 ">
                ©<a href="https://pagedone.io/">React Library Directory</a>{" "}
                2025, All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
