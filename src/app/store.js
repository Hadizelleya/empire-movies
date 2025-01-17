import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMBD";
import genreOrCategoryReducer from "../features/currentGenreOrCategory";
import userReducer from "../features/auth";

export const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
