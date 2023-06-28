import React from "react";
import { BiCategoryAlt, BiLogoGoogle } from "react-icons/bi";
import { RiBillFill } from "react-icons/ri"
import Link from "next/link";


const Sidebar = () => {
  let categories = ['Electronics', 'Home and Garden', 'Fashion', 'Beauty Products', 'Automotive', 'Books', 'Games', 'Watch']

  return (
    <div className=" w-[300px] h-[83vh] p-5 m-6 border shadow-sm  rounded-xl relative">
      <div className="flex  items-center  ">
        <div className="h-10  w-1 bg-[#ff9900] left-0 absolute "></div>
        <BiCategoryAlt size={26} />
        <h1 className="text-2xl ms-4 uppercase ">Cateogores</h1>
      </div>
      <div className="px-11 py-4 flex flex-col ">
        {categories.map((category, index) => (
          <Link key={index} href={"#"} className="text-lg py-2 fw-bold  hover:text-[#ff9900] font-[500] ">{category}</Link>
        ))}
      </div>

      <div className="">
        <Link href={"/orders"}>
          <button className="flex items-center text-xl space-x-2 uppercase font-light hover:bg-[#ff9900] w-full py-3 px-5 rounded-sm">
            <span className="text-3xl"><RiBillFill /></span>
            <span>Orders</span>
          </button>
        </Link>
      </div>
      <div className="px-5 py-2 bg-black rounded-smn mt-3">
        <Link href={"#"} className="flex items-center">
          <span><BiLogoGoogle size={20} color="white" /></span>
          <span className="text-white ms-2 text-md font-[500]">Login with Google</span>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;
