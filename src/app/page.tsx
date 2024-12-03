// import AboutCarousel from "./public/AboutCarousel";
import ExperiencePage from "./public/ExperiencePage";
import GithubRepository from "./component/home/github-repository";
import TextReveal from "./component/common/TextReveal";
import ProjectWork from "./public/ProjectWork";
import CardProfileRev from "./public/CardProfileRev";
import TechStack from "./public/TechStack";

export default function Home() {
  return (
    <main className="relative mx-auto items-center justify-center mb-auto bg-zinc-100">
      <CardProfileRev />
      <TechStack />
      <ExperiencePage />
      <ProjectWork />
      <GithubRepository />
      <TextReveal />
    </main>
  );
}
