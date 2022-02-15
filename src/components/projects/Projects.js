import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { frontEnd, backEnd } from "../../Data";
import Cards from "../cards/Cards";

import "./projects.css";

function Projects() {
  const sliderSettings = {
    slidesToShow: 3,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="project">
      <div className="project-bg"></div>
      <div className="project-text">
        <h1 className="project-title">Projects</h1>
        <h2 className="project-desc">Front-End</h2>
      </div>
      <div className="carousel">
        <Slider {...sliderSettings}>
          {frontEnd.map((item, index) => (
            <div className="project-list">
              <Cards
                key={index}
                img={item.img}
                live={item.live}
                repo={item.repo}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="project-text">
        <h2 className="project-desc">Back-End</h2>
      </div>

      <div className="carousel">
        <Slider {...sliderSettings}>
          {backEnd.map((item, index) => (
            <div className="project-list">
              <Cards
                key={index}
                img={item.img}
                live={item.live}
                repo={item.repo}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
export default Projects;
