import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "../cards/frontEnd/Cards";

import { frontEnd } from "../../Data";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: "slides",
  };
  return (
    <div className="Carousel">
      <Slider {...settings}>
        {/* <div className="project-list"> */}
        {frontEnd.map((item) => {
          return (
            <div className="project-list">
              <Cards
                key={item.id}
                img={item.img}
                live={item.live}
                repo={item.repo}
              />
            </div>
          );
        })}
        {/* </div> */}
      </Slider>
    </div>
  );
}
