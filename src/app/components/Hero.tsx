import Image from 'next/image'
import React from 'react'
import shoe_image from "@/app/assets/shoe_image.png"

const Hero = () => {
  return (
    <div>
        {/* Image-section */}
        <Image src={shoe_image} alt='shoe_image'/>
        {/* Lower-Section */}
        <div className='text-[#0a0707] flex flex-col items-center mobile:space-y-0 lg_mobile:space-y-1 medium:space-y-2 space-y-3 py-4'>
            <span className='font-medium mobile:text-[10px] lg_mobile:text-[12px] medium:text-[15px] leading-6  '>First Look</span>
            <h3 className='font-medium mobile:text-[33px] lg_mobile:text-[42px] medium:text-[56px] leading-[60px] '>NIKE AIR MAX PULSE</h3>
            <p className='font-normal mobile:text-[8px] lg_mobile:text-[12px] medium:text-[15px] leading-6 text-center'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse<br/>
                 —designed to push you past your limits and help you go to the max.</p>
            <div className='text-white mobile:text-[10px] lg_mobile:text-[12px] medium:text-[15px] leading-6 space-x-2'>
                <button className='bg-[#111111] rounded-full px-4 py-1 hover:bg-white hover:text-[#111111]'>
                    <p className=''>Notify Me</p>
                </button>
                <button className='bg-[#111111] rounded-full px-4 py-1  hover:bg-white hover:text-[#111111]'>
                    <p>Shop Air Max</p>
                </button>
            </div>
        </div>
    </div>

  )
}

export default Hero