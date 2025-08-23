"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";

const ManageUser = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserList = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user/getall");
      setUserList(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch User List");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/delete/${id}`);
      toast.success("User Deleted Successfully");
      fetchUserList();
    } catch (err) {
      console.error(err);
      toast.error("Failed to Delete User");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-200 rounded-xl font-[sans-serif] ml-4">
      <div className="lg:max-w-[95%] mx-auto">
        <div className="border rounded-xl shadow-lg p-8 bg-cyan-200">
          <h1 className="text-center font-bold text-4xl mb-6">Manage User</h1>
          <table className="w-full mt-4 mb-2 rounded-lg">
            <thead className="bg-rose-300 rounded-xl text-white">
              <tr>
                <th className="p-2 border border-white">ID</th>
                <th className="p-2 border border-white">NAME</th>
                <th className="p-2 border border-white">EMAIL</th>
                <th className="p-2 border border-white">PASSWORD</th>
                <th colSpan={2} className="p-2 border border-white">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="bg-fuchsia-200 text-sm">
              {userList.map((user) => (
                <tr key={user._id}>
                  <td className="p-2 border">{user._id}</td>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.password}</td>
                  <td className="p-2 border">
                    <button 
                      onClick={() => deleteUser(user._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="p-2 border">
                    <Link
                      href={`/admin/updateUser/${user._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;