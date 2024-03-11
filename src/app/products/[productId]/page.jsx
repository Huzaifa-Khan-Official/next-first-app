import Link from 'next/link';
import React from 'react'

export const generateMetadata = async ({params}) => {
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