"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
});

const ContactUs = () => {
  const router = useRouter();
  const contactForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      details: " ",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/contact/add`, values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("Response sent Successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to send Response");
        });
    },
    validationSchema: ContactSchema,
  });

  return (
    <div className="rounded-xl via-transparent">
      <div className="mt-1 max-w-5xl max-lg:max-w-3xl mx-auto rounded-lg ">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 lg:grid-cols-2 sm:p-8 p-4 font-[sans-serif] ">
          {/* Form Start */}
          <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-800 ">
            <div className="px-8 py-12 ">
              <div className="flex justify-center mx-auto ">
                <img
                  className="w-auto h-7 sm:h-8"
                  src="https://merakiui.com/images/logo.svg"
                  alt=""
                />
              </div>
              <h3 className="mt-2 text-3xl font-medium text-center text-gray-600 dark:text-gray-200">
                Contact Us
              </h3>
              <form onSubmit={contactForm.handleSubmit}>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-xl"> </label>
                  {contactForm.errors.name && contactForm.touched.name ? (
                    <div className="text-red-500 text-sm">
                      {contactForm.errors.name}
                    </div>
                  ) : null}
                  <input
                    className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    placeholder="Your Name"
                    aria-label="Enter Your Name "
                    id="name"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.name}
                  />
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-xl "></label>
                  {contactForm.errors.email && contactForm.touched.email ? (
                    <div className="text-red-500 text-sm">
                      {contactForm.errors.email}
                    </div>
                  ) : null}
                  <input
                    className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    id="email"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.email}
                  />
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-xl "></label>
                  {contactForm.errors.phone && contactForm.touched.phone ? (
                    <div className="text-red-500 text-sm">
                      {contactForm.errors.phone}
                    </div>
                  ) : null}
                  <input
                    className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="number"
                    placeholder="Enter Your Number"
                    aria-label="Enter Your Number"
                    id="phone"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.phone}
                  />
                </div>
                <div className="w-full mt-4">
                  <label className="block mb-2 text-xl "></label>
                  {contactForm.errors.details && contactForm.touched.details ? (
                    <div className="text-red-500 text-sm">
                      {contactForm.errors.details}
                    </div>
                  ) : null}
                  <textarea
                    className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    placeholder="Enter Message or Query "
                    aria-label="Details"
                    id="details"
                    onChange={contactForm.handleChange}
                    value={contactForm.values.details}
                  />
                </div>

                <div className="flex items-center justify-center mt-4">
                  <button className="px-6 w-full py-2 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-400 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Form Complete  */}
          <div>
            <div className="mt-8 md:mb-8 max-w-2xl hidden md:block ">
              <h1 className="mb-6 font-semibold text-gray-800 text-3xl lg:text-5xl ">
                Fully customizable rules to match{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-blue-500 to-violet-600 text-transparent">
                  your unique needs
                </span>
              </h1>
              <p className="text-gray-900 text-lg">
                Have some big idea or brand to develop and need help? Then reach
                out we&apos;d love to hear about your project and provide help.
              </p>
            </div>

            {/* End Title */}
            {/* Blockquote */}
            <blockquote className="hidden md:block relative max-w-sm">
              <svg
                className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>
              <div className="relative z-10">
                <p className="text-xl italic text-gray-800">
                  Amazing people to work with. Very fast and professional
                  partner.
                </p>
              </div>
              <footer className="mt-3">
                <div className="flex items-center gap-x-4">
                  <div className="shrink-0">
                    <img
                      className="size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  <div className="grow">
                    <div className="font-semibold text-gray-800">
                      Josh Grazioso
                    </div>
                    <div className="text-xs text-gray-500">
                      Director Payments &amp; Risk | Airbnb
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
            {/* End Blockquote */}
          </div>
        </div>
      </div>

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

export default ContactUs;
