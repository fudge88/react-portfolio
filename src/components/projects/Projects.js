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

import { projectData } from "../../data";

export default function Projects() {
  const isMobile = useMediaQuery({
    query: "(max-width: 899px)",
  });

  return (
    <Container>
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
        {projectData.map((item) => {
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
              <Card sx={{ width: isMobile ? "auto" : 345 }}>
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
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Url
                  </Button>
                  <Button
                    size="small"
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo Url
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
