import React, { useState } from "react";
import {
  Paper,
  Typography,
  Chip,
//   Avatar,
  Fab,
  Drawer,
  Grid,
//   Box,
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import StarRateIcon from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ActorDetailsProps } from "../../types/interfaces";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  avatarImage: {
    width: "80%",
    borderRadius: "1rem",
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const ActorDetails: React.FC<ActorDetailsProps> = (actor) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* <Typography variant="h4" component="h2" gutterBottom align="center">
        {actor.name}
      </Typography> */}

      <Grid container spacing={4}>
        {/* Left: Image */}
        <Grid item xs={12} md={4}>
          <img
            src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
            alt={actor.name}
            style={styles.avatarImage}
          />
        </Grid>

        {/* Right: Biography and Info */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" component="h3" gutterBottom>
            Biography
          </Typography>
          <Typography variant="body1" paragraph>
            {actor.biography || "No biography available."}
          </Typography>

          <Paper component="ul" sx={styles.chipSet}>
            <Chip
              icon={<CakeIcon />}
              label={actor.birthday ? `Born: ${actor.birthday}` : "Birthdate unknown"}
              sx={styles.chipLabel}
            />
            {actor.place_of_birth && (
              <Chip
                label={`From: ${actor.place_of_birth}`}
                sx={styles.chipLabel}
                color="primary"
              />
            )}
            <Chip
              icon={<StarRateIcon />}
              label={`Popularity: ${actor.popularity.toFixed(1)}`}
              sx={styles.chipLabel}
              color="secondary"
            />
          </Paper>
        </Grid>
      </Grid>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        Credits
      </Fab>

      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Typography variant="h6" sx={{ p: 3 }}>
          Credits and other info coming soon...
        </Typography>
      </Drawer>
    </>
  );
};

export default ActorDetails;
