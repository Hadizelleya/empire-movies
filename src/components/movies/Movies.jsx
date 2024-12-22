// filepath: /C:/Users/hadi_/Desktop/jsmastery course/Filmpire movies/src/components/movies/Movies.jsx
import React from "react";
import { useGetMoviesQuery } from "../../services/TMBD";

export default function Movies() {
  const { data } = useGetMoviesQuery();
  console.log(data);
  return <h1>Movies</h1>;
}
