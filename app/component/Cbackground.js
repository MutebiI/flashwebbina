// "use client"
// import React, { useRef, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./ImageCarousel.css"; // Import a separate CSS file for animations

// const ImageCarousel = ({ slides }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//   };

//   const slickRef = useRef(null);

//   useEffect(() => {
//     // Add the animation class to all slides' h1 and p tags when the component is initially loaded
//     slides.forEach((_, index) => addAnimationClass(index));

//     // Add the event listener for slide change
//     slickRef.current.innerSlider.list.addEventListener(
//       "afterChange",
//       handleAfterChange
//     );

//     // Cleanup: Remove the event listener when the component unmounts
//     return () => {
//       slickRef.current.innerSlider.list.removeEventListener(
//         "afterChange",
//         handleAfterChange
//       );
//     };
//   }, [slides]);

//   const addAnimationClass = (index) => {
//     const currentSlideElement =
//       slickRef.current.innerSlider.list.childNodes[index];
//     if (currentSlideElement) {
//       const textContainer =
//         currentSlideElement.querySelector(".text-container");
//       if (textContainer) {
//         textContainer.classList.add("animation-slide");
//       }
//     }
//   };

//   const handleAfterChange = () => {
//     // Add the animation class to the h1 and p tags of all slides after slide change is complete
//     slides.forEach((_, index) => addAnimationClass(index));
//   };

//   return (
//     <div
//       style={{
//         overflow: "hidden", // Hide both horizontal and vertical overflow
//         height: "100vh", // Set height to 100% of the viewport height
//       }}
//     >
//       <Slider
//         {...settings}
//         className="slick-list" // Add this class to apply height: 100% to the slick-list element
//         ref={slickRef}
//       >
//         {slides.map((slide, index) => (
//           <div key={slide.id} className="relative h-screen">
//             <img
//               src={slide.image}
//               alt={slide.alt}
//               className="h-full w-full object-cover"
//             />
//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center blur-layer">
//               {/* Add blur-layer class here */}
//               <div className="text-white text-center p-8 text-container">
//                 <h1 className="text-4xl font-bold mb-4 bg-black bg-opacity-50 p-4">
//                   {slide.title}
//                 </h1>
//                 <p className="text-lg bg-black bg-opacity-50 p-4">
//                   {slide.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ImageCarousel;
