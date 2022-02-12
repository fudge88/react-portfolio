import FrontEndProjects from "./components/frontEndProjects/FrontEndProjects";
import BackEndProjects from "./components/backEndProjects/BackEndProjects";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import "./App.css";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <FrontEndProjects />
      <BackEndProjects />
      <Contact />
    </div>
  );
}

export default App;
