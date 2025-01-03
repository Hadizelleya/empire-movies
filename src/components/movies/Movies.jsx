// filepath: /C:/Users/hadi_/Desktop/jsmastery course/Filmpire movies/src/components/movies/Movies.jsx
import React from "react";
import { useGetMoviesQuery } from "../../services/TMBD";
import { MovieList } from "../export";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";

export default function Movies() {
  const { data, isFetching, error } = useGetMoviesQuery();
  console.log(data);
  return (
    <div>
      {isFetching ? (
        <Box display={"flex"} justifyContent={"center"}>
          <CircularProgress size={"4rem"} />
        </Box>
      ) : !data.results.length ? (
        <Box display={"flex"} alignItems={"center"} mt={"20px"}>
          <Typography variant="h4">
            No Movies that match that name.
            <br />
            PLease search for something else.
          </Typography>
        </Box>
      ) : error ? (
        `An error has occured ${error.message}`
      ) : (
        <div>
          <MovieList movies={data} error={error} />
        </div>
      )}
    </div>
  );
}
