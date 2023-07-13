/* eslint-disable react/jsx-key */
"use client"
import Card from '../../components/Card';
import Link from 'next/link';

const getProducts = async () => {
  const products = await fetch('https://www.screentechnicals.com/api/ecommerce/products', { next: { revalidate: 10 } });
  return products.json()
}
const Page = async ({ params }) => {
  const { search } = params;
  const products = await getProducts();
  return (
    <div className='lg:ms-10 flex justify-center  flex-wrap gap-4 '>
      {
        products.map((item, index) => {

          if (item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.category.toLowerCase().includes(search.toLowerCase())) {
            return (
              <Link key={index} href={`/products/${item.id}`} className='w-[200px] '>
                <Card name={item.name} image={item.image} price={item.price} className='w-[220px]' />
              </Link>
            )
          }
        })
      }
    </div>
  )
}

export default Page



