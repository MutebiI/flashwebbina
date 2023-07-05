import React from "react";
import myImage from "../images/ibra.JPG";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-2">
          <h1 className="text-2xl  text-center mb-6  bg-gray-500 text-white py-2 ">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row ">
            <div className="flex items-center justify-center bg-blue-100 md:w-1/2">
              <img
                src={myImage.src}
                alt="About Us"
                className="1rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-1 mt-4 md:mt-0">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4 font-normal">
                At MueleTech, we started our journey with a vision and mission
                which we have been committed to, since our establishment in
                2019. Our passion in the ICT sector drives us to deliver elegant
                and functional digital products that solve complex, and
                throughout the years, we have achieved significant milestones
                and accomplishments. We take pride in deployment of a
                large-scale e-commerce platform, handling millions of
                transactions securely and seamlessly, training among others.
                These achievements are a testament to our dedicated team and the
                trust and support we have received from our valued customers and
                partners.
              </p>
              <div className="bg-blue-100 bg-opacity-90 ">
                <p className="font-normal">
                  We are a software development company with a world-class team
                  of talented data scientists, developers, designers,
                  mathematicians, tutors, engineers, and creative artists. We
                  are motivated to build elegant and functional digital products
                  that solve complex problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
