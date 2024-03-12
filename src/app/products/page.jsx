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

    console.log(result.ok);
    if (result.ok) {
      const data = await result.json();
      res(data.products)
    }
    // if (!result.ok) {
    //   rej(null)
    // } else {
    //   // res(result.json().products)
    // }
  })

}

export default async function page() {
  const data = await getData();

  if (!data) {
    return notFound();
  }

  return (
    <div>
      <h1>Product Page</h1>

      <h3>All Products:</h3>
      <div className="cardMainDiv d-flex gap-4 flex-wrap px-2 justify-content-center">
        {
          data.map(v => {
            console.log()
            return (
              <div className="card" style={{ "width": "18rem" }}>
                <img src={v.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{v.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}