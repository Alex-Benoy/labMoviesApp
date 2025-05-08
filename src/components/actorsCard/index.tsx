import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { ActorProps } from "../../types/interfaces"; // Ensure it's exported from here
import img from "../../images/film-poster-placeholder.png";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(0, 153, 255)",
  },
};

interface ActorCardProps {
  actor: ActorProps;
  action?: (a: ActorProps) => React.ReactNode;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  const imagePath = actor.profile_path
    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
    : img;

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          <Avatar sx={styles.avatar}>
            <PersonIcon />
          </Avatar>
        }
        title={
          <Typography variant="h6" component="p">
            {actor.name}
          </Typography>
        }
        subheader={actor.known_for_department}
      />

      <CardMedia
        component="img"
        sx={styles.media}
        image={imagePath}
        alt={actor.name}
      />

      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              Popularity: {actor.popularity.toFixed(1)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing>
        {action && action(actor)}

        <Link to={`/actors/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
