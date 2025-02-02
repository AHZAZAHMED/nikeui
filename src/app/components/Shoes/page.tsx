"use client"

import { useEffect, useState } from "react";
import { Iproduct } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProduct, fourProduct } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Card from "../Card";

const Shoes = () => {

    const [product, setProduct] = useState<Iproduct[]>([])

     useEffect(() =>{
        async function fetchproducts(){
            const fetchedProduct : Iproduct[] = await client.fetch(fourProduct)
            setProduct(fetchedProduct)
        }
        fetchproducts()
     },[])
    return(
        <div className="mobile:px-4  grid place-items-center medium:grid-cols-2 md:grid-cols-3 gap-4">
            {product.map(product => (
                <Card key={product._id} 
                productName={product.productName}
                imageUrl={product.image ? urlFor(product.image).url() : ''}
                category = {product.category}
                price = {product.price}
                />

                   
                
            )
            )}

        </div>  
    );
};

export default Shoes;