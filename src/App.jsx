import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Home from "./views/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SocialMedia />
    </>
  );
}

export default App;
