import React, { useState, useEffect } from "react";
import WebTorrent from "webtorrent";
const useTorrent = (torrentId: string) => {
  const [files, setFiles] = useState(null);
  const client = new WebTorrent();
  const fetchVideo = async () => {
    client.add(torrentId, (torrent) => {
      const file: any = torrent.files.find(function (file) {
        let mp4 = file.name.endsWith(".mp4");
        let mkv = file.name.endsWith(".mkv");
        if(mp4) return mp4
        return mkv
      });
      setFiles(file)
      console.log(file);
    });
  };
  useEffect(() => {
    fetchVideo();
  }, []);

  return {files, fetchVideo}
};
export default useTorrent;
