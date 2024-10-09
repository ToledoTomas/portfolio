import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Home from "./views/Home";
// import Projects from "./views/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialMedia />
      {/* <Projects /> */}
    </>
  );
}

export default App;
