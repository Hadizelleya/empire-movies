import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: "230px",
    overflow: "hidden",
    whiteSpace: "none",
    textWrap: "nowrap",
    marginTop: "10px",
    marginBottom: 0,
    textAlign: "center",
  },
  links: {
    alignItems: "center",
    fontWeight: "bolder",
    textDecoration: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  image: {
    borderRadius: "20px",
    height: "300px",
    marginBottom: "10px",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));
