"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import logo from "../images/mueletechLogo.PNG";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const vercelImages =
    "https://file.mockplus.com/image/2019/10/87d7eaf9-dd88-4b97-8be6-2e03a4b5b115.jpg";
  // const [changeLinkColor, setChangeLinkColor] = useState(
  //   "block py-3 px-4 text-white bg-blue-700 rounded border-2 border-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
  // );
  const pathname = usePathname();
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const topPage = () => {
    // window.scrollTo(0, 0);
    setIsNavOpen(!isNavOpen);
  };


  return (
    <div className="z-10 background-color: rgb(220 38 38) fixed w-full">
      <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 m-0  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            {/* <img
              src={logo.src}
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}
            <img
              src={vercelImages}
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-blue-600 text-2xl font-semibold whitespace-nowrap dark:text-white">
              MueleTech
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isNavOpen}
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <button className="block w-full text-left" onClick={topPage}>
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "block py-3 px-4 text-white bg-blue-700 rounded border-2 border-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                    aria-current="page"
                  >
                    <span className="pl-2 pr-4">Home</span>
                  </Link>
                </button>
              </li>
              <li>
                <button className="block w-full text-left" onClick={topPage}>
                  <Link
                    href="/services"
                    className={
                      pathname === "/services"
                        ? "block py-3 px-4 text-white bg-blue-700 rounded border-2 border-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    <span className="pl-2 pr-4">Services</span>
                  </Link>
                </button>
              </li>
              <li>
                <button className="block w-full text-left" onClick={topPage}>
                  <Link
                    href="/pricing"
                    className={
                      pathname === "/pricing"
                        ? "block py-3 px-4 text-white bg-blue-700 rounded border-2 border-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    <span className="pl-2 pr-4">Pricing</span>
                  </Link>
                </button>
              </li>
              <li>
                <button className="block w-full text-left" onClick={topPage}>
                  <Link
                    href="/contact"
                    className={
                      pathname === "/contact"
                        ? "block py-3 px-4 text-white bg-blue-700 rounded border-2 border-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }
                  >
                    <span className="pl-2 pr-4">Contact</span>
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
