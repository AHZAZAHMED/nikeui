"use client"

import { SignIn,  } from "@clerk/nextjs";


export default function NikeLogin() {


  return (
  
    <div className="flex justify-center p-5">
      <SignIn/>
    </div>
  );
}
