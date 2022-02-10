import "./intro.css";
import me from "../../img/me.png";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h3 className="intro-text">Hello! My name is</h3>
          <h1 className="intro-name">Fahra Akhlaq</h1>
          <div className="job-title-container">
            <div className="job-title-wrapper">
              <div className="job-title-item">Full Stack Developer</div>
              <div className="job-title-item">Web Developer</div>
              <div className="job-title-item">UI/UX Designer</div>
            </div>
          </div>
          <div className="intro-desc">
            Strengths in creativity, teamwork, and building projects in and
            agile manner from ideation to execution.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-img-bg"></div>
        <img src={me} alt="" className="intro-img"></img>
      </div>
    </div>
  );
}

export default Intro;
