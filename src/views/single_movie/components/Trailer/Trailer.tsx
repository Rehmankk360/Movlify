import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from './styles'

interface props {
  ytId: any;
  summary: any;
}
export default function Trailer(props: props) {
  const { ytId, summary } = props;
  const styles = useStyles()
  console.log(summary);
  return (
    <Box className={styles.trailer}>
        <Box className={styles.iframeWrapper} >

      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${ytId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        />

        </Box>
      <Box style={{ textAlign: "center" }}>
        <Typography variant={"h4"}>summary</Typography>
        <Typography variant={"h6"} className={styles.summary}>
          {summary}
        </Typography>
      </Box>
    </Box>
  );
}
