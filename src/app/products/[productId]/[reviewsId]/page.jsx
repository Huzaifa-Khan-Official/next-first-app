import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default function reviewsPage({ params }) {
    if (!(params.reviewsId == 1 || params.reviewsId == 2 || params.reviewsId == 3 || params.reviewsId == 4)) {
        notFound();
    }
    return (
        <div>
            <h1>Review of product: {params.productId}</h1>
            <h2>
                <Link href={`/products/${params.productId}`}>
                    Back to Product Detail page
                </Link>
            </h2>
            <h3>Review Id: {params.reviewsId}</h3>
        </div>
    )
}
