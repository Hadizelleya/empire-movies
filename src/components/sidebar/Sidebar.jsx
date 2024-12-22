import React from "react";
import { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
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

export default function Sidebar({ setMobileOpen }) {
  const blueLogo =
    "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";
  const redLogo =
    "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
  const theme = useTheme();
  const classes = useStyles();
  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const demoCategories = [
    { label: "Comdey", value: "comdedy" },
    { label: "Action", value: "action" },
    { label: "Horror", value: "horror" },
    { label: "Animation", value: "animation" },
  ];

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
        {demoCategories.map(({ label, value }) => (
          <Link to={"/"} key={value} className={classes.links}>
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  alt="genre image"
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link to={"/"} key={value} className={classes.links}>
            <ListItemButton onClick={() => {}}>
              {/* <ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  alt="genre image"
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </>
  );
}
