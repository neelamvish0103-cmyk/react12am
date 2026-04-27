import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/v1/auth/register", form);
      alert("Signup Successful ✅");
      console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Error during signup ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">

      {/* Card */}
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-96 text-white">

        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/30 placeholder-white outline-none"
          />

          {/* Button */}
          <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-lg hover:bg-gray-200 transition">
            Sign Up
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-4">
          Already have an account? <span className="underline cursor-pointer">Login</span>
        </p>

      </div>
    </div>
  );
};

export default Signup;