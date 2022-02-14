import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Toggle from "./components/toggle/toggle";
import "./App.css";

import "react-alice-carousel/lib/alice-carousel.css";
import { useContext } from "react";
import { modeContext } from "./context";

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
      <Toggle />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
