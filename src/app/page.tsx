import Image from "next/image";
import UpperHeader  from "./components/UpperHeader";
import LowerHeader from "./components/LowerHeader";
import Hero from "./components/Hero";
import article1 from "@/app/assets/article1.png"
import article2 from "@/app/assets/article2.png"
import Card from "./components/Card";
import rightArrow from "@/app/assets/right-arrow.png"
import leftArrow from "@/app/assets/left-arrow-key.png"
import Hero2 from "./components/Hero2";
import homeImage from "@/app/assets/homeImage.jpeg"
import homeImage2 from "@/app/assets/homeimage2.png"
import homeImage3 from "@/app/assets/homeImage3.png"
import Link from "next/link";
import Shoes from "./components/Shoes/page";
import MensProducts from "./components/MensProducts/page";
import WomensProducts from "./components/WomensProducts/page";

export default function Home() {
  

const listContent = [
  {
    Heading : "Icons",
    item1 : "Air Force 1",
    item2 : "Huarache",
    item3 : "Air Max 90",
    item4 : "Air Max 95",
    id : "1"
  },
  {
    Heading : "Shoes",
    item1 : "All Shoes",
    item2 : "Custom Shoes",
    item3 : "Jordan Shoes",
    item4 : "Running Shoes",
    id : "2"
  },
  {
    Heading : "Clothing",
    item1 : "All Clothing",
    item2 : "Modest Wear",
    item3 : "Hooddies & Pullovers",
    item4 : "shirts & Tops",
    id : "3"
  },
  {
    Heading : "Kids",
    item1 : "Infant & Toddler Shoes",
    item2 : "Kids' Shoes",
    item3 : "Kids' Jordan Shoes",
    item4 : "Kids' Basketball Shoes",
    id : "4"
  }
]
  return (
    <div>
    <div className="flex flex-col items-center py-2 bg-[#F5F5F5]">
      <span className="font-medium text-[15px] leading-4">Hello Nike App</span>
      <div className="text-[11px] leading-6">
      <span className="font-normal ">Download the app to access everything Nike.</span>
      <span className="font-medium decoration-solid underline">Get Your Great</span>
      </div>
    </div>

    {/* Hero_section */}
    <Hero />

    {/* main-section */}
    <div className="px-8">
           {/* top-section */}
      <div className="flex justify-between mobile:flex-col lg_mobile:flex-row ">
        <span>Best of Air Max</span>
        <div className="space-x-2 pb-1">
        <span>Shop</span>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={leftArrow} alt="navigation key"></Image>
        </button>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={rightArrow} alt="navigation key"></Image>
        </button>
        </div>
      </div>
          {/* Card-section */}
           <Shoes/>
    </div>

    {/* Hero2 */}

    <Hero2  Image={homeImage} Heading1="Featured" Heading2="STEP INTO WHAT FEELS GOOD" Paragraph="Cause everyone should know the feeling of running in that perfect pair." ButtonText="Find Your Shoe" />

    {/* second card section */}

    <div className="px-4 mobile:flex mobile:flex-col mobile:items-center medium:items-start">
      <h2 className="mobile:pt-4 px-4 font-medium text-[21px] leading-7 text-[#111111]">Gear Up</h2>
      <div className="flex px-8 mobile:flex-col laptop:flex-row">
      {/* left cards */}
      <div className="px-4 flex mobile:flex-col  mobile:items-center medium:items-end ">
      <div className="space-x-2 justify-end  flex mobile:items-center  mb-2 pt-4">
        <span className="">Shop Men's</span>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full mobile:p-3 p-4 ">
          <Image width={15} src={leftArrow} alt="navigation key"></Image>
        </button>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full mobile:p-3 p-4">
          <Image width={15} src={rightArrow} alt="navigation key"></Image>
        </button>
        </div>

       {/* MensProducts */}
       <MensProducts/>
      
      </div>
      {/* Right Cards */}
      <div className="px-4 flex mobile:flex-col  mobile:items-center medium:items-end">
      <div className="space-x-2 justify-end  flex mobile:items-center pt-3">
        <span>Shop Women's</span>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={leftArrow} alt="navigation key"></Image>
        </button>
        <button className="text-black bg-[#f5f5f5] hover:bg-[#dfdfdf] rounded-full p-4">
          <Image width={15} src={rightArrow} alt="navigation key"></Image>
        </button>
        </div>

        {/* WomensProducts */}
        <WomensProducts/>
      
      </div>
      </div>
      </div>

      <Hero2  Image={homeImage2} Heading1="Don't Miss" Heading2="FLIGHT ESSENTIALS" Paragraph="Your built-to-last, all-week wears—but with style only Jordan Brand can deliver." ButtonText="Shop" />

      <Hero2  Image={homeImage3} Heading1="The Essentials"/>
      <div className="flex justify-center items-center ">
      <nav className="grid  mobile:grid-cols-2 medium:grid-cols-4 mobile:text-[10px] lg_mobile:text-[12px] medium:text-[10px] md:text-[13px] xl:text-[15px] font-medium leading-6  pb-3 mobile:gap-x-12 lg_mobile:gap-x-24 medium:gap-x-6" aria-label="Catogery Navigation">
      {
        listContent.map((elem1)=>{
          return <section key={elem1.id} className="w-full">
            <h3 className="text-[#111111] mb-2">{elem1.Heading}</h3>
            <ul className="text-[#757575] space-y-3" role="list">
              <li role="listitem"><Link href="#" >{elem1.item1}</Link></li>
              <li role="listitem"><Link href="#" >{elem1.item2}</Link></li>
              <li role="listitem"><Link href="#" >{elem1.item3}</Link></li>
              <li role="listitem"><Link href="#" >{elem1.item4}</Link></li>
            </ul>
          </section>
        })
      }
      </nav>
      </div>


    </div>
  
  );
}
