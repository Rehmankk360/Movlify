import { makeStyles } from "@material-ui/core";


 const useStyles = makeStyles((theme)=>({
    banner: {
        
        },
          
    banner_content: {
        padding: "170px 0 73px 0",
        position: "relative",
        zIndex: '2'
    },
    summary: {
      marginBottom: "20px"  
    },
    background: {
        position: "absolute",
        height: '100%',
        width: "100%",
        left: 0,
        right: 0
    },
    movieImage: {
        maxHeight: "700px",
        height: "100%"

    },
    title: {
        fontSize: "3.6rem",
        marginBottom:'20px'
    },
    buttons: {
        transition: "500ms",
    color: '#fff',
    fontSize: '20px',
    marginRight: '24px',
    padding: '2px 16px',
    backgroundColor: '#a81d24',
    '&:hover':{
        backgroundColor: '#fff',
        color: '#000'
    }
    },
    thumbnail: {
        width: "100%"
    },
    thumbnailWrapper: {
    }
})) 
export default useStyles