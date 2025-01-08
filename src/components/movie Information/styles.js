import { Padding } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "no-wrap",
    margin: "10px 0 !important",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "wrap",
    },
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgb(64,64,70)",
    width: "70%",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
      height: "400px",
      marginBottom: "30px",
    },
  },

  genresContainer: {
    display: "flex",
    margin: "10px 0 !important",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  genreImage: {
    filter: theme.palette.mode === "dark" && "invert(1)",
    marginRight: "10px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5rem 1rem",
    },
  },
  castImage: {
    width: "100%",
    maxWidth: "8em",
    height: "9em",
    borderRadius: "10px",
    objectFit: "cover",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "10px",
    },
  },
}));
