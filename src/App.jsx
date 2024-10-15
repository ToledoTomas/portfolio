import "./App.css";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Projects from "./views/Projects";
import projectsData from "./api/projects.json";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialMedia />
      <About />
      <Projects />
      <Cards projects={projectsData.projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
