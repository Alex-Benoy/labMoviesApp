import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ActorProps } from "../../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const ActorHeader: React.FC<ActorProps> = (actor) => {
  const favouritesJSON = localStorage.getItem("favouriteActors");
  const favourites = favouritesJSON ? JSON.parse(favouritesJSON) : [];

  const isFavourite = favourites.some((fav: any) => fav.id === actor.id);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {actor.name}{" "}
        {/* {actor.homepage && (
          <a href={actor.homepage} target="_blank" rel="noopener noreferrer">
            <HomeIcon color="primary" fontSize="large" />
          </a>
        )} */}
        {/* {isFavourite && (
          <FavoriteIcon color="error" fontSize="large" sx={{ ml: 1 }} />
        )} */}
        {/* <br />
        <span>{actor.known_for_department}</span> */}
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;
