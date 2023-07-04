/* eslint-disable react/jsx-key */
"use client"
import React, { useEffect } from 'react';
import Card from '../components/Card';

const getProducts = async () => {
    const products = await fetch('https://www.screentechnicals.com/api/ecommerce/products', { next: { revalidate: 10 } });
    return products.json()
}
const Page = async () => {

    const products = await getProducts();
    return (
        <div className='lg:ms-10 flex justify-center md:justify-between flex-wrap gap-4 '>
            {
                products.map((product, index) => {
                    return ( 
                        <div key={index} className='w-[200px]'>
                            <Card name={product.name} image={product.image} price={product.price} className='w-[220px]' />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Page

