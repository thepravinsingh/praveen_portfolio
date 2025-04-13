import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="max-md:px-5 px-[150px] flex flex-col gap-20">
      <Main />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
