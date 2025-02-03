import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.png"

const JoinUs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center">
          <Image
            className="w-12 mx-auto"
            src={logo} // Replace with the actual logo path
            alt="Nike Logo"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">BECOME A NIKE MEMBER</h2>
          <p className="mt-2 text-gray-600">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="text"
            placeholder="Date of Birth"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <p className=" text-gray-600">Get a Nike Member Reward every year on your Birthday.</p>

          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>

          <div className="flex justify-around">
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" value="male" className="focus:ring-black" />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="gender" value="female" className="focus:ring-black" />
              <span>Female</span>
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 text-black focus:ring-black" />
            <p className="text-sm text-gray-600">Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
          </div>

           {/* Privacy Policy */}
        <p className="text-sm text-gray-500 text-center">
          By logging in, you agree to Nike's
          <a
            href="#"
            className="text-black font-medium hover:underline mx-1"
          >
            Privacy Policy
          </a>
          and
          <a
            href="#"
            className="text-black font-medium hover:underline mx-1"
          >
            Terms of Use
          </a>
          .
        </p>

          <button
            type="submit"
            className="w-full py-3 text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-black"
          >
            JOIN US
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already a Member? <a href="/LoginPage" className="text-black underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
