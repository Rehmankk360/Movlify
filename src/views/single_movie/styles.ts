import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: any)=> ({
MovieStuff: {
    padding: "0 0 170px 0",
},
root: {
paddingTop: "170px"
},
container: {
    maxWidth: "1520px"
},
MovieThumbnailWrapper:{
    maxWidth: "500px",
    [theme.breakpoints.down('md')]: {
        // maxWidth: "100%",
    }
}
}))

export default useStyles