import React, { useContext, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { ColorModeContext } from "../utils/ToggleColorMode";
import { fetchToken } from "../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  searchMovie,
  selectGenreOrCategory,
} from "../features/currentGenreOrCategory";

export default function useAlan() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setMode } = useContext(ColorModeContext);

  useEffect(() => {
    alanBtn({
      key: import.meta.env.VITE_ALAN_KEY,
      host: import.meta.env.VITE_ALAN_HOST,
      onCommand: ({ command, mode, genreOrCategory, genres, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (genre) =>
              genre.name.toLowerCase() === genreOrCategory.toLowerCase()
          );
          if (foundGenre) {
            navigate("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            navigate("/");
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === "search") {
          dispatch(searchMovie(query));
        } else if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        } else if (command === "login") {
          fetchToken();
        } else if (command === "logout") {
          localStorage.clear();
          window.location.href = "/";
        }
      },
    });
  }, []);
}
