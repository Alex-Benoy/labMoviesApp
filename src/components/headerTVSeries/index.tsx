// components/headerTVSeries/index.tsx
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TVSeriesDetailsProps } from "../../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const TVSeriesHeader: React.FC<TVSeriesDetailsProps> = (series) => {
  const favouritesJSON = localStorage.getItem("favouritesTV");
  const favourites = favouritesJSON ? JSON.parse(favouritesJSON) : [];

  const isFavourite = favourites.some((fav: any) => fav.id === series.id);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {series.name}{" "}
        {series.homepage && (
          <a href={series.homepage}>
            <HomeIcon color="primary" fontSize="large" />
          </a>
        )}
        {isFavourite && (
          <FavoriteIcon color="error" fontSize="large" sx={{ ml: 1 }} />
        )}
        <br />
        <span>{`${series.tagline || ""}`} </span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TVSeriesHeader;
