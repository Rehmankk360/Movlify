import React from "react";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import useStyles from "./Styles";
interface props {
  title: string;
  year: any;
  genres: string[];
  quality: any;
  likes: any;
  rating: any;
}
export default function MovieDetails(props: props) {
  const { title, year, genres, quality, likes, rating } = props;
  const web =
    "WEB: same quality as BluRay, but ripped earlier from a streaming service";
  const styles = useStyles();
  return (
    <div className={styles.detailsWrapper}>
      <Typography variant="h3" className={styles.title}>
        {title}
      </Typography>
      <Typography variant="h5">{year}</Typography>
      <Typography variant="h5" className={styles.genres}>
        {genres.map((genre, i) =>
          i < genres.length - 1 ? genre + "/" : ' '+genre
        )}
      </Typography>
      <Typography variant={"h5"} className={styles.download}>
        Available in:{" "}
        {quality.map((link: any) => (
          <a href={link.url} target={'_blank'} className={styles.downloadLink}>
            {link.quality}
          </a>
        ))}
      </Typography>
      <Typography variant={"h6"} className={styles.web}>
        {web}
      </Typography>
      {quality.map((torr: any)=><Typography variant={"h6"} className={styles.sizes}>
        <span className={styles.sizeTag}>{torr.quality}:</span>{torr.size}
      </Typography>)}
      
      <Typography variant="h4" className={styles.iconWrapper}>
        <StarIcon className={styles.icon} />
        {rating}
      </Typography>
      <Typography variant="h4" className={styles.iconWrapper}>
        <FavoriteIcon className={styles.icon} />
        {likes}
      </Typography>
    </div>
  );
}
