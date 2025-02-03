import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface ICard2Props {
    productName : string;
    category : string;
    price : number;
    colors : string[];
    status : string;
    imageUrl: string;
    slug :  string;
}

const Card2 = (Props:ICard2Props) => {

    const { slug,imageUrl ,productName ,category , price, status ,colors} = Props ;

  return (
    <Link href={`components/product/${slug}`}>
    <div className='flex flex-col '>
        {/* article-pic-secction */}
        <Image width={350.36} height={300.36} src={imageUrl} alt='ArticleImage' className='bg-[#F3F3F3] hover:bg-[#f3f3f3ce] '></Image>

        {/* Article Name & price secction */}
        <div className='flex flex-col pt-3 pb-12 justify-between'>
           {/* Article Name section */}
            <div className='flex flex-col  space-y-1 mobile:leading-3 xlg:leading-6 '>
                <div className='mobile:text-[11px]   laptop:text-[10px] lg_laptop:text-[11px] lg:text-[11px] xlg:text-[14px] font-medium '>
                <span className='text-[#9e3500] mobile:leading-4 xlg:leading-7 block' >{status}</span>
                <span className=' text-[#111111] '>{productName}</span>
                </div>
                <div className='space-y-1 mobile:text-[11px] laptop:text-[10px] lg:text-[10px] font-normal xlg:text-[13px]  text-[#757575] flex flex-col'>
                <span >{category}</span>
                <span >{colors}</span>
                </div>
            </div>
            {/* Article price secction  */}
            <div className='flex justify-start'>
                <span className='font-medium mobile:text-[11px] lg_mobile:text-[13px] medium:text-[11px] xlg:text-[13px] text-[15px] leading-6 justify-end flex'>{price}</span>
            </div>
        </div>

    </div>
    </Link>
  )
}

export default Card2