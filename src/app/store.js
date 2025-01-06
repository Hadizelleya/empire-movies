import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMBD";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
