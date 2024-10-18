import Image from "next/image";
import Heroimg from "./component/hero";
import Business from "./landing_page/business";
import Career from "./landing_page/career";
import News from "./landing_page/news"
import About from "./landing_page/about"
import Anim from "./anim/welcome-banner"
import Parallax from "./anim/Parallax"
import TextZoom from "./anim/TextZoom"

export default function Home() {
  return (
    <main className="flex flex-col justify-center mb-auto">
      <Anim />
      <Parallax />
      <TextZoom />
      {/* <Business />
      <About />
      <Career />
      <News /> */}
    </main>
  );
}
