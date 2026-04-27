import React from 'react'
import { Search, ShoppingBag, Zap } from "lucide-react";
import { Outlet } from 'react-router-dom';
function Navbar() {
  return (
<>
<div className="w-full font-sans">
      {/* Top Promo Bar */}
      <div className="bg-gray-200 text-center text-sm py-2 position-fixed">
        Get Extra 5% Off On Prepaid Orders | Code:{" "}
        <span className="font-semibold">BOATHEAD</span> |{" "}
        <span className="underline cursor-pointer">Shop Now</span>
      </div>

      {/* Main Navbar */}
      <div className=" position-fixed flex items-center justify-between px-6 py-4 border-b">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide">
          bo<span className="text-red-500">A</span>t
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-8 text-gray-700 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer">
            Categories <span>▾</span>
          </div>
          <div className="cursor-pointer">boAt Personalisation</div>
          <div className="cursor-pointer">Corporate Orders</div>
          <div className="cursor-pointer">Gifting Store</div>
          <div className="flex items-center gap-1 cursor-pointer">
            More <span>▾</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-72">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder='Search "Speakers"'
              className="bg-transparent outline-none text-sm ml-2 w-full"
            />
          </div>

          {/* Icons */}
          <Zap className="w-5 h-5 cursor-pointer text-gray-700" />
          <ShoppingBag className="w-5 h-5 cursor-pointer text-gray-700" />
        </div>
      </div>
    </div>
    <Outlet/>
</>
  );
  
}

export default Navbar
