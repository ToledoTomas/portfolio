import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import About from "./views/About";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialMedia />
      {/* <About /> */}
    </>
  );
}

export default App;
