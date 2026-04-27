import React, { useState } from "react";
import { Search } from "lucide-react";

const Alluser = () => {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Priya Verma", email: "priya@gmail.com", role: "User", status: "Inactive" },
    { id: 3, name: "Amit Patel", email: "amit@gmail.com", role: "User", status: "Active" },
    { id: 4, name: "Neha Singh", email: "neha@gmail.com", role: "Editor", status: "Active" },
  ];

  // Filter users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">All Users</h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center bg-white p-3 rounded-xl shadow w-full md:w-1/3">
        <Search className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search users..."
          className="outline-none w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow p-5 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="py-2">ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="font-medium">{user.role}</td>

                {/* Status Badge */}
                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No users found</p>
        )}
      </div>
    </div>
  );
};

export default Alluser;