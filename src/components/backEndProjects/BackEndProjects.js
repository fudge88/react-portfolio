import Cards from "../cards/backEnd/Cards";

import "./backEndProjects.css";
import { backEnd } from "../../Data";

function BackEndProjects() {
  return (
    <div className="be">
      <div className="be-bg"></div>
      <div className="be-text">
        <h1 className="be-title">Back-End Projects</h1>
        <p className="be-desc">
          A backend app is like a server for the users to sort the required
          information. One can say that it refers to the activities that happen
          behind the scenes when you are performing a task on an app. This could
          be logging in to your account or playing a movie online.
        </p>
      </div>
      <div className="be-list">
        {backEnd.map((item) => (
          <Cards key={item.id} img={item.img} repo={item.repo} />
        ))}
      </div>
    </div>
  );
}
export default BackEndProjects;
