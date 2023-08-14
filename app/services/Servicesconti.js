"use client";
import React, { useState, useEffect } from "react";


const Card = () => {
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
      {sortedData.map((mydata) => (
        <div key={mydata.id} className="mx-10 mb-6">
          <div className="bg-blue-200 rounded-lg shadow-md p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-shrink-0">
                <img
                  src={mydata.image}
                  alt={mydata.title}
                  className="w-24 h-30 border-2 border-white"
                />
              </div>
              <div className="md:ml-4 md:flex-grow">
                <h2 className="text-xl font-bold">{mydata.title}</h2>
                <p className="mt-2 w-full font-normal overflow-hidden ">
                  {mydata.description}
                </p>
                <p className="mt-2 font-normal">{mydata.feature}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
