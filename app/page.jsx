import React from "react";
import Carousel from "./components/Carousel";
import delivery from "../public/gifs/delivery.gif"
import Image from "next/image";
import Link from "next/link";
import { GiSofa, GiWrappedSweet } from "react-icons/gi";
import { BsLaptopFill, BsSmartwatch } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import {
  FaTshirt,
  FaBicycle,
  FaHeadphonesAlt
} from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { getProducts } from "./api/products";

const Page = async () => {
  const products = await getProducts();

  let components = [
    {
      icon: <BsLaptopFill size={35} />,
      category: "laptop",
    },
    {
      icon: <GiSofa size={35} />,
      category: "sofa",
    },
    {
      icon: <AiOutlineMobile size={35} />,
      category: "phone",
    },
    {
      icon: <FaTshirt size={35} />,
      category: "tshirt",
    },
    {
      icon: <FaBicycle size={35} />,
      category: "cycle",
    },
    {
      icon: <FaHeadphonesAlt size={35} />,
      category: "headphone",
    },
    {
      icon: <BsSmartwatch size={35} />,
      category: "watch",
    },
    {
      icon: <GiWrappedSweet size={35} />,
      category: "sweet",
    },
    {
      icon: <IoGameController size={35} />,
      category: "game",
    },

  ];
  return <div className="m-4 ">
    <div className=" w-full h-72 p-6 flex items-center justify-between rounded-lg magic-gradient shadow-sm -mt-[15px]" >
      <div className="  w=[90%] md-[70%] ">
        <h1 className="text-xl   lg:text-3xl  text-white font-bold  ">FREE DELIVERY </h1>
        <p className="text-white py-4 text-[16px] lg:text-xl  ">Do not miss it out! Only today, get free Next Day Delivery on all your orders.</p>
        <Link href={"/products"}>  <button className="bg-red-500  p-3 md:px-4  md:py-3 text-white rounded-md font-[600]"> Browse Products</button>
        </Link>
      </div>
      <div className="h-52 w-[18rem] hidden md:block ">
        <Image src={delivery} alt="a" ></Image>
      </div>
    </div>
    <div className="">
      <h1 className="text-center text-xl md:text-3xl font-bold pt-7 pb-5">
        Popular Categories
      </h1>
    </div>
    <div className="flex items-center justify-center flex-wrap gap-3">
      {
        components.map((item) => {
          return <>
            <Link href={`/category/${item.category}`}>
              <button className="w-24 h-24 rounded-lg shadow-md flex items-center justify-center border hover:scale-90 transition duration-3900  ">
                {item.icon}
              </button>
            </Link>
          </>
        }
        )
      }
    </div>

    <div className="w-ful  h-[80vh] p-4  ">
      <h1 className="text-xl md:text-3xl font-bold my-5  text-center  ">Hot Deals </h1>
      <Carousel products={products} />
    </div>

  </div>
};

export default Page;
