import React, { useEffect, useState } from "react";
export default function useTorrentStats(torrent: any) {
  const [downloadSpeed, setDownloadSpeed] = useState("0");
  const [downloaded, setDownloaded] = useState("0");
  const [progress, setProgress] = useState("0");
  const getStats = () => {
    torrent.on("download", function (bytes: any) {
      setDownloaded(bytes);
      setDownloadSpeed(torrent.downloadSpeed);
      setProgress(torrent.progress);
    });
  };
  useEffect(() => {
    getStats();
  }, [downloadSpeed, downloaded, progress]);
  return { downloadSpeed, downloaded, progress };
}
