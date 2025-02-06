import {  groq } from "next-sanity";

export const allProduct = groq`*[_type == "product"]`;
export const fourProduct = groq`*[_type == "product"][0..3]`;
export const mensProducts = groq`*[_type == "product"][4...6]`;
export const womensProducts = groq`*[_type == "product"][1..2]`;