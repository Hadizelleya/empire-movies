import { Padding } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { border, borderRadius, display, height, width } from "@mui/system";

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
      width: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100%",
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
    transition: "scale 0.3s ease",
    boxShadow: " .4em 0em .6em rgb(64,64,70)",
    ["&:hover"]: {
      scale: "1.1",
    },
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

  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: "50%",
    height: "50%",
    border: "0",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "80%",
    },
  },
  modalError: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "20px",
  },
}));
