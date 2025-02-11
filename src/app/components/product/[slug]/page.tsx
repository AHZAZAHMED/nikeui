import { client } from "@/sanity/lib/client";
import { Iproduct } from "../../../../../types/products";
import { groq } from "next-sanity";
import ProductDetailsClient from "../../ProductDetailClient";



async function getProduct(slug: string): Promise<Iproduct> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        _type,
        image,
        price,
        description,
    }`,
    { slug }
  );
}

export default async function ProductPage({ params }: any) {
  const { slug } = params; 
  const product = await getProduct(slug);

  return <ProductDetailsClient product={product} />;
}