import React from "react"
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter,  FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f2f5f9] text-[#1a202c] px-6 py-12">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Logo + Newsletter */}
        <div className="md:col-span-4 space-y-6">
          <h1 className="text-5xl font-black italic">
            bo<span className="text-red-600">A</span>t
          </h1>

          <h2 className="text-2xl font-bold">
            Subscribe to our email alerts!
          </h2>

          <div className="relative max-w-sm">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-full shadow-sm outline-none pr-12"
            />
           <button
  type="submit"
  className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-black"
>
  →
</button>
          </div>
        </div>

        {/* Shop */}
        <div className="md:col-span-4">
          <h3 className="font-bold mb-6 text-lg">Shop</h3>
          <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600">
            <ul className="space-y-3">
              <li className="hover:text-black cursor-pointer">True Wireless Earbuds</li>
              <li className="hover:text-black cursor-pointer">Wired Headphones</li>
              <li className="hover:text-black cursor-pointer">Home Audio</li>
              <li className="hover:text-black cursor-pointer">Dashcams</li>
              <li className="hover:text-black cursor-pointer">TRebel</li>
              <li className="hover:text-black cursor-pointer font-semibold">Refer & Earn</li>
            </ul>

            <ul className="space-y-3">
              <li className="hover:text-black cursor-pointer">Wireless Headphones</li>
              <li className="hover:text-black cursor-pointer">Wireless Speakers</li>
              <li className="hover:text-black cursor-pointer">Smart Watches</li>
              <li className="hover:text-black cursor-pointer">Mobile Accessories</li>
              <li className="hover:text-black cursor-pointer">Misfit Trimmers</li>
            </ul>
          </div>
        </div>

        {/* Help */}
        <div className="md:col-span-2">
          <h3 className="font-bold mb-6 text-lg">Help</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">Track Your Order</li>
            <li className="hover:text-black cursor-pointer">Warranty & Support</li>
            <li className="hover:text-black cursor-pointer">Return Policy</li>
            <li className="hover:text-black cursor-pointer">Service Centers</li>
            <li className="hover:text-black cursor-pointer">Bulk Orders</li>
            <li className="hover:text-black cursor-pointer">Why Buy Direct</li>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-2">
          <h3 className="font-bold mb-6 text-lg">Company</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer">About boAt</li>
            <li className="hover:text-black cursor-pointer">News</li>
            <li className="hover:text-black cursor-pointer">Read Our Blog</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Security</li>
            <li className="hover:text-black cursor-pointer">Investor Relations</li>
            <li className="hover:text-black cursor-pointer">Social Responsibility</li>
          </ul>
        </div>
      </div>

      {/* Social Section */}
      <div className="flex flex-col items-center mt-10 gap-4">
        <p className="font-semibold">Let's get social</p>

        <div className="flex gap-5 text-lg">
          <FaFacebook className="cursor-pointer hover:opacity-70" />
          <FaTwitter className="cursor-pointer hover:opacity-70" />
          <FaInstagram className="cursor-pointer hover:opacity-70" />
          <FaYoutube className="cursor-pointer hover:opacity-70" />
          <FaLinkedin className="cursor-pointer hover:opacity-70" />
        </div>
      </div>

      {/* Policies */}
      <div className="flex flex-wrap justify-center items-center gap-2 text-xs mt-8 text-gray-600">
        <span className="cursor-pointer hover:text-black">Privacy Policy</span>
        <span>•</span>
        <span className="cursor-pointer hover:text-black">Terms of Use</span>
        <span>•</span>
        <span className="cursor-pointer hover:text-black">Warranty Policy</span>
        <span>•</span>
        <span className="cursor-pointer hover:text-black">
          D2D Paid Repair Service Policy
        </span>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400 mt-6">
        © 2026 Imagine Marketing Limited. All Rights Reserved.
      </p>

      {/* Address */}
      <p className="text-center text-[11px] text-gray-400 mt-4 max-w-2xl mx-auto">
        For queries contact us: Imagine Marketing Limited, Mumbai,
        Maharashtra-400093, India
      </p>

      {/* Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 bg-[#25D366] w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
        <span className="text-white text-xl font-bold">W</span>
      </div>

    </footer>
  );
};

export default Footer;