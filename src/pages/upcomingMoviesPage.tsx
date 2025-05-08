import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api"; // <--- CLEANED UP

const UpcomingMoviesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    "upcoming",
    getUpcomingMovies
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data ? data.results : [];
  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie: BaseMovieProps) => <AddToFavouritesIcon {...movie} />}
    />
  );
};

export default UpcomingMoviesPage;
