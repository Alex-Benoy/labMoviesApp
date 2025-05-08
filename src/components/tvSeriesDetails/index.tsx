// components/tvSeriesDetails/index.tsx
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { TVSeriesDetailsProps } from "../../types/interfaces";
import MovieReviews from "../movieReviews"; // Or create TVSeriesReviews

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const TVSeriesDetails: React.FC<TVSeriesDetailsProps> = (series) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {series.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Genres" sx={styles.chipLabel} color="primary" />
        </li>
        {series.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={styles.chipSet}>
        <Chip icon={<AccessTimeIcon />} label={`${series.episode_run_time[0] || "?"} min.`} />
        <Chip label={`Seasons: ${series.number_of_seasons}`} />
        <Chip label={`Episodes: ${series.number_of_episodes}`} />
        <Chip label={`First Aired: ${series.first_air_date}`} />
        <Chip icon={<StarRate />} label={`${series.vote_average} (${series.vote_count})`} />
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* <MovieReviews {...series} /> Optionally create <TVSeriesReviews /> */}
      </Drawer>
    </>
  );
};

export default TVSeriesDetails;
