import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { BaseMovieProps } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {
  const { addToMustWatch } = useContext(MoviesContext);

  const handleAddToMustWatch = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault(); // Prevent any default link behavior
    addToMustWatch(movie); // Add movie to context
  };

  return (
    <IconButton aria-label="add to must watch" onClick={handleAddToMustWatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;
