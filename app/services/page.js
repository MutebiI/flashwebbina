import React from "react";


// import servicesImage from "../images/servicesnew.JPG";
// import servicesImage from "../images/servicesnew.JPG"
import Servicesconti from './Servicesconti.js'
import Column from "./components/Column.js";

// import First from './components/First.js'
console.log("himbs")

const ServicesPage = () => {
  const vercelImage =
    "https://media.istockphoto.com/id/1187065202/photo/computer-hacker-breaking-the-codes.jpg?s=612x612&w=0&k=20&c=y8gMrMMpBJ0uniFZKrAMjxEajwHkPyaHbpre44aQETo=";
  return (
    <>
      {/* <div
        className=" overflow-hidden bg-cover h-full flex flex-col bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url(${servicesImage.src})`,
          width: "100%",
          height: "30vh",
        }} */}
      <div
        className=" overflow-hidden bg-cover h-full flex flex-col bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url(${vercelImage})`,
          width: "100%",
          height: "30vh",
        }}
      >
        <div className="w-80 mx-auto text-center border-4 border-gray-300 mt-auto text-4xl">
          <h1 className=" text-2xl flex justify-center text-white align-items text-center bg-blue-500 ">
            OUR SERVICES
          </h1>
        </div>
      </div>
      <Column />

      <Servicesconti />

      {/* <First /> */}
    </>
  );
};

export default ServicesPage;
