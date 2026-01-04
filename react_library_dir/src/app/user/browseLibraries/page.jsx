"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useParams, Link } from "react-router-dom";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const Browse = () => {
  const [product, setProduct] = useState([]);
  const [selLibrary, setSelLibrary] = useState(null);
  const [filterProduct, setFilterProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("https://minor-backend-pearl.vercel.app/library/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    if (res.status === 200) {
      // const data = await res.json();
      console.log(data);
      setProduct(data);
      setFilterProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const displayProduct = () => {
    return product.map((obj) => (
      <div
        key={obj._id} // Add unique key here
        className="container font-sans-serif bg-gray-500 rounded-2xl shadow-2xl"
      >
        <div className="">
          <div className="container mx-auto px-1 py-1">
            <div className="flex sm:justify-center rounded-xl shadow-2xl">
              <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
                <img
                  src={obj.url}
                  alt="Headless UI"
                  className="w-96 h-72 object-cover"
                />
                <div className="p-4 md:p-6 mb-2">
                  <h3 className="text-4xl font-bold font-[sans-serif] text-indigo-500 dark:text-indigo-400 mb-8">
                    {obj.name}
                  </h3>

                  <Button
                    onClick={() => {
                      open();
                      setSelLibrary(obj);
                    }}
                    className="inline-block w-full text-center bg-blue-500 text-white py-2 text-2xl rounded-md hover:bg-blue-700 transition font-[sans-serif]"
                  >
                    Browse Library
                  </Button>
                </div>
              </div>

              {/* Add more items as needed, following the same structure */}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // For Searching(Filter)
  const applysearch = (e) => {
    const value = e.target.value;
    setProduct(
      product.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  // For Filtering of Products By Category

  const filterBYCategory = (product) => {
    console.log(product);
    const filteredProduct = filterProduct.filter((col) =>
      col.category.toLowerCase().includes(product.toLowerCase())
    );
    setProduct(filteredProduct);
  };

  return (
    <div className="">
      {/* Dialogue Panel */}
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none font-sans-serif"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2">
            {selLibrary !== null && (
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-gray-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <img
                  src={selLibrary.url}
                  alt=""
                  className=" mt-2 w-full h-72 object-cover rounded-xl mb-2"
                />
                <div className="space-y-4 text-gray-700  mb-4 text-lg two-lines">
                  <p className="text-gray-700 text-xl">
                    <strong>Library Name:</strong> {selLibrary.name}
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Category:</strong> {selLibrary.category}
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Package_Name:</strong> {selLibrary.package_name}
                  </p>
                  <p className="text-gray-700 text-xl">
                    <strong>Description:</strong> {selLibrary.description}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={selLibrary.link}
                    className="inline-block w-full text-center bg-indigo-800 text-white py-2 text-xl rounded-md hover:bg-gray-700 transition"
                  >
                    View Library
                  </a>
                </div>
              </DialogPanel>
            )}
          </div>
        </div>
      </Dialog>

      <div className="container ">
        {/* Title */}
        <div className="relative overflow-hidden font-[sans-serif] mt-8">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-semibold text-gray-800">
                Explore Libraries
              </h1>
              <p className="mt-3 text-gray-600 text-xl">
                Stay in the know with React Library Directory.
              </p>
              <div className="mt-4 sm:mt-8 mx-auto max-w-xl relative">
                {/* Form */}
                <form>
                  <div className="relative z-10 flex gap-x-3 p-3 bg-white border rounded-2xl shadow-lg shadow-gray-100">
                    <div className="w-full">
                      <label
                        htmlFor="hs-search-article-1"
                        className="block text-lg text-gray-900 "
                      >
                        {/* <span className=" text-md">Search article</span> */}
                      </label>
                      <input
                        type="email"
                        name="hs-search-article-1"
                        id="hs-search-article-1"
                        className="py-2.5 px-6 block w-full border-transparent rounded-xl focus:border-blue-500 focus:ring-blue-500 text-xl"
                        placeholder="Search Libraries"
                        onChange={applysearch}
                      />
                    </div>
                    <div>
                      <a
                        className="size-[46px] inline-flex justify-center items-center gap-x-2 text-md font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-5"
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
                          <circle cx={11} cy={11} r={8} />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </form>
                {/* End Form */}
                {/* SVG Element */}
                <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
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
                {/* SVG Element */}
                <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                  <svg
                    className="w-40 h-auto text-cyan-500"
                    width={347}
                    height={188}
                    viewBox="0 0 347 188"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                      stroke="currentColor"
                      strokeWidth={7}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                {/* End SVG Element */}
              </div>
              <div className="mt-8 sm:mt-8">
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={(e) => filterBYCategory("UI Marketplace")}
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
                    <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  UI Marketplace
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={(e) => filterBYCategory("FrontEnd")}
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
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  Front-End
                </button>
                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={(e) => filterBYCategory("Animations")}
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  Animations
                </button>

                {/* <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={(e) => filterBYCategory("Performance")}
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
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                  Performance
                </button> */}

                <button
                  className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={(e) => filterBYCategory("Open Source")}
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
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                  Open Source
                </button>
                {/* <a
                    className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-md font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
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
                      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                    </svg>
                    MacBook
                  </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="mt-8 justify-center lg:ml-16 md:ml-12 sm:ml-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {" "}
          {displayProduct()}{" "}
        </div>
      </div>

  
       {/* Footer Section */}
      <footer className="w-full font-[sans-serif] bg-gray-50 py-4 mt-4">
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

export default Browse;
