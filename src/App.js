import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import "./App.css";

import "react-alice-carousel/lib/alice-carousel.css";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
