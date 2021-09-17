import React from "react";
import useStyles from "./styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Typography } from "@material-ui/core";


interface props{
  open: any,
  setOpen: any,
  torrent: any,
  type: any,
  id: any
}
export default function WatchModel(props: props) {
  const styles = useStyles();
 
  const { open, setOpen, torrent, type,id } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            {type === "download" ? (
              <>
                <Typography variant="h3" className={styles.download}>
                  Download by quality
                </Typography>
                <div className={styles.linksWrapper}>
                  {torrent.map((torr: any) => (
                    <a href={torr.url} target={'_blank'} className={styles.links}>
                      {torr.quality}
                      
                    </a>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Typography variant="h3" className={styles.download}>
                  Select watch quality
                </Typography>
                <div className={styles.linksWrapper}>
                  {torrent.map((torr: any) => (
                    <a
                      href={`/single_movie?id=${id}&url=${torr.url}`}
                      className={styles.links}
                    >
                      {torr.quality}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
