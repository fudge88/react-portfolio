import FrontendProject from "./components/FrontendProject/FrontendProject";
import BackendProject from "./components/BackendProject/BackendProject";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Toggle from "./components/toggle/toggle";
import "./App.css";

import { useContext } from "react";
import { modeContext } from "./context";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  const mode = useContext(modeContext);
  const darkMode = mode.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#080808" : "white",
        color: darkMode && "white",
      }}
    >
      <Nav />
      <Toggle />
      <Intro />
      <About />
      <FrontendProject />
      <BackendProject />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
