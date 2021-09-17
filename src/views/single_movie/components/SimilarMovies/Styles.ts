import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
thumbnail: {
    width:"100%"
},
similarMovies:{
    [theme.breakpoints.down('lg')]: {
        marginTop: "20px"
    }
}
}))

export default useStyles