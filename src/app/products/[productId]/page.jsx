import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import "../../style.css"

const getData = (id) => {
  return new Promise(async (res, rej) => {
    const result = await fetch(`https://dummyjson.com/products/${id}`)

    if (result.ok) {
      const data = await result.json();

      res(data)
    }
  })
}


export const generateMetadata = async ({ params }) => {
  const data = await getData(params.productId);

  console.log(data);
  if (!data) {
    return notFound();
  }
  return {
    title: `${data.title}`,
    description: `${data.description}`
  }
}

export default async function page({ params }) {
  const data = await getData(params.productId);

  if (!data) {
    return notFound();
  }

  return (
    <div className='px-4 pt-5'>

      <p><Link href={"/products"}>All products</Link></p>

      <div className="cardDiv">
        <div class="card mb-3" style={{ "maxWidth": "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={data.thumbnail} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text">{data.description}</p>
                <p class="card-text"><small class="text-body-secondary">Brand: {data.brand}</small></p>
                <p class="card-text"><small class="text-body-secondary">Category: {data.category}</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}