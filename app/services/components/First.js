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
