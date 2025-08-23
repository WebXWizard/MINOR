"use client";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      {/* Navbar Section */}
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

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-transparent font-[sans-serif] mt-1 rounded-lg bg-slate-100 overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-lg text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 focus:outline-none focus:border-gray-300"
              href="#"
            >
              Join Us for More
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          {/* End Announcement Banner */}
          {/* Title */}
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
              Welcome to
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-800 text-transparent">
                The React Library Directory
              </span>
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-gray-500">
              The Library Hub Project aims to create a dynamic and inclusive
              community space that fosters a love for reading, learning, and
              collaboration.
            </p>
          </div>
          {/* Buttons */}
          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
              href="/user/browseLibraries"
            >
              Get Started
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <button
              type="button"
              href="/user/browseLibraries"
              className="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              Browse Libraries
              <span className="flex justify-center items-center bg-gray-200 rounded-md size-7">
                <svg
                  className="shrink-0 size-4 group-hover:rotate-6 transition"
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
                  <rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>
              </span>
            </button>
          </div>
          {/* End Buttons */}
          <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
            <span className="text-xl text-gray-600">Package Manager:</span>
            <span className="text-xl font-bold text-gray-900">npm</span>
            <svg
              className="size-5 text-gray-300"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 13L10 3"
                stroke="currentColor"
                strokeLinecap="round"
              />
            </svg>
            <a
              className="inline-flex items-center gap-x-1 text-xl text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
              href="#"
            >
              Installation Guide
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-[85rem]  bg-slate-100 px-4 py-8 sm:px-6 lg:px-8 lg:py-2 mx-auto font-[sans-serif]">
        <div className="relative p-6 md:p-16">
          {/* Grid */}
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2 className="text-2xl text-gray-500 font-bold sm:text-4xl">
                Fully Customizable Hub to Match Your Unique Needs
              </h2>
              {/* Tab Navs */}
              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl active"
                  id="tabs-with-card-item-1"
                  aria-selected="true"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
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
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        Library Catalog
                      </span>
                      <span className="block mt-1 text-gray-800">
                        A well-organized database of React libraries, complete
                        with descriptions, usage examples, and links to
                        documentation.
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl"
                  id="tabs-with-card-item-2"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
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
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        Integration Guides:
                      </span>
                      <span className="block mt-1 text-gray-800">
                        Detailed tutorials and guides on how to integrate
                        popular libraries into React projects, reducing setup
                        time and complexity
                      </span>
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl"
                  id="tabs-with-card-item-3"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-card-3"
                  aria-controls="tabs-with-card-3"
                  role="tab"
                >
                  <span className="flex gap-x-6">
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
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
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                        Search and Filter Options
                      </span>
                      <span className="block mt-1 text-gray-800">
                        Users can easily search for libraries based on
                        categories, popularity, or specific features, helping
                        them find the right tools for their needs
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
              {/* End Tab Navs */}
            </div>
            {/* End Col */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Tab Content */}
                <div className="lg:col-span-4 mt-10 lg:mt-0">
                  <img
                    className="w-full rounded-xl"
                    src="https://i.pinimg.com/564x/07/82/09/07820922dee89d68b7e99102110ad43e.jpg"
                    alt="Hero Image"
                  />
                </div>

                {/* End Tab Content */}
                {/* SVG Element */}
                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width={121}
                    height={135}
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      strokeWidth={10}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Background Color */}
          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-200 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
          </div>
          {/* End Background Color */}
        </div>
        <section id="goal" className="bg-gray-100 p-8 rounded-xl">
          <h2 className="text-4xl font-semibold text-indigo-600 mb-4">
            Discover. Learn. Implement.
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-6xl">
            React Library Directory is built with modern web technologies,
            demonstrating the power of React in organizing, searching, and
            displaying structured information effectively. Our goal is to
            simplify the development process by showcasing:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Key features of each library</li>
            <li>Installation guides</li>
            <li>Usage examples</li>
            <li>Direct links to documentation and repositories</li>
          </ul>
        </section>
      </div>

      {/* Testimonial Section */}
      <section className="px-8 py-10 lg:py-14 font-[sans-serif] bg-gradient-to-tr from-indigo-200 via-transparent">
        <div className="container mx-auto">
          <h2 className="block antialiased tracking-normal font-[sans-serif] font-semibold leading-[1.3] text-blue-gray-900 mb-4 !text-2xl lg:!text-4xl text-center">
            The Heartfelt Testimonials of our Community
          </h2>
          <p className="block antialiased text-xl font-normal leading-relaxed text-inherit max-w-7xl !text-gray-500 mb-10 ">
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.“Finally, a centralized place
            to explore quality React libraries. React Library Directory saves me
            hours of searching and comparing — super helpful for both new and
            experienced devs.”
          </p>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 font-[sans-serif]">
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 bg-gray-100/50 rounded-2xl p-6">
              <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
                <p className="block antialiased font-[sans-serif] leading-relaxed text-blue-gray-900 lg:mb-20 mb-4 text-2xl font-bold">
                  “React Library Directory is a game-changer. I found exactly
                  the library I needed within minutes. It’s like having a
                  curated toolbox for every React project!”
                </p>
              </div>
              <div className="p-6 px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <div>
                  <h6 className="block antialiased tracking-normal font-[sans-serif] text-base font-semibold leading-relaxed text-blue-gray-900">
                    Jessica Devis
                  </h6>
                  <p className="block antialiased font-[sans-serif] text-base leading-relaxed text-inherit font-normal !text-gray-500">
                    Full Stack Developer @Netflix
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 bg-gray-100/50 rounded-2xl p-6">
              <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
                <p className="block antialiased font-[sans-serif]leading-relaxed text-blue-gray-900 lg:mb-20 mb-4 text-2xl font-bold">
                  “This platform is exactly what the React community needed.
                  Clean UI, fast search, and well-organized categories. I
                  discovered libraries I hadn’t even heard of before!”
                </p>
              </div>
              <div className="p-6 px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <div>
                  <h6 className="block antialiased tracking-normal font-[sans-serif] text-base font-semibold leading-relaxed text-blue-gray-900">
                    Marcell Glock
                  </h6>
                  <p className="block antialiased font-[sans-serif] text-base leading-relaxed text-inherit font-normal !text-gray-500">
                    Graphic Designer, @Coinbase
                  </p>
                </div>
                <img
                  src="https://www.material-tailwind.com/image/Logo-coinbase.svg"
                  className="max-w-[8rem]"
                  alt="Marcell Glock"
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border bg-white text-gray-700 mt-8 bg-gray-100/50 text-center rounded-2xl p-6">
            <div className="relative bg-clip-border !mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none">
              <p className="block antialiased font-[sans-serif]text-blue-gray-900 mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold">
                “A must-bookmark for any React developer. This directory
                simplifies decision-making by bringing the best libraries into
                one place, complete with descriptions and links.”
              </p>
            </div>
            <div className="p-6 items-center mx-auto py-2">
              <h6 className="block antialiased tracking-normal font-[sans-serif] text-base font-semibold leading-relaxed text-blue-gray-900">
                Emma Roberts
              </h6>
              <p className="block antialiased font-[sans-serif] text-base leading-relaxed text-inherit font-normal !text-gray-500">
                Chief Executive @Spotify
              </p>
            </div>
          </div>
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

export default Home;
