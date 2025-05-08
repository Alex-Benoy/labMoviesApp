// pages/tvSeriesDetailsPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import TVSeriesDetails from "../components/tvSeriesDetails";
import PageTemplate from "../components/templateTVSeriesPage";
import { getTVSeriesDetails } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { TVSeriesDetailsProps } from "../types/interfaces";

const TVSeriesDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data: series, error, isLoading, isError } = useQuery<TVSeriesDetailsProps, Error>(
    ["tvseries", id],
    () => getTVSeriesDetails(id || "")
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <>
      {series ? (
        <PageTemplate series={series}>
          <TVSeriesDetails {...series} />
        </PageTemplate>
      ) : (
        <p>Waiting for series details...</p>
      )}
    </>
  );
};

export default TVSeriesDetailsPage;
