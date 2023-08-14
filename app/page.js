
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

   
      {/* <Services/> */}
      <First/>
      {/* <Carousel /> */}
    </div>
  );
}
