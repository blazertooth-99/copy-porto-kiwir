import Image from "next/image";
import Heroimg from "./component/home/hero";
import Business from "./public/business";
import Career from "./public/career";
import News from "./public/news"
import About from "./public/about"
import Welcome from "./anim/Welcome"
import Parallax from "./anim/Parallax"
import TextZoom from "./anim/TextZoom"
import ImgDist from "./anim/imgDist";
import TextScroll from "./anim/TextScroll"

export default function Home() {
  return (
    <main className="flex flex-col justify-center mb-auto">
      <Welcome />
      <TextScroll />
      <Parallax />
      <ImgDist />
      <TextZoom />
      {/* <TextZoomOut /> */}
      <About />
    </main>
  );
}
