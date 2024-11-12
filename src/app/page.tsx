import Image from "next/image";

import About from "./public/about"
// import Welcome from "./component/common/Welcome"
import Parallax from "./component/common/Parallax"
import TextZoom from "./component/common/TextZoom"
import ImgDist from "./component/common/imgDist";
import TextScroll from "./component/common/TextScroll"
import Profiles from "./component/common/Profiles"
import MorphingGradients from "./component/common/MorphingGradients";
import StackPage from "./component/common/StackPage"
import MorphingPageView from "./component/common/MorphingPageView"
import AboutCarousel from './public/AboutCarousel'
import MyProject from "./public/ProjectPage";

export default function Home() {
  return (
    <main className="relative mx-auto w-screen items-center justify-center mb-auto">
      {/* <Welcome /> */}
      {/* <MorphingPageView /> */}
      <MorphingGradients />
      {/* <About /> */}
      <AboutCarousel />
      <StackPage />
      <MyProject />
      {/* <Profiles /> */}
      {/* <TextScroll /> */}
      {/* <Parallax /> */}
      {/* <ImgDist /> */}
      {/* <TextZoom /> */}
      {/* <TextZoomOut /> */}
    </main>
  );
}
