"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Data() {
 const [data, setData] = useState([]);
 const [sortedData, setSortedData] = useState([]);

 useEffect(() => {
   const fetchData = async () => {
     try {
       const res = await fetch("/api/newdata", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
         },
       });
       const jsonData = await res.json();
       setData(jsonData);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   fetchData();
 }, []);

 useEffect(() => {
   if (data.length > 0) {
     const sorted = data.sort(
       (a, b) => new Date(b.created_at) - new Date(a.created_at)
     );
     setSortedData(sorted);
   }
 }, [data]);

 
  return (
    <div>
      
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="bg-white">
            <h1 className="text-3xl text-blue-700 text-center font-bold">
              What we do
            </h1>
            <hr className="border border-gray-300 my-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
            {sortedData.map((mydata) => (
              <div key={mydata.id}>
                <div className="transition-all duration-1000 hover:scale-110 hover:shadow-xl bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-auto flex justify-center items-center mt-5">
                    <img
                      src={mydata.image}
                      alt="Service 1"
                      layout="fill"
                      objectfit="cover"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="p-6 mt-[-18px]">
                    <h2 className="text-xl font-bold mb-1 underline text-center">
                      {mydata.title}
                    </h2>
                    <p className="text-gray-700">{mydata.description}</p>
                    <Link href="/pricing">
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Icon description</span>
                        Learn more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;

// import React from "react";
// // import myImage from "../images/ibra.JPG";
// import Link from "next/link";

// import graphicIcon from "../../images/graphic-icon.PNG";
// import webIcon from "../../images/web-design.PNG";
// import mobileIcon from "../../images/mobile-app-design-icon.PNG";
// import trainingIcon from "../../images/training&Consultancy.PNG";
// import refurbishedIcon from "../../images/refurbished.PNG";
// import solarIcon from "../../images/solarMedia.PNG";

// const ServicesPage = () => {
//   return (
//     <>
//       <div className="bg-gray-100 py-10">
//         <div className="container mx-auto px-4">
//           <div className="bg-white">
//             <h1 className="text-3xl text-blue-700 text-center font-bold ">
//               What we do
//             </h1>
//             <hr className="border border-gray-300 my-1"></hr>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
//             <div className=" transition-all duration-1000 hover:scale-110 hover:shadow-xl bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-auto flex justify-center items-center mt-5">
//                 {/* <img
//                 src={myImage.src}
//                 alt="Service 1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full"
//               /> */}
//                 <img
//                   src={graphicIcon.src}
//                   alt="Service 1"
//                   layout="fill"
//                   objectfit="cover"
//                   className="w-16 h-16  "
//                 />
//               </div>
//               <div className="p-6  mt-[-18px] ">
//                 <h2 className="text-xl font-bold mb-1 underline text-center">
//                   Graphic Design & Animation
//                 </h2>
//                 <p className="text-gray-700">
//                   We offer oustanding and stunning graphic designing services to
//                   make your brand stand a head of your competitors
//                 </p>
//                 <Link href="/pricing">
//                   <button
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                     <span className="sr-only">Icon description</span>
//                     Learn more
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className="transition-all duration-1000 hover:scale-110 hover:shadow-xl bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-auto flex justify-center items-center mt-5 ">
//                 {/* <img
//                 src={myImage.src}
//                 alt="Service 1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full"
//               /> */}
//                 <img
//                   src={webIcon.src}
//                   alt="Service 1"
//                   layout="fill"
//                   objectfit="cover"
//                   className="w-16 h-16 "
//                 />
//               </div>
//               <div className="p-6 mt-[-18px]">
//                 <h2 className="text-xl font-bold mb-1 underline text-center">
//                   Web Design
//                 </h2>
//                 <p className="text-gray-700">
//                   Ignite your online identity/presence with cornerstone digital
//                   assets. Build your presence with superb designs and
//                   functionality.
//                 </p>
//                 <Link href="/pricing">
//                   <button
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                     <span className="sr-only">Icon description</span>
//                     Learn more
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             {/* ..................... */}
//             <div className="transition-all duration-1000 hover:scale-110 hover:shadow-xl bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-auto flex justify-center items-center mt-5">
//                 <img
//                   src={mobileIcon.src}
//                   alt="Service 1"
//                   layout="fill"
//                   objectfit="cover"
//                   className="w-16 h-16 "
//                 />
//                 {/* <img
//                 src={myImage.src}
//                 alt="Service 1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full"
//               /> */}
//               </div>
//               <div className="p-6 mt-[-18px]">
//                 <h2 className="text-xl font-bold mb-1 underline text-center ">
//                   App development
//                 </h2>
//                 <p className="text-gray-700">
//                   Develop visually pleasing apps optimized for entrepreneurs,
//                   startups, and enterprises with a leading software development
//                   company.
//                 </p>
//                 <Link href="/pricing">
//                   <button
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                     <span className="sr-only">Icon description</span>
//                     Learn more
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             {/* ............................... */}
//             <div className=" transition-all duration-1000 hover:scale-110 hover:shadow-xl bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-auto flex justify-center items-center mt-5">
//                 {/* <img
//                 src={myImage.src}
//                 alt="Service 1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full"
//               /> */}
//                 <img
//                   src={trainingIcon.src}
//                   alt="Service 1"
//                   layout="fill"
//                   objectfit="cover"
//                   className="w-16 h-16 "
//                 />
//               </div>
//               <div className="p-6  mt-[-18px] ">
//                 <h2 className="text-xl font-bold mb-1 underline text-center">
//                   Training
//                 </h2>
//                 <p className="text-gray-700">
//                   Get equipped with the latest IT skills you need to get to your
//                   next job.Unlike other trainings, Students are on one on one
//                   with their tutor.
//                 </p>
//                 <Link href="/pricing">
//                   <button
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                     <span className="sr-only">Icon description</span>
//                     Learn more
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className=" transition-all duration-1000 hover:scale-110 hover:shadow-xl bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-auto flex justify-center items-center mt-5">
//                 {/* <img
//                 src={myImage.src}
//                 alt="Service 1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full"
//               /> */}
//                 <img
//                   src={refurbishedIcon.src}
//                   alt="Service 1"
//                   layout="fill"
//                   objectfit="cover"
//                   className="w-16 h-16 "
//                 />
//               </div>
//               <div className="p-6  mt-[-18px] ">
//                 <h2 className="text-xl font-bold mb-1 underline text-center">
//                   Refurbished PC
//                 </h2>
//                 <p className="text-gray-700">
//                   Receive a fully functional, ready-to-use device with a genuine
//                   power adapter.y machine we sell goes through our testing
//                   process to ensure that you
//                 </p>
//                 <Link href="/pricing">
//                   <button
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                     <span className="sr-only">Icon description</span>
//                     Learn more
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className=" transition-all duration-1000 hover:scale-110 hover:shadow-xl bg-white rounded-lg shadow-md overflow-hidden">
//               <div className="relative h-auto flex justify-center items-center mt-5">
//                 {/* <img
//                 src={myImage.src}
//                 alt="Service 1"
//                 layout="fill"
//                 objectFit="cover"
//                 className="w-full"
//               /> */}
//                 <img
//                   src={solarIcon.src}
//                   alt="Service 1"
//                   layout="fill"
//                   objectfit="cover"
//                   className="w-16 h-16 "
//                 />
//               </div>
//               <div className="p-6  mt-[-18px] ">
//                 <h2 className="text-xl font-bold mb-1 underline text-center">
//                   Solar Energy
//                 </h2>
//                 <p className="text-gray-700">
//                   The price of materials or items varies depending on its
//                   nature. it can be a torch, mobile, on roof solars among
//                   others. Prices are also negotiable
//                 </p>
//                 <Link href="/pricing">
//                   <button
//                     type="button"
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                     <span className="sr-only">Icon description</span>
//                     Learn more
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             {/* Add more service cards here */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesPage;
