import React, { useState } from 'react'
import { Iproduct } from '../../../types/products'

const page = () => {

    const [cartItems, setCartItems] = useState<Iproduct[]>([]);
    const [discount, setDiscount] = useState<number>(0);
    const [formValues, setFormValues] = useState({
        firstName : "",
        LastName : "",
        AddressLine1 : "",
        AddressLine2 : "",
        AddressLine3 : "",
        postalCode : "",
        locality : "",
        state : "",
        country : "",
        email : "",
        phoneNo : "",
        Pan : "",
    })
  return (
    <div>page</div>
  )
} 

export default page