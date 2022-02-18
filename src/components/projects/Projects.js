import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { projectData } from "../../Data";

import "./projects.css";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Projects() {
  return (
    <div>
      <h1 className="project-title">Projects</h1>
      <div className="project-container">
        <ImageList
          sx={{
            width: "100%",
          }}
          rowHeight={300}
          gap={6}
        >
          {projectData.map((item) => {
            const cols = item.featured ? 2 : 1;
            git;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows}>
                <img
                  {...srcset(item.img, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  sx={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: "white" }}
                      aria-label={`star ${item.title}`}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
    </div>
  );
}
export default Projects;
