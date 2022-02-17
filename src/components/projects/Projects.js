import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import { frontEnd, backEnd } from "../../Data";
import Cards from "../cards/Cards";

import "./projects.css";

function Projects() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  const sliderSettings = {
    arrows: [isMobile ? true : false],
    slidesToShow: [isMobile ? 1 : 3],
    infinite: true,
    slidesToShow: [isMobile ? 1 : 3],
    slidesToScroll: 1,

    cssEase: "linear",
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="project">
      <div className="project-bg"></div>
      <div className="project-text">
        <h1 className="project-title">Projects</h1>
        <h3 className="project-desktop">Hover to pause</h3>
        <h3 className="project-mobile">Swipe to view more projects</h3>
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
