import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "./styles";
export default function FeaturedMovie({ movie }) {
  const classes = useStyles();

  if (!movie) return null;
  return (
    <Box
      component={Link}
      to={`/movies/${movie.id}`}
      className={classes.featuredCardContainer}
    >
      <Card className={classes.card} classes={{ root: classes.cardRoot }}>
        <CardMedia
          image={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          title={movie.title}
          className={classes.cardMedia}
        />
        <Box padding={"20px"}>
          <CardContent
            className={classes.cardContent}
            classes={{ root: classes.cardContentRoot }}
          >
            <Typography variant="h3" gutterBottom>
              {movie.title}
            </Typography>
            <Typography variant="body1">{movie.overview}</Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
