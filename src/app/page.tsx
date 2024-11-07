import Image from "next/image";

import About from "./public/about"
// import Welcome from "./component/common/Welcome"
import Parallax from "./component/common/Parallax"
import TextZoom from "./component/common/TextZoom"
import ImgDist from "./component/common/imgDist";
import TextScroll from "./component/common/TextScroll"
import Profiles from "./component/common/Profiles"

export default function Home() {
  return (
    <main className="flex flex-col justify-center mb-auto">
      {/* <Welcome /> */}
      <Profiles />
      {/* <TextScroll /> */}
      {/* <Parallax /> */}
      <ImgDist />
      {/* <TextZoom /> */}
      {/* <TextZoomOut /> */}
      <About />
    </main>
  );
}
