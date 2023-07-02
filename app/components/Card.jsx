
import React from 'react'
import Image from 'next/image'

const Card = ({ image, price, name }) => {
    return (
        <div className='s rounded-md '>
            <div className=" h-[280px] overflow-hidden border rounded-xl py-2 px-4 flex items-center justify-center">
                <Image className='w-[60%]' src={image} width={500} height={500} alt="" priority={true} />
            </div>
            <h1 className=''> {name.slice(0 , 50)}</h1>
            <div className='text-xl'>${price}</div>
        </div>
    )
}

export default Card



