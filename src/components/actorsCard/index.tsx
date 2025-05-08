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
  card: {
    maxWidth: 345,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Added shadow for a lifted effect
    borderRadius: "10px", // Rounded corners for the card
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease", // Smooth hover effect
    "&:hover": {
      transform: "scale(1.05)", // Scale effect on hover
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Increased shadow on hover
    },
  },
  media: {
    height: 400, // Reduced height for better image scaling
    borderRadius: "10px", // Rounded corners for the image
  },
  avatar: {
    backgroundColor: "rgb(0, 153, 255)",
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.1rem", // Slightly larger font size for actor's name
  },
  subheader: {
    fontSize: "0.9rem", // Smaller font for the 'known for' department
    color: "gray",
  },
  cardContent: {
    padding: "16px", // Padding for the content area
  },
  chip: {
    marginRight: "8px", // Spacing between chips
  },
  button: {
    marginTop: "10px", // Space between button and content
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
          <Typography variant="h6" component="p" sx={styles.title}>
            {actor.name}
          </Typography>
        }
        subheader={<Typography variant="body2" sx={styles.subheader}>{actor.known_for_department}</Typography>}
      />

      <CardMedia
        component="img"
        sx={styles.media}
        image={imagePath}
        alt={actor.name}
      />

      <CardContent sx={styles.cardContent}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" component="p">
              Popularity: {actor.popularity.toFixed(1)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardActions disableSpacing sx={styles.button}>
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
