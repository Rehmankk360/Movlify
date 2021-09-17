import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
root: {
},
thumbnail: {
    transition: '1500ms',
    width: '100%',
    cursor: 'pointer',
    "&:hover":{
        transform: 'scale(1.2)'
    }
},
thumbnailWrapper: {
  overflow: "hidden",
  position: "relative"
},
imgButtonWrapper: {
    position: "absolute",
    zIndex: 3,
    left: "0%",
    bottom: "40px",
    width: '100%'
},
anchor: {
    width:"100%"
},
imgButton:{
    transition: '600ms',
    display: 'block',
    margin: '0 auto',
    color: "#fff",
    fontSize: "25px",
    backgroundColor: "#a81d24",
    marginBottom: "10px",
    paddingLeft: "45px",
    paddingRight: '45px',
    textDecoration: "none !important"
},
})

export default useStyles