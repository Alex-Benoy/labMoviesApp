import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "../components/reviewForm/styles"; // Keep using your existing styles

const FantasyMoviePage: React.FC = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [runtime, setRuntime] = useState("");
  const [productionCompanies, setProductionCompanies] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const movie = {
      title,
      overview,
      genres: genres.split(",").map((g) => g.trim()),
      releaseDate,
      runtime: parseInt(runtime),
      productionCompanies: productionCompanies.split(",").map((c) => c.trim()),
    };

    navigate("/fantasy-movie/details", { state: { movie } });
  };

  return (
    <Box sx={styles.root}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Create Your Fantasy Movie
        </Typography>
        <Box component="form" sx={styles.form} onSubmit={handleSubmit}>
          <Typography>Title</Typography>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={styles.textField}
            required
          />

          <Typography>Overview</Typography>
          <TextField
            multiline
            rows={4}
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
            sx={styles.textField}
            required
          />

          <Typography>Genres (comma separated)</Typography>
          <TextField
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
            sx={styles.textField}
            required
          />

          <Typography>Release Date</Typography>
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            sx={styles.textField}
            required
          />

          <Typography>Runtime (minutes)</Typography>
          <TextField
            type="number"
            value={runtime}
            onChange={(e) => setRuntime(e.target.value)}
            sx={styles.textField}
            required
          />

          <Typography>Production Companies (comma separated)</Typography>
          <TextField
            value={productionCompanies}
            onChange={(e) => setProductionCompanies(e.target.value)}
            sx={styles.textField}
            required
          />

          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" color="primary" sx={styles.submit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default FantasyMoviePage;
