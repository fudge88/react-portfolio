import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "../cards/frontEnd/Cards";

export default function Carousel() {
  const sliderSettings = {
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
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

  const frontEnd = [
    {
      id: "1",
      img: "https://github.com/fudge88/foodtopia/raw/main/assets/images/wireframes/index-ss.png",
      live: "https://fudge88.github.io/foodtopia/",
      repo: "https://github.com/fudge88/foodtopia",
    },
    {
      id: "2",
      img: "https://github.com/fudge88/dating-app/raw/main/public/assets/img/homess.png",
      live: "https://crush-app-2022.herokuapp.com/",
      repo: "https://github.com/fudge88/dating-app",
    },
    {
      id: "3",
      img: "https://github.com/fudge88/weather-dashoard/raw/main/assets/images/responsive.gif",
      live: "https://github.com/fudge88/weather-dashoard",
      repo: "https://fudge88.github.io/weather-dashoard/",
    },
    {
      id: "4",
      img: "https://github.com/fudge88/day-planner-app/raw/main/assets/images/app.gif",
      live: "https://fudge88.github.io/day-planner-app/",
      repo: "https://github.com/fudge88/day-planner-app",
    },
    {
      id: "5",
      img: "https://github.com/fudge88/javascript-multiple-choice-challange/raw/dev/assets/images/quiz-app.gif",
      live: "https://fudge88.github.io/javascript-multiple-choice-challange/",
      repo: "https://github.com/fudge88/javascript-multiple-choice-challange/tree/dev",
    },
    {
      id: "6",
      img: "https://github.com/fudge88/mvc-blog/raw/dev/public/assets/img/home-readme.png",
      live: "https://mvc-trekking-blog.herokuapp.com/",
      repo: "https://github.com/fudge88/mvc-blog/tree/dev",
    },
  ];

  return (
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
  );
}
