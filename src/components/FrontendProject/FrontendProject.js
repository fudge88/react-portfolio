import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useMediaQuery } from "react-responsive";

import { frontEnd } from "../../data";
import "./FrontendProject.css";

export default function Projects() {
  const isMobile = useMediaQuery({
    query: "(max-width: 899px)",
  });

  return (
    <Container>
      <h1 className="frontend-project-title" id="projects">
        Front End Projects
      </h1>
      <div className="frontend-project-text">
        <p>
          The front-end is built using a combination of technologies such as
          Hypertext Markup Language (HTML), JavaScript and Cascading Style
          Sheets (CSS).
        </p>
        <p>
          One of the main challenges of front-end development - which also goes
          by the name “client-side development” - is the rapid pace of change in
          the tools, techniques and technologies used to create the user
          experience for applications and websites.
        </p>
      </div>
      <Grid
        container
        spacing={2}
        sx={
          isMobile
            ? {}
            : {
                border: "solid 20px #363535",
                padding: "2rem",
                borderRadius: "30px",
                justifyContent: "center",
              }
        }
      >
        {frontEnd.map((item) => {
          return (
            <Grid
              item
              md={4}
              sm={12}
              xs={12}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: isMobile ? "auto" : 345,
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="200"
                  image={item.img}
                  sx={{
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "700",
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    size="small"
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      color: "#ff4500",
                      fontWeight: "700",
                    }}
                    className="btn-text"
                  >
                    Go to Website
                  </Button>
                  <Button
                    size="small"
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      color: "#000",
                      fontWeight: "700",
                    }}
                    className="btn-text"
                  >
                    See the Code
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
