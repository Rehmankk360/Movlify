import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme: any)=>({
    title: {
        marginBottom: '30px',
        fontWeight: 700
    }, 
    detailsWrapper: {
        [theme.breakpoints.down('md')]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    downloadLink:{
        textDecoration: "none",
        color: "#fff",
        padding: '3px 15px',
        border: '1px solid grey',
        marginLeft: '10px',
        fontSize:'14px',
        
    },
    download: {
        marginBottom: "10px"
    },
    genres: {
        marginBottom: '20px',
        fontWeight: 700
    },
    web: {
        color: "#9C969C",
        fontSize: "17px",
        marginBottom: "10px"
    },
    sizes: {
        color: "#9C969C",
        fontSize: "20px",
    
    },
    sizeTag: {
        marginRight: "15px",
    },
    icon: {
    height: "50px",
    width: '50px',
    color: "#a81d24"
    },
    iconWrapper: {
        display: "flex",
        maxWidth: "163px",
        width: "70%",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:"10px"
    }
}))
export default useStyles