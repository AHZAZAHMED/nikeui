import React from 'react'
import Image, { StaticImageData } from 'next/image';


interface IHeroProps{
  Image :StaticImageData,
  Heading1 : string,
  Heading2 ?: string,
  Paragraph ?: string,
  ButtonText ?: string
}

const Hero2 = (Props:IHeroProps) => {
  const {Image:imagesrc,Heading1,Heading2,Paragraph,ButtonText} = Props;
  return (
    <div className='px-8'>
        <h3 className='font-medium text-[21px] leading-7 text-[#111111] py-4'>{Heading1}</h3>
        {/* Image-section */}
        <Image src={imagesrc} alt="Image"></Image>
        {/* Lower-Section */}
        <div className='text-[#0a0707] flex flex-col items-center  lg_mobile:space-y-1 medium:space-y-2 sm:space-y-3 py-4 '>
            <h3 className='font-medium mobile:text-[18px] lg_mobile:text-[23px] medium:text-[30px]  sm:text-[37px] laptop:text-[45px] lg:text-[54px] xl:text-[54px]  '>{Heading2}</h3>
            <p className='font-normal mobile:text-[8px] lg_mobile:text-[11px] medium:text-[13px] laptop-[15px] leading-6 text-center'>{Paragraph}</p>
            <div className='text-white mobile:text-[10px] lg_mobile:text-[12px] medium:text-[15px] leading-6 space-x-2 pt-2'>
                <button className='bg-[#111111] rounded-full px-4 py-1 hover:bg-white hover:text-[#111111]'>
                    <p className=''>{ButtonText}</p>
                </button>
            </div>
        </div>
    </div>

  )
}

export default Hero2