import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite"; // ❤️ red heart icon
import { MovieDetailsProps } from "../../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
  // Get favourites from localStorage
  const favouritesJSON = localStorage.getItem("favourites");
  const favourites = favouritesJSON ? JSON.parse(favouritesJSON) : [];

  // Check if current movie is in favourites
  const isFavourite = favourites.some((fav: any) => fav.id === movie.id);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {movie.title}{" "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>
        {isFavourite && (
          <FavoriteIcon color="error" fontSize="large" sx={{ ml: 1 }} />
        )}
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
