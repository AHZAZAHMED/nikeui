import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logo.png"
import { SignInButton } from "@clerk/nextjs";

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

           {/* Privacy Policy */}
        <p className="text-sm text-gray-500 text-center">
          By logging in, you agree to Nike&apos;s
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
        <SignInButton mode="redirect">
          <button 
            type="submit"
            className="w-full py-3 text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-black"
          >
            JOIN US
          </button>
          </SignInButton>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already a Member? <a href="/LoginPage" className="text-black underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
