import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";
import { Typography, Button, Box } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

export default function Profile() {
  const classes = useStyles();
  const { user } = useSelector(userSelector);
  const imageUrl = user?.avatar?.tmdb?.avatar_path;
  const navigate = useNavigate();
  const favoriteMovies = [];

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
      {!favoriteMovies.length ? (
        <Typography variant="h5">
          Add Favorite Movies Or Watch Lists To See Them Here!
        </Typography>
      ) : (
        <Box> here are Your Favorite movies {favoriteMovies}</Box>
      )}
    </Box>
  );
}
