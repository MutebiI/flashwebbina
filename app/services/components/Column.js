import React from 'react'
// import myImage from "../../images/happywoman.JPG";


function Column() {
  const vercelImage =
    "https://media.istockphoto.com/id/1187065202/photo/computer-hacker-breaking-the-codes.jpg?s=612x612&w=0&k=20&c=y8gMrMMpBJ0uniFZKrAMjxEajwHkPyaHbpre44aQETo=";
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-2">
          <div className="flex flex-col md:flex-row ">
            <div className="flex items-center justify-center bg-blue-50 md:w-1/2">
              {/* <img
                src={myImage.src}
                alt="About Us"
                className="1rounded-lg shadow-lg rounded-full border-2 border-blue-500"
              /> */}
              <img
                src={vercelImage}
                alt="About Us"
                className="1rounded-lg shadow-lg rounded-full border-2 border-blue-500"
              />
            </div>
            <div className="md:w-1/2 md:pl-1 mt-4 md:mt-0">
              <p className="mb-4 mt-5 mx-3 font-normal">
                diverse global groups, including CBOs, NGOs, Entrepreneurs,
                small businesses/firms, governmental organizations, and
                students. With a strong focus on customer satisfaction, we have
                earned a solid reputation by providing exceptional services and
                helping our clients succeed in the global market. By staying at
                the forefront of emerging technologies, we continuously adapt to
                meet our clients expectations. Our commitment to excellence
                drives us to deliver the most effective solutions. We empower
                CBOs with digital tools, assist NGOs in achieving their social
                impact goals, support entrepreneurs in realizing their business
                objectives, provide scalable solutions to small businesses and
                firms, streamline operations for governmental organizations, and
                facilitate students in their educational journey. We understand
                that our clients success is a testament to our own
                achievements, and we are dedicated to their growth and
                prosperity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Column