import Background from "./NavAndFooter/Background";
// import Cbackground from "./component/Cbackground"
const vercelImages =
  "https://file.mockplus.com/image/2019/10/87d7eaf9-dd88-4b97-8be6-2e03a4b5b115.jpg";
  
import First from "./services/components/First.js"
const slides = [
  {
    id: 1,
    image: vercelImages,
    alt: "Image 1",
    title: "Slide 1",
    description: "Text for Slide 1",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2020/06/17/14/57/beautiful-girl-5309897_1280.jpg",
    alt: "Image 2",
    title: "Slide 2",
    description: "Text for Slide 2",
  },
  {
    id: 3,
    image: "https://bsehexam.org/wp-content/uploads/2023/06/Bella.png",
    alt: "Image 1",
    title: "Slide 1",
    description: "Text for Slide 1",
  },
  {
    id: 4,
    image: "https://i.ytimg.com/vi/MrTz5xjmso4/mqdefault.jpg",
    alt: "Image 2",
    title: "Slide 2",
    description: "Text for Slide 2",
  },
  // Add more slides as needed
];

import About from "./about/page.js"
import "./mycustomclass.css";
export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  





  return (
    <div>
      {/* <Just></Just> */}
      {/* <Cbackground slides={slides} /> */}
      <Background />

   
      {/* <Services/> */}
      <First/>
      {/* <Carousel /> */}
    </div>
  );
}
