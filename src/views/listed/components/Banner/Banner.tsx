import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Container, Typography, Grid, Button } from '@material-ui/core';
import {WatchModal} from '../';
import useStyles from './styles'

interface props{
    largeCoverImage: string,
    title: string,
    containerClass: string,
    summary: any,
    background: string,
    torrent: any,
    id: any
}
export default function Banner(props: props) {
    let {largeCoverImage, title, containerClass, summary, background, torrent, id} = props;
    const styles: any = useStyles({largeCoverImage})
    const [modal, setModal] = useState(false);
    const [type, setType] = useState("");
  const handleOpen = (type: string) => {
    setType(type);
    setModal(true);
  };
  const shortenParagraph=(p: any, num: any)=>{
      p = p.split(' ')
      let remaining = p.length - num
      if(p.length > num) {
          p.splice(num, remaining)
          p.push('...')
    }
      return p.join(' ')
  }
    return (
      <div
        className={"banner"}
        style={{ backgroundImage: `url(${background})` }}
      >
        <WatchModal setOpen={setModal} open={modal} type={type} torrent={torrent} id={id}/>
        <div className={styles.banner_content}>
          <Container className={containerClass}>
            <Grid
              container
              spacing={5}
              // direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item md={6}>
                <Typography variant="h1" className={styles.title}>
                  {title}
                </Typography>
                <Typography variant="h6" className={styles.summary}>
                  {shortenParagraph(summary, 100)}
                </Typography>
                <Link to={`/single_movie?id=${id}`}>
                  <Button className={styles.buttons}>Details</Button>
                </Link>
                <Button
                  className={styles.buttons}
                  onClick={(e) => handleOpen("watchNow")}
                >
                  Watch
                </Button>
              </Grid>
              <Grid item md={4} className={styles.thumbnailWrapper}>

                <img className={styles.thumbnail} src={largeCoverImage} />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
}
