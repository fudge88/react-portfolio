import "./about.css";
import me1 from "../../img/me1.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={me1} alt="" className="about-img"></img>
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          I hold a portfolio of web-based applications that have been created
          around a small brief, designing the aesthetics, user journey, and
          development to myself. I have a great understanding of social media
          presence, targeting audiences and brand representation.
        </p>
        <p className="about-desc">
          Initially I studied web development as I was curious about ‘coding’. I
          found I really enjoyed knowing that my work would help people and
          businesses connect for a purpose using creativity and outside
          thinking. Being an ‘Advocate personality’ type, creativity and strong
          communicating skills are a natural flare.
        </p>
        <div className="about-icon"></div>
      </div>
    </div>
  );
}

export default About;
