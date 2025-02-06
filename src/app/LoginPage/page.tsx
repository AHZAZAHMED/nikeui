"use client"
import React, { useEffect } from "react";
import logo from "@/app/assets/logo.png"
import Image from "next/image";
import {SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";




export default function NikeLogin() {
 
    const { isSignedIn } = useUser();
const router = useRouter();

useEffect(() => {
  if (isSignedIn) {
    const redirectPath = sessionStorage.getItem("redirectAfterLogin") || "/";
    sessionStorage.removeItem("redirectAfterLogin"); // Clear after redirecting
    router.replace(redirectPath);
  }
}, [isSignedIn, router]);


    return (
    

<SignedOut>

<div className="flex flex-col items-center justify-center h-screen bg-gray-50">
  <Image
    src={logo} // Replace with your Nike logo if needed
    alt="Nike Logo"
    className="h-16 mb-8"
  />
  <h1 className="text-2xl font-bold text-gray-900 mb-4">
    YOUR ACCOUNT FOR EVERYTHING NIKE
  </h1>
  <p className="text-gray-700 text-center mb-8">
    Welcome Click below to sign in and access your account.
  </p>
  <SignInButton mode="redirect">
    <button className="px-6 py-3 bg-black text-white text-lg rounded-lg hover:bg-gray-800 transition">
      Sign In
    </button>
  </SignInButton>
  <p className="mt-6 text-sm text-gray-500">
        Not a Member? <a href="/JoinUs" className="text-blue-500">Join Us</a>.
      </p>
</div>
</SignedOut>

);
}
