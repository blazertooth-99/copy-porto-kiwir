
import StackPage from "./public/StackPage";
import AboutCarousel from "./public/AboutCarousel";
import MyProject from "./public/ProjectPage";
import ExperiencePage from "./public/ExperiencePage";
import GithubRepository from "./component/home/github-repository";
import Preloader from "./component/common/Loading";
import TextReveal from "./component/common/TextReveal";
import ProjectWork from "./public/ProjectWork";
import CardProfileRev from "./public/CardProfileRev";
import TechStack from "./public/TechStack";

export default function Home() {
  return (
    <main className="relative mx-auto w-screen items-center justify-center mb-auto bg-zinc-100">
      {/* <Preloader /> */}
      <CardProfileRev />
      <TechStack />
      {/* <AboutCarousel /> */}
      <ExperiencePage />
      <ProjectWork />
      <GithubRepository />
      <TextReveal />
    </main>
  );
}
