import Image from "next/image";

import { Content } from "./NavAndFooter/Content";
import Background from "./NavAndFooter/Background";

import First from "./services/components/First.js"

import About from "./about/page.js"
import "./mycustomclass.css";
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  





  return (
    <div>
      {/* <Just></Just> */}

      <Background />
      {/* <div className="wavy-background">
        <div className="wave"></div>
      </div>
      <div className="conic"></div> */}
      <About/>

      <Content />
      {/* <Services/> */}
      <First/>
      {/* <Carousel /> */}
    </div>
  );
}
