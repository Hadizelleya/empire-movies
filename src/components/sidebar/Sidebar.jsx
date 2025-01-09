import React from "react";
import { useEffect } from "react";
import {
  Divider,
  List,
  ListItemText,
  ListSubheader,
  Box,
  CircularProgress,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useGetGenresQuery } from "../../services/TMBD";
import genreIcons from "../../assets/genres";
import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

export default function Sidebar({ setMobileOpen }) {
  const { data, error, isFetching } = useGetGenresQuery();
  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    setMobileOpen(false);
  }, [selectGenreOrCategory]);

  return (
    <>
      <Link to={"/"} className={classes.imageLink}>
        <img
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="FILMPIRE logo"
          className={classes.image}
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link to={"/"} key={value} className={classes.links}>
            <ListItemButton
              onClick={() => {
                dispatch(selectGenreOrCategory(value));
              }}
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImages}
                  alt="genre image"
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display={"flex"} justifyContent={"center"}>
            <CircularProgress size={"2rem"} />
          </Box>
        ) : (
          data.genres.map(({ name, id }) => (
            <Link to={"/"} key={id} className={classes.links}>
              <ListItemButton
                onClick={() => {
                  dispatch(selectGenreOrCategory(id));
                }}
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImages}
                    alt="genre image"
                    height={30}
                  />
                </ListItemIcon>

                <ListItemText primary={name} />
              </ListItemButton>
            </Link>
          ))
        )}
      </List>
    </>
  );
}
