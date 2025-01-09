import React from "react";
import { Typography, Box } from "@mui/material";
import { Movie } from "../export";
import useStyles from "./styles";
export default function RatedCards({ title, data }) {
  const classes = useStyles();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h4" fontWeight={"bold"} gutterBottom>
        {title}
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} className={classes.container}>
        {data?.results?.map((movie, index) => (
          <Movie key={movie.id} movie={movie} index={index} />
        ))}
      </Box>
    </Box>
  );
}
