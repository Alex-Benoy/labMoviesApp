// pages/tvHomePage.tsx
import React from "react";
import TVSeriesListPageTemplate from "../components/templateTVSeriesListPage";
import { getTVSeries } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';
import { DiscoverTVSeries, TVSeriesProps } from "../types/interfaces";

const TVHomePage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverTVSeries, Error>("discoverTV", getTVSeries);

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const series = data ? data.results : [];

  return (
    <TVSeriesListPageTemplate
      title="Discover TV Series"
      series={series}
      action={(series: TVSeriesProps) => <AddToFavouritesIcon title={""} budget={0} homepage={undefined} imdb_id={""} original_language={""} release_date={""} popularity={0} tagline={""} runtime={0} revenue={0} vote_count={0} {...series} />}
    />
  );
};

export default TVHomePage;
