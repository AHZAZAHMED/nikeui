import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import manlogo from '@/app/assets/man logo.png'


 const UpperHeader = () => {
  return (

        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image
              src={manlogo}  alt="Logo"
              className="h-6 w-auto" 
            />
          </div>
    
          {/* Options Section */}
          <div className="flex items-center space-x-4 text-xs md:text-sm text-[#111111]">
            <Link href="/Products" className="hover:underline">
              Find a Store
            </Link>
            <span className="border-l border-[#111111] h-4"></span>
            <Link href="#" className="hover:underline">
              Help
            </Link>
            <span className="border-l border-[#111111] h-4"></span>
            <Link href="/JoinUs" className="hover:underline">
              Join Us
            </Link>
            <span className="border-l border-[#111111] h-4"></span>
            <Link href="/LoginPage" className="hover:underline">
              Sign In
            </Link>
          </div>
        </div>

  )
}


export default UpperHeader
