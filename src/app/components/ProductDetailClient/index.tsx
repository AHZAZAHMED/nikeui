"use client";

import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import cart from "@/app/assets/cart1.png";
import { addToCart } from "@/app/actions/actions";
import { Iproduct } from "../../../../types/products";
import Swal from "sweetalert2";

interface ProductDetailsClientProps {
  product: Iproduct;
}
export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const handleAddToCart = (e: React.MouseEvent, product : Iproduct) => {
    e.preventDefault()
    Swal.fire({
      position : "top-right",
      icon : "success",
      title: `${product.productName} added to cart`,
      showConfirmButton : false,
      timer : 1000 
    })
    addToCart(product);
    
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-12 p-6 pt-20">
      <div className="flex-shrink-0">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.productName}
            width={1200}
            height={600}
            className="w-72 mobile:w-80 lg_mobile:w-96 laptop:w-[450px] xlg:w-[500px] rounded-xl shadow-lg"
          />
        )}
      </div>
      <div className="flex flex-col text-center lg:text-left mt-6 lg:mt-0">
        <h1 className="text-3xl mobile:text-2xl lg:text-4xl font-bold flex-wrap">
          {product.productName}
        </h1>
        <p className="text-xs lg:text-base text-gray-600 mt-4 flex justify-start leading-relaxed text-left">
          {product.description}
        </p>
        <div className="medium:flex lg:flex-col">
          <p className="mobile:text-xl medium:text-lg sm:w-1/2 lg:text-2xl font-bold mt-4 flex items-center mobile:justify-center lg:justify-start">
            {product.price}
          </p>
          <div onClick={(e) => handleAddToCart(e, product)} className="hover:scale-110 transition-transform duration-300 ease-in-out hover:bg-gray-800 flex mobile:w-full medium:w-9/12 sm:w-1/2 medium:ml-10 lg:ml-0 lg:w-48 mobile:items-center mobile:justify-center lg:items-start bg-black rounded px-4 py-2 space-x-2 mt-5 mx-0 w-48">
            <Image
              width={22.36}
              height={10.8}
              src={cart}
              alt="cart image"
              className="flex-shrink-0"
            />
            <button
              
              className="text-white font-medium rounded px-4 py-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
