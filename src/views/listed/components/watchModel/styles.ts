import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "#221f1f",
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    links: {
        display: 'block',
        textDecoration: "none",
        color: "#fff",
        padding: '8px 37px',
        border: '1px solid grey',
        marginLeft: '10px',
        fontSize:'20px',
        flexWrap: "wrap"
    },
    download: {
        marginBottom: "20px"
    },
    linksWrapper: {
        display: "flex",
        justifyContent: "space-between"
    }
  }));
  export default useStyles