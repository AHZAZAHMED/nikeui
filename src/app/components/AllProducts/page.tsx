"use client"

import { useEffect, useState } from "react"
import { Iproduct } from "../../../../types/products"
import { client } from "@/sanity/lib/client"
import { allProduct } from "@/sanity/lib/queries"
import Card2 from "../Card2"
import { urlFor } from "@/sanity/lib/image"

const AllProducts = () => {

    const [product, setProduct] = useState<Iproduct[]>([])

     useEffect(() =>{
        async function fetchproducts(){
            const fetchedProduct : Iproduct[] = await client.fetch(allProduct)
            setProduct(fetchedProduct)
        }
        fetchproducts()
     },[])
     return(
        <div className='grid justify-center mobile:grid-cols-2 md:grid-cols-3 grid-cols-3 space-x-4 pb-[100px]'>
          {
            product.map(product=>(
               <Card2 key={product._id} 
                               productName={product.productName}
                               imageUrl={product.image ? urlFor(product.image).url() : ''}
                               category = {product.category}
                               price = {product.price}
                               colors={product.colors}
                               status={product.status}
                               /> 
            ))
          }
        </div>
    );
};

export default AllProducts;