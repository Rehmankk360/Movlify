import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import { Movie } from "..";
import useStyles from "./Styles";

interface props {
  list: any;
  containerClass: string;
}
export default function Trending(props: props) {
  const styles = useStyles();
  const { list, containerClass } = props;
  return (
    <div className={styles.trending}>
      <Container className={containerClass}>
        <Typography variant="h3" className={styles.title}>
          Trending
        </Typography>
        <Grid container spacing={2} justifyContent={'center'}>
          {list.movies.map((movie: any, key: any) => (
            <Movie
              title={movie.title}
              dateUploaded={movie.date_uploaded}
              genres={movie.genres}
              largeCoverImage={movie.large_cover_image}
              id={movie.id}
              torrent={movie.torrents}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
