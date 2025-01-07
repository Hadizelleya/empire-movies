import React, { useEffect, useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import useStyles from "./styles";
import { Search, Sidebar } from "../export";
import { createSessionId, fetchToken, moviesApi } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth";

export default function Navbar() {
  const { isAuthenticated, user } = useSelector(userSelector);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 600px)");
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = localStorage.getItem("request_token");
  const localStorageSessionId = localStorage.getItem("session_id");

  useEffect(() => {
    const logInUser = async () => {
      if (token) {
        if (localStorageSessionId) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${localStorageSessionId}`
          );
          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };
    logInUser();
  }, [token]);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {
                setMobileOpen((prev) => !prev);
              }}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: "1" }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                onClick={() => {}}
                LinkComponent={Link}
                to={`/profile/${user.id}`}
                className={classes.linkButton}
              >
                {!isMobile && <h5>{user.name} &nbsp;</h5>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src={`https://media.themoviedb.org/t/p/w150_and_h150_face${user.avatar.tmdb.avatar_path}`}
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
        <div>
          <nav className={classes.drawer}>
            {isMobile ? (
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen((prev) => !prev)}
                classes={{ paper: classes.drawerPaper }}
                ModalProps={{ keepMounted: true }}
              >
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
            ) : (
              <Drawer
                classes={{ paper: classes.drawerPaper }}
                variant="permanent"
                open
              >
                <Sidebar setMobileOpen={setMobileOpen} />
              </Drawer>
            )}
          </nav>
        </div>
      </AppBar>
    </>
  );
}
