import React from "react";
// import myImage from "../images/ict.JPG";



function Column() {
  const vercelImage =
    "https://media.istockphoto.com/id/1187065202/photo/computer-hacker-breaking-the-codes.jpg?s=612x612&w=0&k=20&c=y8gMrMMpBJ0uniFZKrAMjxEajwHkPyaHbpre44aQETo=";
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-2">
          <div className="flex flex-col md:flex-row ">
            <div className="flex items-center justify-center bg-blue-50 md:w-1/2">
              <img
                src={vercelImage}
                alt="About Us"
                className="1rounded-lg shadow-lg rounded-full border-2 border-blue-500"
              />
            </div>
            <div className="md:w-1/2 md:pl-1 mt-4 md:mt-0">
              <p className="mb-4 mt-5 mx-3 font-normal">
                Unlock your true potential with our comprehensive software
                development, web development, and training services. Harness
                cutting-edge technologies and expert guidance to create
                innovative solutions that surpass expectations. Our skilled
                professionals are dedicated to empowering your growth through
                tailored training programs, equipping you with the knowledge and
                skills to thrive in the ever-evolving digital landscape.
                Experience excellence in software and web development, backed by
                our commitment to delivering high-quality results. Let us guide
                you on your journey to success, whether youre building software
                applications, designing captivating websites, or expanding your
                skillset through our comprehensive training programs. Embrace
                the limitless possibilities today and unleash your full
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Column;
