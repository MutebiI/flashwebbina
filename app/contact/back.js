import React from 'react'
import contact from "../images/canvas.JPG";

function back() {
  return (
    <div
      className="bg-cover sm: h-100 h-full flex flex-col bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${contact.src})`,
        width: "100%",
        height: "40vh"
       
      }}
    ></div>
  );
}

export default back