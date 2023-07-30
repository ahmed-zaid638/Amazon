/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import Card from '../components/Card';
import { getProducts } from '../api/products.js';

const Page = async () => {
    const products = await getProducts();
    return (
        <div className='lg:ms-10 flex justify-center md:justify-between flex-wrap gap-4 '>
            {
                products.map((product, index) => {
                    return (
                        <Link key={index} href={`/products/${product.id}`} className='w-[200px]'>
                            <Card name={product.name} image={product.image} price={product.price} className='w-[220px]' />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Page

