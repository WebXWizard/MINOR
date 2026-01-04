"use client";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
// import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const UpdateLibrary = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`https://minor-backend-pearl.vercel.app/library/getbyid/${id}`);
      setUserData(res.data);
    };
    fetchUserData();
  }, [id]);

  const router = useRouter();
  const addLibraryForm = useFormik({
    initialValues: {
      name: "",
      category: "",
      url: "",
      link: " ",
      package_name: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .put("https://minor-backend-pearl.vercel.app/library/update/" + id, values)
        .then((response) => {
          // console.log(response.status)
          // resetForm()
          toast.success("User Updated Successfully");
          router.push("/admin/manageLibrary");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to update Library");
        });
    },
  });
  return (
    <div>
      <div className="rounded-xl via-transparent">
        <div className="mt-1 max-w-5xl lg:max-w-6xl mx-auto rounded-lg ">
          <div className="grid md:grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 sm:p-8 p-4 font-[sans-serif] ">
            <div>
              <div>
                {/* Title */}
                <div className="mt-8 md:mb-12 max-w-2xl hidden sm:block">
                  <h1 className="mb-4 font-bold text-gray-800 text-4xl lg:text-5xl">
                    Fully customizable rules to match your unique needs
                  </h1>
                  <p className="text-gray-600 text-xl">
                    We provide you with a test account that can be set up in
                    seconds. Our main focus is getting responses to you as soon
                    as we can.
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
                  <div className="relative z-10 mb-8">
                    <p className="text-xl italic text-gray-800 ">
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
              {/* <div className="mt-8 md:mb-4 max-w-2xl hidden md:block ">
                <h1 className="mb-6 font-semibold text-indigo-800 text-3xl lg:text-5xl ">
                  Add Your Library to Match{" "}
                  <span className="bg-clip-text bg-gradient-to-tl from-sky-500 to-green-600 text-transparent">
                    Our Unique Needs
                  </span>
                </h1>
                <h1 className="mb-2 font-bold  text-xl lg:text-2xl ">
                  <span className="bg-clip-text ">
                    Top Libraries and Frameworks-
                  </span>
                </h1>
                <div className="">
                  <p className="text-black-900 text-xl font-medium font-sans-serif">
                    1- Material UI
                  </p>
                 
                  <p className="text-black-900 text-xl font-semibold font-sans-serif">
                    2- Blueprint UI
                  </p>
                  <p className="text-black-900 text-xl font-medium font-sans-serif">
                    3- Grommet UI
                  </p>
                  <p className="text-black-900 text-xl font-semibold font-sans-serif">
                    4- Semantic UI
                  </p>
                  <p className="text-black-900 text-xl font-medium font-sans-serif">
                    5- React Router
                  </p>
                  <p className="text-black-900 text-xl font-semibold font-sans-serif">
                    6- React Admin
                  </p>
                  <p className="text-black-900 text-xl font-medium font-sans-serif">
                    7- React Redux
                  </p>
                </div>
              </div> */}

              {/* <blockquote className="hidden md:block relative max-w-sm">
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
                    Amazing Frameworks to work with. Very reliable and
                    efficient.
                  </p>
                </div>
              </blockquote>
             */}
            </div>
            {/* Form Start */}
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-800 ">
              <div className="px-8 py-10 ">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5 ">
                  <h3 className=" text-2xl font-bold  flex justify-center text-center ml-8 text-gray-600 dark:text-gray-200 font-sans-serif">
                    Add Library
                  </h3>
                  <img
                    className="mt-0 relative z-10  hidden md:block size-16 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-neutral-900 "
                    src="https://p1.hiclipart.com/preview/461/589/314/react-logo-angular-angularjs-front-and-back-ends-javascript-data-software-framework-ionic-png-clipart.jpg"
                    alt="Avatar"
                  />
                </div>
                {userData !== null ? (
                  <Formik initialValues={userData} onSubmit={signUpForm}>
                    {(updateForm) => {
                      return (
                        <form onSubmit={addLibraryForm.handleSubmit}>
                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl"> </label>
                            {addLibraryForm.errors.name &&
                            addLibraryForm.touched.name ? (
                              <div className="text-red-500 text-sm">
                                {addLibraryForm.errors.name}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="text"
                              placeholder="Library Name"
                              aria-label="Enter Your Name "
                              id="name"
                              onChange={addLibraryForm.handleChange}
                              value={addLibraryForm.values.name}
                            />
                          </div>
                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>
                            {addLibraryForm.errors.category &&
                            addLibraryForm.touched.category ? (
                              <div className="text-red-500 text-sm">
                                {addLibraryForm.errors.category}
                              </div>
                            ) : null}
                            <select
                              id="category"
                              onChange={addLibraryForm.handleChange}
                              value={addLibraryForm.values.category}
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                              <option value="">Category</option>
                              <option>FrontEnd</option>
                              <option>BackEnd</option>
                              <option> UI Marketplace</option>
                              <option>Animations</option>
                              <option>Open source</option>
                              <option>Dev Tools</option>
                              <option>Others</option>
                            </select>
                          </div>

                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>
                            {addLibraryForm.errors.url &&
                            addLibraryForm.touched.url ? (
                              <div className="text-red-500 text-sm">
                                {addLibraryForm.errors.url}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="text"
                              placeholder="Enter Image URL"
                              aria-label="Email Address"
                              id="url"
                              onChange={addLibraryForm.handleChange}
                              value={addLibraryForm.values.url}
                            />
                          </div>
                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>
                            {addLibraryForm.errors.link &&
                            addLibraryForm.touched.link ? (
                              <div className="text-red-500 text-sm">
                                {addLibraryForm.errors.link}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="text"
                              placeholder="Enter Repository Link"
                              aria-label="Email Address"
                              id="link"
                              onChange={addLibraryForm.handleChange}
                              value={addLibraryForm.values.link}
                            />
                          </div>

                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>
                            {addLibraryForm.errors.package_name &&
                            addLibraryForm.touched.package_name ? (
                              <div className="text-red-500 text-sm">
                                {addLibraryForm.errors.package_name}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="text"
                              placeholder="Package_Name"
                              aria-label="Email Address"
                              id="package_name"
                              onChange={addLibraryForm.handleChange}
                              value={addLibraryForm.values.package_name}
                            />
                          </div>

                          {/* <div className="w-full mt-4">
                    <label className="block mb-2 text-xl "></label>
                    {addLibraryForm.errors.downloads &&
                    addLibraryForm.touched.downloads ? (
                      <div className="text-red-500 text-sm">
                        {addLibraryForm.errors.downloads}
                      </div>
                    ) : null}
                    <input
                      className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      placeholder="Download Link "
                      htmlFor="af-submit-project-url"
                      aria-label=""
                      id="downloads"
                      onChange={addLibraryForm.handleChange}
                      value={addLibraryForm.values.downloads}
                    />
                  </div> */}

                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>
                            {addLibraryForm.errors.description &&
                            addLibraryForm.touched.description ? (
                              <div className="text-red-500 text-sm">
                                {addLibraryForm.errors.description}
                              </div>
                            ) : null}

                            <textarea
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="text"
                              placeholder="Enter Description or Tags "
                              aria-label="Details"
                              id="description"
                              onChange={addLibraryForm.handleChange}
                              value={addLibraryForm.values.description}
                            />
                          </div>

                          <div className="flex items-center justify-center mt-4">
                            <button className="px-6 w-full py-2 text-md font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-400 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                              Add Library
                            </button>
                          </div>
                        </form>
                      );
                    }}
                  </Formik>
                ) : (
                  <p>Loading......</p>
                )}
              </div>
            </div>
            {/* Form Complete  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateLibrary;
