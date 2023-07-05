"use client"
import Image from "next/image";
import React from "react";
import { auth , db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const Buttons = async ({ data }) => {
    const [user, loading] = useAuthState(auth)
    // addtoCart
    const addtoCart = () => {
        if (user) {
            const docRef = addDoc(collection(db, "cart"), {
                id: data[0].id,
                name: data[0].name,
                description: data[0].description,
                price: data[0].price,
                image: data[0].image,
                uid: user?.uid,
                createdAt: serverTimestamp(),
            })
        }
        else {
            console.log(data[0])
            alert("please login first");
        }
    }
    return (
        <div className="flex mt-3 ">
            <button className="bg-[#ff9900] py-2  px-4 rounded-md text-white me-3 font-[500]" >Buy Now</button>
            <button className="bg-[#ff9900] py-2  px-4 rounded-md text-white font-[500]"
                onClick={addtoCart}

            >Add to Cart</button>
        </div>
    )
};


export default Buttons;






