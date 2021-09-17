import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WatchModal } from "..";
import { Grid,  Button } from "@material-ui/core";
import useStyles from "./styles";

interface Props {
  title: string;
  dateUploaded: string;
  genres: string;
  largeCoverImage: string;
  id: number;
  torrent: any;
}

export default function Movie(prop: Props) {
  const styles = useStyles();
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");
  const { largeCoverImage, id, torrent } = prop;
  const handleOpen = (type: string) => {
    setType(type);
    setModal(true);
  };
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <WatchModal
        open={modal}
        setOpen={setModal}
        torrent={torrent}
        type={type}
        id={id}
      />
      <div className={styles.thumbnailWrapper + " thumbnail"}>
      <Link to={`/single_movie?id=${id}`} className={styles.anchor}> 
        <img
          src={largeCoverImage}
          alt="thumbnail"
          className={styles.thumbnail}
          />
          </Link>
        <div className={styles.imgButtonWrapper}>
          <Button
            className={styles.imgButton + " imgButton1"}
            onClick={(e) => handleOpen("watchNow")}
            >
            Watch Now
          </Button>
          <Button
            className={styles.imgButton + " imgButton2"}
            onClick={(e) => handleOpen("download")}
            >
            Download
          </Button>
        </div>
      </div>
      {/* <Typography variant='h4'> {title}</Typography> */}
    </Grid>
  );
}
