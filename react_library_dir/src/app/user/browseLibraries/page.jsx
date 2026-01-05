"use client";
import React, { useState, useEffect } from "react";
import { Button, Dialog, DialogPanel } from "@headlessui/react";

const Browse = () => {
  const [product, setProduct] = useState([]);
  const [selLibrary, setSelLibrary] = useState(null);
  const [filterProduct, setFilterProduct] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchProduct = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/library/getall`);
    const data = await res.json();
    if (res.status === 200) {
      setProduct(data);
      setFilterProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const displayProduct = () =>
    product.map((obj) => (
      <div
        key={obj._id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
      >
        <img
          src={obj.url}
          alt={obj.name}
          className="w-full h-56 sm:h-64 object-cover"
        />
        <div className="p-4 sm:p-5">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">{obj.name}</h3>
          <Button
            onClick={() => {
              open();
              setSelLibrary(obj);
            }}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Browse Library
          </Button>
        </div>
      </div>
    ));

  // Search Function
  const applysearch = (e) => {
    const value = e.target.value;
    setProduct(
      filterProduct.filter((p) =>
        p.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Filter by Category
  const filterBYCategory = (category) => {
    const filtered = filterProduct.filter((col) =>
      col.category.toLowerCase().includes(category.toLowerCase())
    );
    setProduct(filtered);
  };

  return (
    <div className="font-sans">
      {/* Modal */}
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {selLibrary && (
            <DialogPanel className="w-full max-w-lg rounded-2xl bg-gray-100 p-5 sm:p-6">
              <img
                src={selLibrary.url}
                alt={selLibrary.name}
                className="w-full h-60 sm:h-72 object-cover rounded-xl mb-4"
              />
              <div className="space-y-2 text-gray-700 text-base sm:text-lg mb-4">
                <p>
                  <strong>Library Name:</strong> {selLibrary.name}
                </p>
                <p>
                  <strong>Category:</strong> {selLibrary.category}
                </p>
                <p>
                  <strong>Package Name:</strong> {selLibrary.package_name}
                </p>
                <p>
                  <strong>Description:</strong> {selLibrary.description}
                </p>
              </div>
              <a
                href={selLibrary.link}
                className="inline-block w-full text-center bg-indigo-800 text-white py-2.5 rounded-lg hover:bg-gray-700 transition"
              >
                View Library
              </a>
            </DialogPanel>
          )}
        </div>
      </Dialog>

      {/* Header & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-gray-800">
            Explore Libraries
          </h1>
          <p className="mt-3 text-gray-600 text-lg sm:text-xl">
            Stay in the know with React Library Directory.
          </p>

          {/* Search Input */}
          <div className="mt-6 sm:mt-8 max-w-xl mx-auto">
            <div className="flex gap-3 bg-white border rounded-2xl shadow p-2 sm:p-3">
              <input
                type="text"
                placeholder="Search Libraries"
                className="w-full py-2 px-4 rounded-xl focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
                onChange={applysearch}
              />
              <div className="flex items-center">
                <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
                  🔍
                </button>
              </div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {["UI Marketplace", "FrontEnd", "Animations", "Open Source"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => filterBYCategory(cat)}
                  className="py-2 px-4 bg-white border rounded-lg shadow hover:bg-gray-50 text-gray-800 text-sm sm:text-base"
                >
                  {cat}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProduct()}
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-50 mt-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          <div className="col-span-full sm:col-span-2 text-center sm:text-left">
            <h2 className="text-xl font-bold mb-2">React Library Directory</h2>
            <p className="text-gray-500 mb-2">
              Trusted in more than 100 countries & 5 million customers.
            </p>
            <a
              href="/user/contactUs"
              className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition"
            >
              Contact us
            </a>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-2">Company</h4>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="/" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <a href="/user/about" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="/user/browseLibraries" className="hover:text-gray-900">
                  Our Libraries
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-2">Products</h4>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="/user/browseLibraries" className="hover:text-gray-900">
                  UI Components
                </a>
              </li>
              <li>
                <a href="/user/browseLibraries" className="hover:text-gray-900">
                  UI Kits
                </a>
              </li>
              <li>
                <a href="/user/browseLibraries" className="hover:text-gray-900">
                  React Libraries
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-medium mb-2">Support</h4>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="/user/contactUs" className="hover:text-gray-900">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/user/signup" className="hover:text-gray-900">
                  Become a Member
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-full sm:col-span-2 text-center sm:text-left">
            <h4 className="text-gray-900 font-medium mb-2">Subscribe</h4>
            <p className="text-gray-500 mb-2">Subscribe to get the latest news from us</p>
            <a
              href="/user/login"
              className="inline-flex items-center gap-2 border border-indigo-600 rounded-full py-2 px-4 text-indigo-600 hover:bg-indigo-50 transition"
            >
              Subscribe →
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          © 2025 React Library Directory. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Browse;
