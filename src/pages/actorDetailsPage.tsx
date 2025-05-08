// pages/actorDetailsPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getActorDetails } from "../api/tmdb-api"; // You need to implement this
import ActorDetails from "../components/actordetails";

const ActorDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actorDetails", id],
    () => getActorDetails(id!),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <Spinner />;

  if (isError) return <h2>{(error as Error).message}</h2>;

  return (
    <>
      {actor ? (
        <ActorDetails {...actor} />
      ) : (
        <h2>No actor details found.</h2>
      )}
    </>
  );
};

export default ActorDetailsPage;
