import React, { useEffect, useState } from 'react'
import { Iproduct } from '../../../types/products'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import { dirname } from 'path'
import Swal from 'sweetalert2'

const examplecart = () => {

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
    if(product && product.inventory > 1 ){
        handleQuantityChange(id, product.inventory + 1)
    }
}

const handleDecrement = (id: string) =>{
    const product = cartItems.find((item) => item._id === id);
    if(product){
        handleQuantityChange(id, product.inventory - 1)
    }
}

const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.inventory,0)
}

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
    <div>
      {cartItems.map((item)=>(
        <div key={item._id}>
            {item.productName}
        </div>
      ))}
    </div>
  )
}

export default examplecart