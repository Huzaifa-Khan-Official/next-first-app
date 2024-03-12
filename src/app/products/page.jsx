import Link from 'next/link'
import { notFound } from 'next/navigation';
import React from 'react';
import "../style.css"

export const metadata = {
  title: "All Products",
  description: "All proucts page"
};

const getData = async () => {
  return new Promise(async (res, rej) => {
    const result = await fetch('https://dummyjson.com/products')

    if (result.ok) {
      const data = await result.json();
      res(data.products)
    }
  })

}

export default async function page() {
  const data = await getData();

  if (!data) {
    return notFound();
  }

  return (
    <div className='px-4'>
      <h1>Product Page</h1>

      <h3>All Products:</h3>
      <div className="cardMainDiv d-flex gap-4 flex-wrap justify-content-center pt-4">
        {
          data.map(v => {
            return (
              <div className="card" style={{ "width": "18rem" }} key={v.id}>
                <img src={v.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-between gap-3">
                  <div className="detailDiv">
                    <h5 className="card-title">{v.title}</h5>
                    <p className="card-text">{v.description}</p>
                  </div>
                  <div className="btnDiv">
                    <Link className="btn btn-primary" href={`/products/${v.id}`}>
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}