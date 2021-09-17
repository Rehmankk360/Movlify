import { alpha, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header_wrapper: {
    alignItems: "center",
    marginTop: "20px"
  },
  background: {
    background:
      "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);",
    boxShadow: "none",
  },
  containerFluid: {
    maxWidth: "1700px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    maxHeight: "100px",
    width: "100%"
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default useStyles;
