import Link from 'next/link';
import React from 'react'

const getData = () => {
  
}


export const generateMetadata = async ({params}) => {
  const data = await getData(params.productId);
  return {
    title: `Product | ${params.productId}`
  }
}

export default function page({params}) {
  return (
    <div>
        <h1>Pruduct Id: {params.productId}</h1>
        
        <p><Link href={"/products"}>All products</Link></p>
        
    </div>
  )
}