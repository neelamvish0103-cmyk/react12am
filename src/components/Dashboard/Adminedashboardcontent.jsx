import React from "react";

const Adminedashboardcontent = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-teal-100 to-blue-100">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5 rounded-r-3xl">
        <h2 className="text-xl font-bold text-teal-600 mb-6">CoachPro</h2>

        <ul className="space-y-4">
          <li className="bg-teal-500 text-white p-2 rounded-lg">Dashboard</li>
          <li className="hover:text-teal-500 cursor-pointer">Squad</li>
          <li className="hover:text-teal-500 cursor-pointer">Messenger</li>
          <li className="hover:text-teal-500 cursor-pointer">Statistics</li>
          <li className="hover:text-teal-500 cursor-pointer">Calendar</li>
          <li className="hover:text-teal-500 cursor-pointer">Finance</li>
          <li className="hover:text-teal-500 cursor-pointer">Transfers</li>
          <li className="hover:text-teal-500 cursor-pointer">Youth Academy</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-lg"
            />
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Next Game</h3>
            <p>Juventus vs Sassuolo</p>
            <p className="text-sm text-gray-500">10 Nov 2020</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Game Statistics</h3>
            <p>Wins: 6 | Draws: 1 | Lost: 1</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-2">Possession</h3>
            <p className="text-2xl font-bold text-teal-500">65%</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-3 gap-4">

          {/* Standings Table */}
          <div className="col-span-2 bg-white p-4 rounded-xl shadow">
            <h3 className="font-semibold mb-4">Standings</h3>

            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Team</th>
                  <th>Pts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juventus</td>
                  <td>19</td>
                </tr>
                <tr>
                  <td>Inter</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Milan</td>
                  <td>13</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Side Cards */}
          <div className="space-y-4">

            <div className="bg-white p-4 rounded-xl shadow">
              <h3>Overall Price</h3>
              <p className="text-xl font-bold">$690.2m</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h3>Transfer Budget</h3>
              <p className="text-xl font-bold">$240.6m</p>
            </div>

            <div className="bg-teal-500 text-white p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2">Setup Training</h3>
              <p className="text-sm">Plan training for next week</p>
              <button className="mt-2 bg-white text-teal-500 px-3 py-1 rounded">
                Go
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Adminedashboardcontent;