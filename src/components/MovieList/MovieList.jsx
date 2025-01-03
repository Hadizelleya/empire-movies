import React from "react";
import Grid from "@mui/material/Grid2";
import useStyles from "./styles";
import { Movie } from "../export";
export default function MovieList({ movies }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, index) => (
        <Movie key={index} index={index} movie={movie} />
      ))}
    </Grid>
  );
}
