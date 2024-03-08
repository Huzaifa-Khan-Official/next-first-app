import Link from 'next/link';
import React from 'react'

export default function page({params}) {
  return (
    <div>
        <h1>Pruduct Id: {params.productId}</h1>
        
        <p><Link href={"/products"}>All products</Link></p>

        <h3>Reviews</h3>
        <ul>
            <li><Link href={`/products/${params.productId}/1`}>review 1</Link></li>
            <li><Link href={`/products/${params.productId}/2`}>review 2</Link></li>
            <li><Link href={`/products/${params.productId}/3`}>review 3</Link></li>
            <li><Link href={`/products/${params.productId}/4`}>review 4</Link></li>
        </ul>
    </div>
  )
}