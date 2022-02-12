import Cards from "../cards/frontEnd/Cards";

import "./frontEndProjects.css";
import { frontEnd } from "../../Data";

function FrontEndProjects() {
  return (
    <div className="fe">
      <div className="fe-bg"></div>
      <div className="fe-text">
        <h1 className="fe-title">Front-End Projects</h1>
        <p className="fe-desc">
          Front End is everything that user sees on a desktop/mobile app
          including the design and the responsiveness. Simply put, the front end
          of the mobile app is what the user experiences. This may also include
          back-end development, which together create a full stack application.
        </p>
      </div>
      <div className="fe-list">
        {frontEnd.map((item) => (
          <Cards
            key={item.id}
            img={item.img}
            live={item.live}
            repo={item.repo}
          />
        ))}
      </div>
    </div>
  );
}
export default FrontEndProjects;
