import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import { projectData } from "../../Data";

import "./projects.css";

function Projects() {
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {projectData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.repo} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}
export default Projects;
