import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import defaultImage from "../../public/images/defaultImage.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
  return (
    <div className="h-20  px-4 py-3 shadow-sm flex  items-center  md:py-4 md:px-8 sticky top-0 left-0 ">
      <div className="">
        <Image src={logo} width={120} height={66} alt="" />
      </div>
      <div className="w-full ps-3  ">
        <form className="flex  ">
          <input
            type="text"
            name=""
            placeholder="Search Here"
            className="border  h-11 rounded-l-lg  focus:outline-none  focus:border-[#ff9900]   p-3  w-full "
          />
          <button className=" bg-[#ff9900] w-14 flex items-center justify-center h-11  rounded-r-lg  ">
            <AiOutlineSearch size={20} />
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center ">
        <Link href={"/cart"}>
          <button className="w-11  h-11 flex items-center justify-center ms-3 bg-[#ff9900] rounded-lg relative  ">
            <AiOutlineShoppingCart size={20} />
            <span className=" absolute right-[-4px] top-[-10px] w-6 h-6 bg-red-600 flex justify-center items-center rounded-full text-white  ">
              0
            </span>
          </button>
        </Link>
        <div className="w-11 h-11  ms-3 rounded-full">
          <Link href={"profile"}>
            <Image src={defaultImage} width={120} height={66} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
