import Cards from "../cards/Cards";

import "./workList.css";
import { frontEnd } from "../../data";

function WorkList() {
  return (
    <div className="wl">
      <div className="wl-bg"></div>
      <div className="wl-text">
        <h1 className="wl-title">Projects</h1>
        <p className="wl-desc">Front End/ Full Stack Apps</p>
      </div>
      <div className="wl-list">
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
export default WorkList;
