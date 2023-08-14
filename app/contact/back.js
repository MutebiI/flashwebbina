import React from "react";

function back() {
  const vercelImage =
    "https://blog.hubspot.com/hs-fs/hubfs/parts-url-hero.jpg?width=595&height=400&name=parts-url-hero.jpg";
  return (
    <div
      className="bg-cover sm: h-100 h-full flex flex-col bg-fixed bg-no-repeat"
      style={{
        // backgroundImage: `url(${contact.src})`,
        backgroundImage: `url(${vercelImage})`,
        width: "100%",
        height: "40vh",
      }}
    ></div>
  );
}

export default back;
