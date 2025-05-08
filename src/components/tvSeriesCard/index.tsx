// components/tvSeriesCard/index.tsx
import React, { useContext } from "react";
import {
  Card, CardActions, CardContent, CardMedia, CardHeader,
  Button, Typography, Grid, Avatar
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
import { TVSeriesProps } from "../../types/interfaces";
import { TVSeriesContext } from "../../contexts/tvSeriesContext"; // Ensure this file exists at the specified path
import img from '../../images/film-poster-placeholder.png';

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(0, 153, 255)",
  },
};

interface TVSeriesCardProps {
  series: TVSeriesProps;
  action: (s: TVSeriesProps) => React.ReactNode;
}

const TVSeriesCard: React.FC<TVSeriesCardProps> = ({ series, action }) => {
  const { favourites } = useContext(TVSeriesContext);
  const isFavourite = favourites.includes(series.id);

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          isFavourite ? (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={<Typography variant="h5">{series.name}</Typography>}
      />
      <CardMedia
        sx={styles.media}
        image={series.poster_path ? `https://image.tmdb.org/t/p/w500/${series.poster_path}` : img}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6"><CalendarIcon fontSize="small" /> {series.first_air_date}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6"><StarRateIcon fontSize="small" /> {series.vote_average}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        {action(series)}
        <Link to={`/tv/${series.id}`}>
          <Button variant="outlined">More Info...</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default TVSeriesCard;
