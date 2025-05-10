import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getActorDetails } from "../api/tmdb-api";
import ActorDetails from "../components/actordetails";
import ActorHeader from "../components/headerActor"; // import new header

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
        <>
          <ActorHeader {...actor} />
          <ActorDetails {...actor} />
        </>
      ) : (
        <h2>No actor details found.</h2>
      )}
    </>
  );
};

export default ActorDetailsPage;
