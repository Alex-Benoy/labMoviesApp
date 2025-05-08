import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import Grid from "@mui/material/Grid";
import ActorCard from "../components/actorsCard";
import { ActorProps } from "../types/interfaces";
import { getPopularActors } from "../api/tmdb-api"; // Replace with your actual function

interface DiscoverActors {
  page: number;
  total_pages: number;
  total_results: number;
  results: ActorProps[];
}

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverActors, Error>(
    "actors",
    getPopularActors,
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    }
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const actors = data ? data.results : [];

  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12}>
        <h2>Popular Actors</h2>
      </Grid>
      {actors.map((actor) => (
        <Grid key={actor.id} item xs={12} sm={6} md={4} lg={3}>
          <ActorCard actor={actor} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActorsPage;
