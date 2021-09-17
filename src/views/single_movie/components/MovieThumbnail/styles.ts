import {  makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    thumbnail: {
        width:"100%",
        marginBottom: "20px",
    },
    thumbnailButton:{
        display: "block",
        backgroundColor: "#a81d24",
        color: "#fff",
        width: "100%",
        fontSize: '20px',
        "&:hover": {
        backgroundColor: "#fff",
        color: '#000'
        }
    },
})

export default useStyles