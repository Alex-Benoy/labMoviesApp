import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { addFantasyMovie, getFantasyMovie } from "../api/tmdb-api";


const FantasyMoviePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [runtime, setRuntime] = useState("");
  const [productionCompanies, setProductionCompanies] = useState("");
  const [movies, setMovies] = useState<any[]>([]); // State for fetched movie data

  // Fetch movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getFantasyMovie(); // Call the API function
        setMovies(movieData); // Set the fetched data to state
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies(); // Fetch movie data on component mount
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure that Genres and ProductionCompanies are arrays
    const movie = {
      MovieId: Date.now(),  // Use a timestamp as a unique identifier for the movie
      Title: title,
      Overview: overview,
      Genres: genres.split(",").map((g) => g.trim()),  // Ensure Genres is an array of strings
      ReleaseDate: releaseDate,
      Runtime: parseInt(runtime),  // Ensure Runtime is a number
      ProductionCompanies: productionCompanies.split(",").map((c) => c.trim()),  // Ensure ProductionCompanies is an array of strings
    };

    try {
      const response = await addFantasyMovie(movie);
      console.log("Fantasy movie submitted:", response);

      // After successful submission, reset the form fields (if you want to clear them)
      setTitle("");
      setOverview("");
      setGenres("");
      setReleaseDate("");
      setRuntime("");
      setProductionCompanies("");

      // Trigger a page refresh to stay on the same page and simulate reloading
      window.location.reload();  // This will reload the page
    } catch (error) {
      console.error("Error submitting fantasy movie:", error);
      alert(`Failed to submit fantasy movie. Error: ${error.message}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <Grid container spacing={2}>
        {/* Left Column - Movie Submission Form */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Create Your Fantasy Movie
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Typography>Title</Typography>
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
              />

              <Typography>Overview</Typography>
              <TextField
                multiline
                rows={4}
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
              />

              <Typography>Genres (comma separated)</Typography>
              <TextField
                value={genres}
                onChange={(e) => setGenres(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
              />

              <Typography>Release Date</Typography>
              <TextField
                type="date"
                InputLabelProps={{ shrink: true }}
                value={releaseDate}
                onChange={(e) => setReleaseDate(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
              />

              <Typography>Runtime (minutes)</Typography>
              <TextField
                type="number"
                value={runtime}
                onChange={(e) => setRuntime(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
              />

              <Typography>Production Companies (comma separated)</Typography>
              <TextField
                value={productionCompanies}
                onChange={(e) => setProductionCompanies(e.target.value)}
                fullWidth
                required
                sx={{ mb: 2 }}
              />

              <Box sx={{ mt: 2 }}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Right Column - Display Retrieved Movies */}
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Retrieved Fantasy Movies
            </Typography>
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Box key={movie.MovieId} sx={{ mb: 3 }}>
                  <Typography variant="h6">{movie.Title}</Typography>
                  <Typography><strong>Genres:</strong> {movie.Genres.join(", ")}</Typography>
                  <Typography><strong>Overview:</strong> {movie.Overview}</Typography>
                  <Typography><strong>Release Date:</strong> {movie.ReleaseDate}</Typography>
                  <Typography><strong>Runtime:</strong> {movie.Runtime} minutes</Typography>
                  <Typography><strong>Production Companies:</strong> {movie.ProductionCompanies.join(", ")}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No movies available</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FantasyMoviePage;
