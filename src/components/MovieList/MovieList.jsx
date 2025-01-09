import React from "react";
import Grid from "@mui/material/Grid2";
import useStyles from "./styles";
import { Movie } from "../export";
export default function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const classes = useStyles();
  const startFrom = excludeFirst ? 1 : 0;
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, index) => (
        <Movie key={index} index={index} movie={movie} />
      ))}
    </Grid>
  );
}
