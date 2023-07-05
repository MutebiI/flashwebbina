"use client";
import React, { useState, useContext } from "react";
import AuthContext from "../../../myContext" 
import MyForm from "./Myfrom";
import Activitydata from "./Activitydata";
import { useSearchParams } from "next/navigation";
import Background from "@/app/NavAndFooter/Background";



export const revalidate = 10;

  
function page() {
  const { isLoggedIn, logout } = useContext(AuthContext)
  console.log(isLoggedIn)
  const searchParams = useSearchParams();
  const page = searchParams.get("email");
  console.log(page);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Background />
      <button onClick={()=>logout()}>LOG OUT </button>
      <button
        onClick={openModal}
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add A New service
      </button>

      <Activitydata />

      {isModalOpen && <MyForm closeModal={closeModal} />}
    </div>
  );
}

export default page;
