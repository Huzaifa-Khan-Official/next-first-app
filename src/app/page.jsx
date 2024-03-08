import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href={"/products"}>
      <h2>All Products</h2>
      </Link>
    </div>
  )
}