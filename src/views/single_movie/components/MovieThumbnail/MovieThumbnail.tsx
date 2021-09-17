import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import {WatchModal} from '../../../listed/components'
import useStyles from './styles'
interface props {
    largeCoverImage: any,
    torrent: any,
    id: any
}
export default function MovieThumbnail(props: props) {
    const styles = useStyles()
    const {largeCoverImage, torrent, id} = props;
    const [modal, setModal] = useState(false);
    const [type, setType] = useState("");
  const handleOpen = (type: string) => {
    setType(type);
    setModal(true);
  };
    return (
        <>
            <WatchModal
            setOpen={setModal}
            open={modal}
            type={type}
            torrent={torrent}
            id={id}
            />
            <img src={largeCoverImage} alt="thumbnail" className={styles.thumbnail}/>
            <Button className={styles.thumbnailButton} style={{marginBottom:"10px"}} onClick={e=>handleOpen('download')}>Download Now</Button>
            <Button className={styles.thumbnailButton} onClick={e=>handleOpen('watch')}>Watch Now</Button>
        </>
    )
}
