"use client"

import { useEffect, useState } from "react";
import { Iproduct } from "../../../../types/products";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { mensProducts } from "@/sanity/lib/queries";
import Card from "../Card";

const MensProducts = () => {

    const [product, setProduct] = useState<Iproduct[]>([])

     useEffect(() =>{
        async function fetchproducts(){
            const fetchedProduct : Iproduct[] = await client.fetch(mensProducts)
            setProduct(fetchedProduct)
        }
        fetchproducts()
     },[])
    return(
        <div className="grid mobile:grid-cols-1  medium:grid-cols-2 gap-4">
            {product.map(product => (
                <Card key={product._id} 
                productName={product.productName}
                imageUrl={product.image ? urlFor(product.image).url() : ''}
                category = {product.category}
                price = {product.price}
                slug={product.slug.current}
                />
            )
            )}

        </div>  
    );
};

export default MensProducts;