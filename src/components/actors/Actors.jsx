import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowBack } from "@mui/icons-material";
import useStyles from "./styles";
import { useGetActorDetailsQuery } from "../../services/TMBD";
import { useGetMoviesByActorIdQuery } from "../../services/TMBD";
import { MovieList, Pagination } from "../export";

export default function Actors() {
  const classes = useStyles();
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const [page, setPage] = useState(1);
  const {
    data: actorMovies,
    isFetching: isActorMoviesFetching,
    error: isActorMoviesError,
  } = useGetMoviesByActorIdQuery({ id, page });
  const navigate = useNavigate();

  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent={"center"}>
        <CircularProgress size={"4rem"} />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ lg: 5, xl: 4 }}>
          <img
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            className={classes.image}
            alt={data?.name}
          />
        </Grid>
        <Grid
          container
          size={{ lg: 7, xl: 8 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify">
            {data?.biography}
          </Typography>
          <Box
            marginTop={"2rem"}
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            >
              Go Back
            </Button>
          </Box>
        </Grid>
        <Box width={"100%"} margin={"2rem 0"}>
          <Typography variant="h2" gutterBottom align="center">
            Movies
          </Typography>
          {isActorMoviesFetching ? (
            <CircularProgress size={"2rem"} />
          ) : isActorMoviesError ? (
            <Typography variant="h3" align="center">
              Something Wrong Happend...
            </Typography>
          ) : (
            <Box marginTop={"3rem"}>
              <MovieList movies={actorMovies} numberOfMovies={12} />
              <Pagination
                currentPage={page}
                setPage={setPage}
                totalPages={actorMovies.total_pages}
              />
            </Box>
          )}
        </Box>
      </Grid>
    </>
  );
}
