import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import useStyles from "./styles";
interface props{
    fullScreen: any
}
export default function Loading(props: props) {
    const {fullScreen} = props
  const styles = useStyles(props);
  return (
    <Box 
    className={styles.loadingWrapper}
    style={{height:fullScreen?'100vh':'100%'}}
     >
      <CircularProgress 
      className={styles.loading} 
      size={100} />
    </Box>
  );
}
