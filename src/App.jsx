import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Movies,
  MovieInformation,
  Profile,
  Navbar,
  Actors,
} from "./components/export.js";
function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
