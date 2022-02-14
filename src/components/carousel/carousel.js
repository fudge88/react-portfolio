import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Cards from "../cards/frontEnd/Cards";
import { frontEnd } from "../../Data";

const itemsLength = Array.from({ length: 6 });

const items = itemsLength.map((item, index) => {
  const style = { width: 150 + index * 100 };
  return (
    <div className="project-list, item">
      project 1
      {/* {frontEnd.map((item) => (
        <Cards
          data-value={item.id}
          img={item.img}
          live={item.live}
          repo={item.repo}
        />
      ))} */}
      {/* {index + 1} */}
    </div>
  );
});

const Carousel = () => (
  <AliceCarousel autoWidth infinite mouseTracking items={items} />
);

export default Carousel;
