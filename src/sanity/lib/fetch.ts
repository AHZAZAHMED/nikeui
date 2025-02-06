import { createClient, QueryParams } from "next-sanity";

const client = createClient({
    projectId : "y12zq53j",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-10-10"
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export async function sanityFetch({query , params = {}}: {query:string , params?: QueryParams}){
    return await client.fetch(query, params)
}