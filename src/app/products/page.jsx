import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "All Products",
  description: "All proucts page"
};

const getData = async () => {
  const res = await fetch('https://dummyjson.com/products')

  console.log(res.json());
  if (!res.ok) {
    return null
  } else {
    return res
  }
}

export default async function page() {
  const data = await getData()
  return (
    <div>
      <h1>Product Page</h1>

      <h3>All Products:</h3>

    </div>
  )
}