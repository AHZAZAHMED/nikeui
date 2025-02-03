import React from "react";
import logo from "@/app/assets/logo.png"
import Image from "next/image";

export default function NikeLogin() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6 lg:px-8">
      {/* Nike Logo */}
      <Image
        src={logo}
        alt="Nike Logo"
        className="h-6 w-auto mb-6"
      />

      {/* Heading */}
      <h1 className="text-xl font-bold text-center leading-tight">
        YOUR ACCOUNT
        <br />
        FOR EVERYTHING
        <br />
        NIKE
      </h1>

      {/* Form */}
      <form className="mt-8 w-full max-w-md space-y-4">
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Password"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
          />
        </div>

        {/* Keep me signed in & Forgot password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-black border-gray-300 rounded focus:ring-black"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block mobile:text-xs lg_mobile:text-sm text-gray-700"
            >
              Keep me signed in
            </label>
          </div>
          <div>
            <a
              href="#"
              className="mobile:text-xs lg_mobile:text-sm font-medium text-black hover:underline"
            >
              Forgotten your password?
            </a>
          </div>
        </div>

        {/* Privacy Policy */}
        <p className="text-xs text-gray-500 text-center">
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

        {/* Sign In Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            SIGN IN
          </button>
        </div>

        {/* Join Us Link */}
        <p className="mt-4 text-sm text-gray-700 text-center">
          Not a Member?
          <a
            href="/JoinUs"
            className="text-black font-medium hover:underline ml-1"
          >
            Join Us.
          </a>
        </p>
      </form>
    </div>
  );
}
