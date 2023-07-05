"use client"
import React, { useState, useEffect } from "react";
// import myImage from "../images/ibra.JPG";


const PricingPage = () => {
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

  // const courses = [
  //   {
  //     name: "Course 1",
  //     price: "$50",
  //     feature: "Feature 1",
  //     image: myImage.src,
  //   },
  //   {
  //     name: "Course 2",
  //     price: "$60",
  //     feature: "Feature 1",
  //     image: myImage.src,
  //   },
  //   {
  //     name: "Course 3",
  //     price: "$70",
  //     feature: "Feature 1",
  //     image: myImage.src,
  //   },
  //   {
  //     name: "Course 4",
  //     price: "$80",
  //     feature: "Feature 1",
  //     image: myImage.src,
  //   },
  //   {
  //     name: "Course 5",
  //     price: "$90",
  //     feature: "Feature 1",
  //     image: myImage.src,
  //   },
  //   {
  //     name: "Course 6",
  //     price: "$100",
  //     feature: "Feature 1",
  //     image: myImage.src,
  //   },
  // ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        
        <div className="flex justify-center">
          <div className="grid w-80 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-full">
            {sortedData.map((course) => (
              <div
                key={course.name}
                className="bg-white rounded-lg shadow-lg p-8 w-full text-center"
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="mx-auto h-24 mb-4 rounded-full"
                />
                <h2 className="text-xl font-bold mb-4">{course.name}</h2>
                <p className="text-gray-600 mb-4">{course.amount}</p>
                <ul className="text-left mb-4">
                  <li>{course.feature}</li>
                </ul>
                <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full">
                  Sign Up
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
