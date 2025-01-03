// filepath: /C:/Users/hadi_/Desktop/jsmastery course/Filmpire movies/src/services/TMBD.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = import.meta.env.VITE_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // get movies by genre
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${apiKey}`,
    }),
    // get movies by [type]
    getMovies: builder.query({
      query: () => `movie/popular?api_key=${apiKey}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
