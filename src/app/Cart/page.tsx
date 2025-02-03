"use client"
import React, { useEffect, useState } from "react";
import heart from "@/app/assets/heart.png";
import trash from "@/app/assets/trash.png"
import Image from "next/image";
import { Iproduct } from "../../../types/products";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";


const CartPage = () => {

  const [cartItems, setCartItems] = useState<Iproduct[]>([])
  
  useEffect(()=>{
      setCartItems(getCartItems())
  } , [])

  const handleRemove = (id : string) =>{
      Swal.fire({
          title : "Are you sure?",
          text: "you will not be ableto recover thie item!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "yes , remove it!"
      }).then((result) =>{
          if(result.isConfirmed){
              removeFromCart(id)
              setCartItems(getCartItems())
              Swal.fire("Removed" , "Item has been removed", "success");
          }
      })
  
  }
  
  const  handleQuantityChange = (id : string , quantity : number) => {
      updateCartQuantity(id,quantity);
      setCartItems(getCartItems);
  }
  
  const handleIncrement = (id: string) =>{
      const product = cartItems.find((item) => item._id === id);
      if(product && product.inventory > 0 ){
          handleQuantityChange(id, product.inventory + 1)
      }
  }
  
  const handleDecrement = (id: string) =>{
      const product = cartItems.find((item) => item._id === id);
      if(product && product.inventory > 1){
          handleQuantityChange(id, product.inventory - 1)
      }
  }
  
  const calculatedTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.inventory,0)
  }
  const totalAmount = calculatedTotal();

//  const calculatedTotalwithDelivery = () =>{
//    const deliveryCharges : number = 250;
//   return cartItems.reduce((total, item) => deliveryCharges + total + item.price * item.inventory,0)
//  }



  
  const handleProceed = () =>{
      Swal.fire({
          title: "Proceed to checkout?",
          text: "Please review  your cart before checkout",
          icon: "question",
          showCancelButton : true,
          confirmButtonColor : "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, proceed!"
      }).then((result)=>{
          if(result.isConfirmed){
              Swal.fire("Success" , "Your Order has been successfully processed", "success")
              setCartItems([])
          }
      })
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-2xl font-bold mb-6">Bag</h1>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center bg-white p-4 mb-4 rounded-md shadow-md"
            >
              <div className="w-24 h-24">
                <Image
                  width={250}
                  height={250}
                  src={item.image ? urlFor(item.image).url() : ''}
                  alt={item.productName}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex-1 flex justify-between ml-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.productName}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>

                  <div className="flex items-center mt-2 space-x-2">
                    <button>
                          <Image src={heart} alt="like-button" width={20} height={20} />
                    </button>
                    <button onClick={() => handleRemove(item._id)}>
                    <Image src={trash} alt="like-button" width={17} height={17} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-semibold mb-2">MRP: ₹ {item.price.toLocaleString()}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 bg-gray-100 text-center">
                      {item.inventory}
                    </span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹ {totalAmount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹ {totalAmount.toLocaleString()}</span>
          </div>
          <button onClick={handleProceed} className="mt-4 w-full py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
