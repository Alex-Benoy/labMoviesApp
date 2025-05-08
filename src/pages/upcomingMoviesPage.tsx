import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import MovieFilterUI, { genreFilter, titleFilter } from "../components/movieFilterUI"; // Import filters
import useFiltering from "../hooks/useFiltering";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

// Filter setup
const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};

const genreFiltering = {
  name: "genre",
  value: "0", // Default to "All" genre
  condition: genreFilter,
};

const UpcomingMoviesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    "upcoming",
    getUpcomingMovies,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes: prevents refetching within this window
      cacheTime: 1000 * 60 * 10, // 10 minutes: keeps data in cache for 10 minutes even if unused
    }
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering([titleFiltering, genreFiltering]);

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet = filterValues.map((filter) =>
      filter.name === type ? changedFilter : filter
    );
    setFilterValues(updatedFilterSet);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  // Save the favourites to localStorage
  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  return (
    <>
      <PageTemplate
        title="Upcoming Movies"
        movies={displayedMovies} // Use filtered movies
        action={(movie: BaseMovieProps) => <AddToMustWatchIcon {...movie} />}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default UpcomingMoviesPage;
