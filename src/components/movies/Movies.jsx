// filepath: /C:/Users/hadi_/Desktop/jsmastery course/Filmpire movies/src/components/movies/Movies.jsx
import React, { useState } from "react";
import { useGetMoviesQuery } from "../../services/TMBD";
import { MovieList, Pagination } from "../export";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export default function Movies() {
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const [page, setPage] = useState(1);
  const lg = useMediaQuery((theme) => theme.breakpoints.only("lg"));
  const numberOfMovies = lg ? 16 : 18;

  const { data, isFetching, error } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });
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
        <>
          <div>
            <MovieList
              movies={data}
              numberOfMovies={numberOfMovies}
              error={error}
            />
          </div>
          <Pagination
            currentPage={page}
            setPage={setPage}
            totalPages={data?.total_pages}
          />
        </>
      )}
    </div>
  );
}
