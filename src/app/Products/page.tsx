import React from 'react'
import AllProducts from '../components/AllProducts/page'

const Products = () => {
   

    const categories = [
        {
            name: "Best Selling Products",
            id : "1"
        },
        {
            name: "Best Shoes",
            id : "2"
        },
        {
            name: "New Basketball Shoes",
            id : "3"
        },
        {
            name: "New Football Shoes",
            id : "4"
        },
        {
            name: "New Men's Shoes",
            id : "5"
        },
        {
            name: "New Running Shoes",
            id : "6"
        },
        {
            name: "Best Men's Shoes",
            id : "7"
        },
        {
            name: "New Jordan Shoes",
            id : "8"
        },
        {
            name: "Best Women's Shoes",
            id : "9"
        },
        {
            name: "Best Traning & Gym",
            id : "10"
        }
    ]

   return (
    <div className='flex px-4 mb-4 mt-16'>
        {/* left-side */}
        <div className='mobile:w-2/5 lg:w-1/3 xl:w-1/4 mobile:hidden md:block md:pl-8 lg_laptop:pl-12 space-y-8 mr-5 '>
        <span className=' font-medium text-2xl leading-[31.2px]'>New (500)</span>
        <div className='md:text-sm lg_laptop:text-[15px]'>
            <ul className='space-y-3 font-medium leading-[21.6px] text-[#111111]'>
                <li>Shoes</li>
                <li>Sports Bras</li>
                <li>Tops & T-Shirts</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>Trouser & Tights</li>
                <li>Shorts</li>
                <li>Tracksuits</li>
                <li>Jumpsuits & Rompers</li>
                <li>Skirts & Dresses</li>
                <li>Socks</li>
                <li>Accessories<br/> & Equipment</li>
            </ul>


        {/* Gender Filter */}
        <div>
            <hr className='p-2' />
        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-2">Gender</h3>
          <div>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Men
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Women
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Unisex
            </label>
          </div>
        </div>

        <hr className='p-2' />
        {/* Kids Filter */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-2">Kids</h3>
          <div>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Boys
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Girls
            </label>
          </div>
        </div>

        <hr className='p-2' />
        {/* Price Slider */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-2">Shop By Price</h3>
          <label className="block">
              <input type="checkbox" className="mr-2" /> Under ₹ 2 500.00
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> ₹ 2 500.00 - ₹
            </label>
        </div>
        </div>
        </div>
        </div>
        {/* Right-side */}
        <div className=''>
        <div className="flex items-center justify-end  text-[#111111] font-normal leading-7 py-2 space-x-4">
         <button className='flex'>
        <span className="text-base mr-2">Hide Filters</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
        </svg>
        </button>
        <div>
          <select className="rounded text-[15px] w-20 focus:outline-none">
            <option value="sort by">Sort By</option>
            <option value="new">New</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
        </div>
        {/* AllProducts */}
          <AllProducts/>
            <hr className='border-[1px]' />
            <div className='space-y-4 h-auto text-[#111111]'>
                <h3 className='font-medium leading-6  text-[19px] mt-16'>Related Categories</h3>
                <div className='flex flex-wrap gap-4 pb-16'>
                    {
                        categories.map((elem)=>{
                            return <button className=' bg-white hover:bg-gray-100 border rounded-full font-normal leading-[18px] text-xs p-2' key={elem.id}>{elem.name}</button>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products

