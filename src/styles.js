import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
  },
  toolbar: {
    height: "70px",
  },
  sidebar: {
    [theme.breakpoints.up("md")]: {
      width: "240px",
      flexShrink: 0,
    },
  },
}));
