'use client'
import Image from 'next/image'
import logo from "@/app/assets/logo.png"
import search from "@/app/assets/search.png"
import Link from 'next/link'
import heart from "@/app/assets/heart.png"
import cart from "@/app/assets/cart.png"
import navbar_icon from "@/app/assets/navbar icon.png"
import { useState } from 'react'



const LowerHeader = () => {

const [navIcon , setNavIcon ]=useState(false)

function handleNavbar(){
   setNavIcon(!navIcon)
}

const navbar = [
  {name: 'New & Featured' , href : "#", id : '1'},
  {name: 'Men' , href : "#", id : '2'},
  {name: 'Women' , href : "#", id :'3'},
  {name: 'Kids' , href : "#", id : '4'},
  {name: 'Sale' , href : "#", id : '5'},
  {name: 'SNKRS' , href : "#", id : '6'}
] 

  return (
                <div className="flex items-center justify-between px-4 py-3 bg-white shadow">
              {/* Logo Section */}
              <div className="flex ">
              <Image src={logo} alt='logo' className='h-6 w-auto' />
              </div>
              
              
              {navIcon &&(
                <ul className='mobile:block laptop:hidden absolute top-24 left-1 flex flex-col bg-gray-600 w-screen  rounded  '>
              {
                navbar.map((elem)=>{
                  return <li  key={elem.id} className='text-white hover:text-black hover:bg-white rounded border-black'> 
                  <Link
                  href={elem.href} 
                  className="rounded p-1">
                    {elem.name}
                    </Link>
                    </li>
                })
              }
                </ul>
              )}
        
              {/* Navigation Links */}
  

              <div className="mobile:hidden laptop:block flex items-center space-x-6 text-base text-[#111111] leading-6 font-medium">
                {
                navbar.map((elem)=>{
                  return <Link key={elem.id}
                  href={elem.href} 
                  className="hover:text-gray-600">
                    {elem.name}
                    </Link>
                })
              }
              </div>

        
              {/* Right Actions Section */}
              <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 py-2 text-sm bg-gray-100 rounded-full outline-none mobile:hidden sm:block"
                  />
                  <Image src={search} alt='search icon' className="mobile:block absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-[#111111]" />
                </div>

                <button className='mobile:block sm:hidden'>
                <Image src={search} alt='like icon' className=' text-[#111111]'/>
                </button>
        
                {/* Heart Icon */}
                <button>
                 <Image src={heart} alt='like icon' className=' text-[#111111]'/>
                </button>
        
                {/* Cart Icon */}
                <button>
                <Image src={cart} alt='cart icon' className=' text-[#111111]' />
                </button>

                <button onClick={handleNavbar} className='mobile:block laptop:hidden flex '>
                <Image src={navbar_icon} alt='Navbar icon' className='w-8 h-8'></Image>
              </button>
              </div>
            </div>
          
  )
}

export default LowerHeader
