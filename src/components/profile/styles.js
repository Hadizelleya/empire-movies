import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    margin: "40px",
  },
  box: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "10px",
    },
  },
  innerContainer: {
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  image: {
    width: "100%",
    borderRadius: "50%",
  },
  title: {
    marginLeft: "200px",
    width: "100%",
  },
  logOutButton: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
}));
