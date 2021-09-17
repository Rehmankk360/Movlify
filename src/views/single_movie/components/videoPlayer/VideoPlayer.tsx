import React from "react";
import Progress from "./progress/Progress";
import { useTorrent } from "../../../../hooks";
import useStyles from "./style";

interface props {
  url: any;
}
export default function VideoPlayer(props: props) {
  const { url } = props;
  const styles: any = useStyles();
  const {files}: any = useTorrent(url)
if(files) files.appendTo('#streamVideo')
  return (
    <div id="streamVideo" className={styles.streamVideo}>
     {files&&<Progress
     detailsClass={styles.details}
     torrent={files}
     />}
    </div>
  );
}
