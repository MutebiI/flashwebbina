"use client";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../myContext/index.js";

import MyForm from "../controlledForms/Myfrom.js";
import Activitydata from "../controlledForms/Activitydata.js";
import { useRouter } from "next/navigation";
import Background from "../NavAndFooter/Background.js";

function Page() {
 const router = useRouter()
  const { logout } = useContext(AuthContext) || {};
  useEffect(() => {
    if (!logout) {
      router.push('/')
    }
    
  },[logout, router])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleLogout = () => {
     logout()
  };
  

  return (
    <div>
      <Background />
      <button onClick={handleLogout}>LOG OUT </button>
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

export default Page;
