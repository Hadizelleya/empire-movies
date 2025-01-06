import React from "react";
import useStyles from "./styles";
import { Typography, Grow, Tooltip, Rating } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
export default function Movie({ movie, index }) {
  const classes = useStyles();

  return (
    <Grid
      item="true"
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      className={classes.movie}
    >
      <Grow in key={index} timeout={(index + 1) * 250}>
        <Link className={classes.links} to={`/movies/${movie.id}`}>
          <img
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://picsum.photos/200/300"
            }
            alt={movie.title}
          />
          <Typography className={classes.title} variant="h6">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}
