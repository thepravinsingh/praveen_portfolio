import Main from "./components/Main";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className=" max-md:px-5 mb-[200px] px-[150px] flex flex-col gap-10">
      <Navbar />
      <Main />
      <AboutMe />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
