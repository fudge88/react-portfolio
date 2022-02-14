import Cards from "../cards/frontEnd/Cards";

import "./projects.css";
import { frontEnd, backEnd } from "../../Data";
import Carousel from "../carousel/carousel";

function Projects() {
  return (
    <div className="project">
      <div className="project-bg"></div>
      <div className="project-text">
        <h1 className="project-title">Projects</h1>
        <h2 className="project-desc">Front-End</h2>
      </div>
      <Carousel>
        <div className="project-list">
          {frontEnd.map((item) => (
            <Cards
              key={item.id}
              img={item.img}
              live={item.live}
              repo={item.repo}
            />
          ))}
        </div>
      </Carousel>
      <div className="project-text">
        <h2 className="project-desc">Back-End</h2>
      </div>
      <div className="project-list">
        {backEnd.map((item) => (
          <Cards key={item.id} img={item.img} repo={item.repo} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
