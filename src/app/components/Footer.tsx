import Link from 'next/link'
import React from 'react'
import instagram_icon from "@/app/assets/instagram.png"
import facebook_icon from "@/app/assets/facebook.png"
import twitter_icon from "@/app/assets/twitter.png"
import youtube_icon from  "@/app/assets/youtube.png"
import Image from 'next/image'
import location_icon from  "@/app/assets/location.png"

const Footer = () => {
   const container1=[
    {content : "FIND A STORE" , id  : '1'},
    {content : "BECOME A MEMBER" , id  : '2'},
    {content : "SIGN UP FOR EMAIL", id  : '3'},
    {content : "Send Us Feedback", id  : '4'},
    {content : "STUDENT DISCOUNTS", id  : '5'}
   ]
   const container2 = [
    {content : "Order Status", id  : '1'},
    {content : "Delivery", id  : '2'},
    {content : "Returns", id  : '3'},
    {content : "Payment Options", id  : '4'},
    {content : "Contact Us On Nike.com Inquires", id  : '5'},
    {content : "Contact Us On All Other Inquires", id  : '6'},
   ]

   const container3 =[
    {content : "News", id  : '1'},
    {content : "Careers", id  : '2'},
    {content : "Investor", id  : '3'},
    {content : "Sustainability", id  : '4'},
   ]

   const container4 = [
    {link : "twitter_icon", id  : '1'},
    {link : "facebook_icon", id  : '2'},
    {link : "youtube_icon", id  : '3'},
    {link : "instagram_icon", id  : '4'},
   ]
  return (
    <div className='bg-black px-8'>
    {/* upper portion */}
    <div className='pt-8 grid mobile:pt-6 lg_mobile:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr]'>
        <ul className='space-y-4'>
            {
        container1.map((elem)=>{
                return <li key={elem.id} className='h-4  font-normal text-[10px] leading-[32.67px] text-white'>
                    <Link  href="#">{elem.content}</Link>
                </li>
            })
        }
        </ul>

        <div className='mobile:pt-10 lg_mobile:pt-1'>
            <h3 className='font-normal text-[10px]  leading-6 tracking-[0.5px] text-white'>GET HELP</h3>
            <ul className=' space-y-3'>
            {
                container2.map((elem) => {
              
                    return <li key={elem.id} className='h-[14px] font-normal text-[11px] leading-[28px] text-[#7E7E7E]'>
                        <Link  href="#">{elem.content}</Link>
                    </li>
                })
            }
            </ul>
        </div>

        <div className='mobile:pt-10 lg_mobile:pt-8 md:pt-1'>
            <h3 className='font-normal text-[10px] leading-6 tracking-[0.5px]  text-white'>ABOUT NIKE</h3>
            <ul className='space-y-1'>
                {
                    container3.map((elem)=>{

                        return <li key={elem.id} className='font-normal text-xs leading-[28px] text-[#7E7E7E]'>
                            <Link  href="#">{elem.content}</Link>
                        </li>
                    })
                }
            </ul>
        </div>
{/* 
        <ul>
                {
                    container4.map((elem)=>{

                        return <li key={elem.id} className='text-[#7E7E7E]'>
                            <Image  src={elem.link} alt='icons' width={30} height={30} className='h-[30px] w-[30px]'/>
                        </li>
                    })
                }
            </ul> */}

            <div className='flex mobile:pt-4 lg_mobile:pt-5 md:pt-1 sm:justify-start md:justify-end'>
                <ul className='flex space-x-2 py-4 justify-end'>
                    <li>
                        <Image src={twitter_icon} alt='twitter_icon'></Image>
                    </li>
                    <li>
                    <Image src={facebook_icon} alt='facebook_icon'></Image>
                    </li>
                    <li>
                    <Image src={youtube_icon} alt='youtube_icon'></Image>
                    </li>
                    <li>
                    <Image src={instagram_icon} alt='instagram_icon'></Image>
                    </li>
                </ul>
            </div>
    </div>
    {/* lower portion */}
    <div className='flex justify-between pt-8 pb-3 mobile:flex-col mobile:items-center md:flex-row'>
        {/* left */}
      <div className='flex space-x-5  items-center'>
        <div className='flex space-x-2 items-center'>
        <Image src={location_icon} alt='location_icon' className='w-[18px] h-[15px]'/>
        <span className='text-white w-[26px]'>India</span>
        </div>
        <div className='text-[#7E7E7E] font-normal text-[11px] leading-3'>
            <span>&copy; 2023 Nike, Inc. All Rights Reserved</span>
        </div>
      </div>
        {/* Right */}
      <div className=''>
        <ul className='font-normal text-xs leading-7 grid mobile:grid-cols-[1fr_1fr] medium:grid-cols-[1fr_1fr_1fr_1fr] text-[#7E7E7E] space-x-5 '>
            <li className='mobile:justify-center flex mobile:pr-10 medium:pr-0'>
                <Link href="#">Guides</Link>
            </li>
            <li className=''>
                <Link href="#">Terms of Sale</Link>
            </li>
            <li>
                <Link href="#">Terms of Use</Link>
            </li>
            <li>
                <Link href="#">Nike Privacy Policy</Link>
            </li>
        </ul>
      </div>
    </div>
    
    </div>
  )
}

export default Footer