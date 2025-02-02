"use client"

import { useEffect, useState } from "react";
import { Iproduct } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import Card from "../Card";
import { urlFor } from "@/sanity/lib/image";
import { womensProducts } from "@/sanity/lib/queries";

const WomensProducts = () => {

    const [product, setProduct] = useState<Iproduct[]>([])

     useEffect(() =>{
        async function fetchproducts(){
            const fetchedProduct : Iproduct[] = await client.fetch(womensProducts)
            setProduct(fetchedProduct)
        }
        fetchproducts()
     },[])
    return(
        <div className="grid mobile:grid-cols-1  medium:grid-cols-2 gap-4 pt-1">
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

export default WomensProducts;