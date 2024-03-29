'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import defaultImage from "../../public/images/defaultImage.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

const Header = () => {
  const router = useRouter();
  const [searchTerm, setsearchTerm] = useState("")
  const [user, loading] = useAuthState(auth)
  const cartsRef = collection(db, "cart")
  const [cartSnapshotData, loading2] = useCollectionData(cartsRef);
  let totalLength = cartSnapshotData?.filter((data) => data?.uid === user?.uid)?.length || 0;

  const searching = async(e) => {
    e.preventDefault();
    if (searchTerm !== '') {
      router.push(`category/${searchTerm}`)
    }
  }
  return (
    <div className="h-20  w-full px-4 py-3 shadow-sm  bg-white flex  items-center  md:py-4 md:px-8 fixed  top-0 left-0 z-50 ">
      <Link href={'/'} >
        <Image src={logo} width={120} height={66} alt="" property={true} />
      </Link>
      <div className="w-full ps-3 ">
        <form className="flex " onSubmit={searching}>
          <input
            type="text"
            name=""
            placeholder="Search Here"
            className="border  h-11 rounded-l-lg  focus:outline-none  focus:border-[#ff9900]   p-3  w-full "
            onChange={(e) => setsearchTerm(e.target.value)}
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
            {
              totalLength > 0 ? (
                <span className=" absolute right-[-4px] top-[-10px] w-6 h-6 bg-red-600 flex justify-center items-center rounded-full text-white  ">
                  {totalLength}
                </span>
              ) : ''
            }
          </button>
        </Link>
        <div className="w-11 h-11  ms-3 rounded-full">
          <Link href={"#"}>
            <Image src={user ? user.photoURL : defaultImage} width={120} height={66} property={true}  alt="" className="rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
