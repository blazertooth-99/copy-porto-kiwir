
import Profiles from "./public/Profiles"
import StackPage from "./public/StackPage"
import AboutCarousel from './public/AboutCarousel'
import MyProject from "./public/ProjectPage";
import ExperiencePage from "./public/ExperiencePage";
import FloatingParticles from './component/home/FloatingParticles';

export default function Home() {
  return (
    <main className="relative mx-auto w-screen items-center justify-center mb-auto">
      <Profiles />
      <AboutCarousel />
      <StackPage />
      <ExperiencePage />
      <MyProject />
    </main>
  );
}
