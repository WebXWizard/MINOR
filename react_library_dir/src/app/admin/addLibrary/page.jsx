"use client";
import React from "react";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddLibrary = () => {
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
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      axios
        .post("http://localhost:5000/library/add", values)
        .then((response) => {
          console.log(response.status);
          resetForm();
          toast.success("Library Added Successfully");
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to add Library");
        });
    },
  });
  return (
    <div>
      <div className="rounded-xl via-transparent">
        <div className=" mx-auto rounded-lg ">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 lg:grid-cols-1  font-[sans-serif] ">
            {/* Form Start */}
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-800 ">
              <div className="px-8 py-8 ">
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
                    {addLibraryForm.errors.url && addLibraryForm.touched.url ? (
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
              </div>
            </div>
            {/* Form Complete  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLibrary;
