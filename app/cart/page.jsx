'use client'
import { collection, orderBy, query } from "firebase/firestore";
import cartGif from '../../public/gifs/cart.gif'
import emptycart from '../../public/gifs/emptycart.gif'
import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection, useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import CartCard from "../components/CartCard";
import { ImSpinner2 } from "react-icons/im";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
export const metadata = {
    title: 'Cart'
}
const Page = () => {
    const [user, loading] = useAuthState(auth);
    const cartsRef = collection(db, "cart");
    const q = query(cartsRef, orderBy("createdAt"));
    const [cartSnapshots, loading2] = useCollection(q);
    const [cartSnapshotsData] = useCollectionData(q);
    let total = [];
    const cart = cartSnapshotsData;
    cartSnapshots?.docs
        ?.filter((data) => data?.data()?.uid === user?.uid)
        ?.forEach((item) => {
            const price = item.data()?.price;
            total.push(price);
        });
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum += total[i];
    }
    //stripe checkout
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    )
    const createCheckout = async () => {
        const stripe = await stripePromise;
        console.log("hello from stripe")
        const checkout = await axios.post("api/checkout", {
            uid: user?.uid,
            cart: cart,
        });;
        const result = await stripe.redirectToCheckout({
            sessionId: stripe.data.session.id,

        }).then(() => {
            console.log("redirected");
        }
        ).catch(() => {
            console.log('still not redirected')
        }
        )
    };
    
    return (
        <div className='border rounded-md h-[80vh]  bg-white  relative  ' >
            <div className="flex  justify-between p-[10px]">
                <div className="flex font-bold">
                    <h1 className="text-xl  md:text-3xl">Your Shopping Cart</h1>
                    <div className=' w-10 md:w-16 h-16  '>
                        <Image src={cartGif} alt="" />
                    </div>
                </div>

                <div className="">
                    <p className="text-gray-500  text-[16px] md:text-xl  font-light tracking-wider">
                        {
                            cartSnapshots?.docs?.filter(
                                (data) => data?.data()?.uid === user?.uid
                            )?.length
                        }{" "}
                        items for &#8377;{sum}
                    </p>
                </div>
            </div>
            {/* Card card  */}
            <div className="w-full h-[63vh] overflow-y-auto">
                {!loading2 ? (
                    user ? (
                        cartSnapshots?.docs?.filter(
                            (data) => data?.data()?.uid === user?.uid
                        )?.length ? (
                            cartSnapshots?.docs
                                ?.filter((data) => data?.data()?.uid === user?.uid)
                                ?.map((item) => {
                                    return (
                                        <CartCard
                                            key={item?.id}
                                            image={item?.data()?.image}
                                            name={item?.data()?.name}
                                            price={item?.data()?.price}
                                            description={item?.data()?.description}
                                            id={item?.id}
                                        />
                                    );
                                })
                        ) : (
                            <div className="w-full h-[63vh] flex justify-center items-center">
                                <Image
                                    src={"/gifs/emptycart.gif"}
                                    alt=""
                                    width={300}
                                    height={300}
                                    priority={true}
                                />
                            </div>
                        )
                    ) : (
                        <div className="w-full h-[63vh] flex justify-center items-center">
                            <Image
                                src={"/gifs/emptycart.gif"}
                                alt=""
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </div>
                    )
                ) : (
                    <div className="w-full h-[63vh] flex justify-center items-center">
                        <ImSpinner2 className="text-6xl text-[#ff9900] animate-spin inline" />
                    </div>
                )}
            </div>

            <div>
                {user &&
                    cartSnapshots?.docs?.filter((data) => data?.data()?.uid === user?.uid)
                        ?.length ? (
                    <button
                        className="w-full bg-gradient-to-b from-[#ffd900] to-[#ffb300] rounded-xl p-2 text-[16px] md:text-xl font-semibold hover:from-[#ffb300] hover:to-[#ffd900]"
                        onClick={createCheckout}
                    >
                        Proceed To Pay
                    </button>
                ) : (
                    <button
                        className="w-full  bg-[#ff9900] rounded-xl p-2 text-[16px] md:text-xl font-semibold text-white"
                        onClick={() => { alert("Please Add Some Items To Your Cart!") }}
                    >
                        Proceed To Pay
                    </button>
                )}
            </div>
        </div>
    )
}

export default Page




