import React from 'react'
import cart from '../../public/gifs/cart.gif'
import Image from 'next/image'
import CartCard from '../components/CartCard'


const Page = () => {


    return (
        <div className='border rounded-md h-[80vh]    bg-white p-5 relative  ' >
            <div className="flex  justify-between">
                <div className="flex font-bold">
                    <h1 className="text-3xl">Your Shopping Cart</h1>
                    <div className='w-16 h-16  '>
                        {/* <Image src={cart} alt="" /> */}
                    </div>
                </div>

                <div className="">
                    4 items for 446$
                </div>
            </div>

            <div className="">
                <CartCard  />
            </div>

            <div className='absolute bottom-0 left-0  w-full py-2 px-2 bg-[#ff9900] rounded-md text-center cursor-pointer '>
                <button className='font-bold'>Proceed To Pay</button>
            </div>
        </div>
    )
}


export default Page



