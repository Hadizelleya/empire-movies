import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Movies,
  MovieInformation,
  Profile,
  Navbar,
  Actors,
} from "./components/export.js";
import useStyles from "./styles";
import useAlan from "./components/Alan.jsx";
import { useRef } from "react";

function App() {
  const classes = useStyles();
  useAlan();
  const alanBtnContainer = useRef();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.sidebar}>
        <Navbar />
      </div>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/approved" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
}

export default App;
