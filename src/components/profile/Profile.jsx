import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { useGetListQuery } from "../../services/TMBD";
import { RatedCards } from "../export";

export default function Profile() {
  const classes = useStyles();
  const { user } = useSelector(userSelector);
  const imageUrl = user?.avatar?.tmdb?.avatar_path;
  const navigate = useNavigate();
  const { data: favoriteMovies, refetch: refetchFavoritedMovies } =
    useGetListQuery({
      listName: "favorite/movies",
      id: user.id,
      session_id: localStorage.getItem("session_id"),
      page: 1,
    });

  const { data: watchlistMovies, refetch: refetchWatchlistedMovies } =
    useGetListQuery({
      listName: "watchlist/movies",
      id: user.id,
      session_id: localStorage.getItem("session_id"),
      page: 1,
    });

  useEffect(() => {
    refetchFavoritedMovies();
    refetchWatchlistedMovies();
  }, []);
  console.log(favoriteMovies);
  console.log(watchlistMovies);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Box className={classes.container}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className={classes.box}
        marginBottom={"50px"}
      >
        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"20px"}
          className={classes.innerContainer}
        >
          <div>
            <img
              className={classes.image}
              src={`https://media.themoviedb.org/t/p/w150_and_h150_face${imageUrl}`}
              alt="profile image"
            />
          </div>
          <Typography variant="h4" className={classes.title}>
            Welcome {user.name}
          </Typography>
        </Box>
        <Box>
          <Button
            color="inherit"
            onClick={logout}
            className={classes.logOutButton}
          >
            Logout &nbsp; <ExitToApp />
          </Button>
        </Box>
      </Box>
      {!favoriteMovies?.results?.length && !watchlistMovies?.results?.length ? (
        <Typography variant="h5">
          Add Favorite Movies Or Watch Lists To See Them Here!
        </Typography>
      ) : (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"50px"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <RatedCards data={favoriteMovies} title={"Favorite Movies"} />
          <RatedCards data={watchlistMovies} title={"Watchlist Movies"} />
        </Box>
      )}
    </Box>
  );
}
