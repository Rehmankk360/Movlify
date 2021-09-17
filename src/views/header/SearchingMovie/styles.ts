import { alpha, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
  wrapper: {
    [theme.breakpoints.down('xs')]: {

      width:'100%'
    }
  },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto",
        },
      },
      links: {
          display: "block",
          color: "#fff",
          transition: "800ms",
          marginTop: "10px",
          '&:hover': {
            backgroundColor: "rgb(53 48 48)"
          }

      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    inputRoot: {
        color: "inherit",
        position: 'relative'
      },
      inputInput: {
        borderRadius: "50px",
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "40ch",
          "&:focus": {
            width: "50ch",
          },
        },
      },
      thumbnail: {
          maxHeight: "150px",
      },
      searchContainer: {
        alignItems:'center',
        justifyContent:'flex-start',
      
      },
      listItem: {
        position: "relative",
        "&:after": {
          zIndex: -1,
          opacity: 0.7,
            backgroundColor: "rgb(34,31,31)",
            position:"absolute",
            content: "''",
            height: '100%',
            width: "100%",
            top: 0,
            left:0
        }
      },
      searchWrapper: {
          zIndex: 2,
          maxHeight: "600px",
          overflow: 'auto',
        alignItems:'center',
        justifyContent:'flex-start',
        position:'absolute',
        
        top: 50,
        left: 0,
        width:"100%",
        height:'fit-content',
        paddingRight: "10px",
        
      }
})
)
export default useStyles