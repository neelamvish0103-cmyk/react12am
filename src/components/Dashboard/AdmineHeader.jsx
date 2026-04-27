import React from "react";

export default function AdmineHeader() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">

      {/* Left - Logo / Title */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-teal-600">
        Admine Dashboard
        </h1>
      </div>

      {/* Middle - Search Bar */}
      <div className="hidden md:flex">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Right - Icons + Profile */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative">
          🔔
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold">
            A
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold">Admin</p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
        </div>

      </div>
    </header>
  );
}