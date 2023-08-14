import React from "react";

function Background() {
  
  return (
    <div className="w-full overflow:hidden">
      <section className="  w-full  bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply m-0 z-20  ">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Welcome to Mueletech solutions
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Mueletech we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Contact uS
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
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
            </a>
            
            <a
              href="/services"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/* ................................... */}
      <section className="mt-[-10vh] lg:mt-[-15vh]">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap"></div>
        <div className="grid grid-cols-1 md:grid-cols-2   sm: mx-5 lg:mx-20  lg:grid-cols-3 gap-4">
          <div className="bg-white p-10">
            {/* <h1 className="text-red-500 text-xl">
              Welcome to Mueletech Solutions
            </h1> */}
            <h1 className="flex justify-center items-center">OUR MISSION</h1>
            <hr className="border border-gray-300 my-4"></hr>
            <p className="text-center font-normal">
              Mission To help bring competitive projects to life with power of
              technology, classic designs & innovations
            </p>
            {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            /> */}
          </div>
          <div className="bg-white p-10">
            <h1 className="flex justify-center items-center">OUR VISION</h1>
            <hr className="border border-gray-300 my-4"></hr>
            <p className="h-auto max-w-full rounded-lg text-center font-normal">
              To be a successful global trusted information technology network
              and a choice when it comes to digital product development, quality
              and innovation
            </p>
            {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            /> */}
          </div>
          <div className=" bg-white p-10  only:sm:block w-full  md:hidden  lg:block xl:block ">
            <h1 className="flex justify-center items-center">
              OUR CORE VALUES
            </h1>
            <hr className="border border-gray-300 my-4"></hr>
            <p className="text-center font-normal">
              Our guiding core values in decision making revolve around
              innovation, customer focus, quality, collaboration, integrity,
              continuous learning, accountability, adaptability, diversity &
              inclusion, & social responsibility.
            </p>
            {/* <img
              className="h-auto w-full rounded-lg "
              src={myImage.src}
              alt={myImage.src}
            /> */}
            {/* <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Background;
