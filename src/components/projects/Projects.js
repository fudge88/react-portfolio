import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { frontEnd, backEnd } from "../../Data";

import "./projects.css";

function Projects() {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <ImageList variant="masonry" cols={5} gap={8}>
          {frontEnd.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}
export default Projects;
