"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./NavAndFooter/Navbar";
import Footer from "./NavAndFooter/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Link from "next/link";
function Just({ children }) {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Navbar />

      <div className="font-bold m-0 ">{children}</div>
      <button className="text-green-500 bg-white right-5 top-[380px] text-4xl fixed">
        <Link href="https://wa.link/zjvs8a" className="text-green">
          <FaWhatsapp />
        </Link>
      </button>
      <div className="flex z-10 justify-end mr-5">
        {" "}
        {showTopBtn && (
          <FaAngleUp
            className="custom absolute z-10  text-5xl bg-purple-800 border-2 border-white rounded-full h-50 w-50 text-white cursor-pointer animate-movebtn duration-300 transition-all"
            onClick={goToTop}
          />
        )}{" "}
      </div>

      <Footer />
    </div>
  );
}
//not too first to caution--to go is now
export default Just;
