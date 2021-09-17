import React from "react";
import { displayStats } from "../../../../../utils/helpers";
import { Typography } from "@material-ui/core";
import { useTorrentStats } from "../../../../../hooks";

function Progress(props) {
  const { detailsClass, torrent } = props;
  const { downloadSpeed, progress } = useTorrentStats(torrent);
  return (
    <div className={detailsClass}>
      {
        <Typography variant={"h6"}>
          <span className="themeRed">DownloadSpeed:</span>
          {displayStats(downloadSpeed)}
          Mb/s
        </Typography>
      }
      {
        <Typography variant={"h6"}>
          <span className="themeRed">Progress: </span>
          {Math.floor(progress * 100)}%
        </Typography>
      }
    </div>
  );
}

export default Progress;
