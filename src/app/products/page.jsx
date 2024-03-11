import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "All Products",
  description: "All proucts page"
};
 

export default function page() {
  return (
    <div>
        <h1>Product Page</h1>

        <h3>All Products:</h3>
        <ul>
            <li><Link href={"/products/1"}>Product 1</Link></li>
            <li><Link href={"/products/2"}>Product 2</Link></li>
            <li><Link href={"/products/3"}>Product 3</Link></li>
            <li><Link href={"/products/4"}>Product 4</Link></li>
        </ul>
    </div>
  )
}