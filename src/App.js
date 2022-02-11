import WorkList from "./components/workList/WorkList";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import "./App.css";

function App() {
  return (
    <div>
      <Intro />
      <About />
      <WorkList />
    </div>
  );
}

export default App;
