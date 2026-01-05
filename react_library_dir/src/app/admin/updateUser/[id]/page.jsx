"use client";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const UpdateUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/getbyid/${id}`);
      setUserData(res.data);
    };
    fetchUserData();
  }, [id]);

  const router = useRouter();
  const signUpForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .put(`${process.env.NEXT_PUBLIC_API_URL}/user/update/${id}`, values)
        .then((response) => {
          // console.log(response.status)
          // resetForm()
          toast.success("User Updated Successfully");
          router.push("/manageUser");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to update User");
        });
    },
    validationSchema: SignUpSchema,
  });

  return (
    <div>
      <div className="font-[sans-serif] flex items-center md:h-fit py-4 rounded-lg bg-gray-50 ">
        <div className="w-full max-w-5xl mx-auto ">
          <div className="grid md:grid-cols-2 gap-20  shadow w-full sm:p-8 p-6 border border-gray-200 rounded-xl relative  ">
          <div className="grid grid-cols-1">
              <div className="">
                <div className="">
                  <div className=" mt-10 lg:mt-8">
                    <img
                      className="hidden md:block w-full rounded-xl "
                      src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-illustration-download-in-svg-png-gif-file-formats--log-register-form-user-interface-pack-design-development-illustrations-6430773.png"
                      alt="Hero Image"
                    />
                  </div>
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
                </div>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-2xl shadow-md dark:bg-gray-800 font-[sans-serif]">
              <div className="px-8 py-8">
                <div className="flex justify-center mx-auto">
                  <h3 className="mt-0 text-2xl font-bold text-center text-gray-600 dark:text-gray-200">
                    Create Your Account
                  </h3>
                </div>

                <div className="mt-6 justify-between">
                  <div className="mt-3 md:flex md:items-center md:-mx-2">
                    <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-lg md:w-auto md:mx-2 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="mx-2 text-md">Client</span>
                    </button>
                    <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <a
                        className="mx-2 text-md hidden lg:inline "
                        href="/login"
                      >
                        Worker
                      </a>
                    </button>
                  </div>
                </div>
                {/* Form */}
                {userData !== null ? (
                  <Formik initialValues={userData} onSubmit={signUpForm}>
                    {(updateForm) => {
                      return (
                        <form onSubmit={signUpForm.handleSubmit}>
                          <div className="w-full mt-5">
                            <label className="block mb-2 text-xl "></label>
                            {signUpForm.errors.name &&
                            signUpForm.touched.name ? (
                              <div className="text-red-500 text-sm">
                                {signUpForm.errors.name}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="text"
                              placeholder="Enter Your Name"
                              aria-label="Email Address"
                              id="name"
                              onChange={signUpForm.handleChange}
                              value={signUpForm.values.name}
                            />
                          </div>
                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>
                            {signUpForm.errors.email &&
                            signUpForm.touched.email ? (
                              <div className="text-red-500 text-sm">
                                {signUpForm.errors.email}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="email"
                              placeholder="Email Address"
                              aria-label="Email Address"
                              id="email"
                              onChange={signUpForm.handleChange}
                              value={signUpForm.values.email}
                            />
                          </div>
                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>

                            {signUpForm.errors.password &&
                            signUpForm.touched.password ? (
                              <div className="text-red-500 text-sm">
                                {signUpForm.errors.password}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="password"
                              placeholder="Enter Password"
                              aria-label="Password"
                              id="password"
                              onChange={signUpForm.handleChange}
                              value={signUpForm.values.password}
                            />
                          </div>
                          <div className="w-full mt-4">
                            <label className="block mb-2 text-xl "></label>

                            {signUpForm.errors.phone &&
                            signUpForm.touched.phone ? (
                              <div className="text-red-500 text-sm">
                                {signUpForm.errors.phone}
                              </div>
                            ) : null}
                            <input
                              className="block w-full px-4 py-2 mt-2 text-white placeholder-gray-500 bg-white border rounded-xl dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                              type="number"
                              placeholder="Enter Your Number"
                              aria-label="Password"
                              id="phone"
                              onChange={signUpForm.handleChange}
                              value={signUpForm.values.phone}
                            />
                          </div>

                          <div className="flex items-center justify-center mt-4">
                            <button
                              // type="button"
                              className="flex items-center justify-center w-full px-4 py-3 mx-2 text-lg font-medium text-white transition-colors duration-300 transform bg-blue-600 rounded-xl hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
                            >
                              {/* <svg class="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                  </svg> */}
                              Sign up
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
            <div className="divider absolute left-0 right-0 mx-auto w-1 h-full border-2 border-gray-400 max-md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
