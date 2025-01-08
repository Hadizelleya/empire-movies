import React from "react";
import { useGetMovieQuery } from "../../services/TMBD";
import {
  Modal,
  Typography,
  Button,
  ButtonGroup,
  Box,
  CircularProgress,
  useMediaQuery,
  Rating,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Movie as MovieIcon,
  Theaters,
  Language,
  PlusOne,
  Favorite,
  FavoriteBorderOutlined,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import axios from "axios";
import useStyles from "./styles";
import genreIcons from "../../assets/genres";

export default function MovieInformation() {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const classes = useStyles();
  const dispatch = useDispatch();
  const isMovieFavorited = false;
  const isMovieWatchlisted = false;
  console.log(data);
  const addToFavorites = () => {};
  const addToWatchlist = () => {};
  if (isFetching) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress size={"8rem"} />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Link to={"/"}>Something Has Gone Wrong... Please Go Back</Link>
      </Box>
    );
  }
  return (
    <Grid container gap={"40px"} className={classes.containerSpaceAround}>
      <Grid
        size={{ sm: 12, lg: 4, md: 7 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-start"}
      >
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt={data?.title}
        />
      </Grid>
      <Grid container direction={"column"} size={{ lg: 7 }}>
        <Typography
          className={classes.title}
          variant="h3"
          align="center"
          gutterBottom
        >
          {data?.title} ({data?.release_date.split("-")[0]})
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>
        <Grid container className={classes.containerSpaceAround}>
          <Box display={"flex"} align={"center"}>
            <Rating readOnly value={data?.vote_average / 2} />
            <Typography
              gutterBottom
              variant="subtitle2"
              color="gray"
              style={{ marginLeft: "10px" }}
            >
              {data.vote_average} / 10
            </Typography>
          </Box>
          <Typography variant="h6" align="center" gutterBottom>
            {data?.runtime} min{" "}
            {data?.spoken_languages.length > 0
              ? `/ ${data.spoken_languages[0].name}`
              : ""}
          </Typography>
        </Grid>
        <Grid className={classes.genresContainer}>
          {data?.genres?.map((genre) => (
            <Link
              to={"/"}
              className={classes.links}
              onClick={() => {
                dispatch(selectGenreOrCategory(genre.id));
              }}
              key={genre.id}
            >
              <img
                src={genreIcons[genre.name.toLowerCase()]}
                className={classes.genreImage}
                alt="genre image"
                height={30}
              />
              <Typography color="textPrimary" variant="subtitle1">
                {genre.name}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Typography variant="h5" style={{ marginTop: "10px" }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "2rem" }}>
          {data?.overview}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Top Cast
        </Typography>
        <Grid container spacing={2}>
          {data &&
            data?.credits?.cast
              ?.map(
                (character) =>
                  character.profile_path && (
                    <Grid
                      size={{ xs: 4, md: 2 }}
                      component={Link}
                      to={`/actors/${character.id}`}
                      style={{ textDecoration: "none" }}
                      key={character.id}
                      textAlign={"center"}
                    >
                      <img
                        className={classes.castImage}
                        src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                        alt={character.name}
                      />
                      <Typography color="textPrimary">
                        {character?.name}
                      </Typography>
                      <Typography color="textSecondary">
                        {character?.character.split("/")[0]}
                      </Typography>
                    </Grid>
                  )
              )
              .slice(0, 6)}
        </Grid>
        <Grid container style={{ marginTop: "2rem" }}>
          <div className={classes.buttonsContainer}>
            <Grid size={{ xs: 12, sm: 6 }} className={classes.buttonsContainer}>
              <ButtonGroup size="small" variant="outlined">
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data?.homepage}
                  endIcon={<Language />}
                >
                  {data.homepage ? "Website" : "No Website"}
                </Button>
                <Button
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${data?.imdb_id}`}
                  endIcon={<MovieIcon />}
                >
                  IMDB
                </Button>
                <Button onClick={() => {}} href={`#`} endIcon={<Theaters />}>
                  Trailer
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} className={classes.buttonsContainer}>
              <ButtonGroup size="medium" variant="outlined">
                <Button
                  onClick={addToFavorites}
                  endIcon={
                    isMovieFavorited ? <Favorite /> : <FavoriteBorderOutlined />
                  }
                >
                  {isMovieFavorited ? "Unfavorite" : "Favorite"}
                </Button>

                <Button
                  onClick={addToWatchlist}
                  endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
                >
                  watchlist
                </Button>
                <Button
                  endIcon={<ArrowBack />}
                  sx={{ borderColor: "primary.main" }}
                >
                  <Typography
                    component={Link}
                    color="inherit"
                    variant="subtitle2"
                    style={{ textDecoration: "none" }}
                  >
                    Back
                  </Typography>
                </Button>
              </ButtonGroup>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
