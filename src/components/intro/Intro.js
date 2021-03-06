import "./intro.css";
import me from "../../img/me.png";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-text">Hello! My name is</h2>
          <h1 className="intro-name">Fahra Akhlaq</h1>
          <div className="job-title">
            <div className="job-title-wrapper">
              <div className="job-title-item">Full Stack Developer</div>
              <div className="job-title-item">Web Developer</div>
              <div className="job-title-item">UI/UX Designer</div>
            </div>
          </div>
          <div className="intro-desc">
            I am a creative, and a fresh thinking person! With years of
            experience of managing projects and refining my skill set to manage,
            improve and develop digital platforms.
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={me} alt="" className="intro-img"></img>
      </div>
    </div>
  );
}

export default Intro;
