import React from "react";
import queryString from "query-string";
import {
  MovieThumbnail,
  MovieDetails,
  SimilarMovies,
  VideoPlayer,
Trailer,
} from "./components";
import { Loading } from "..";
import { Container, Grid, Box } from "@material-ui/core";
import useStyles from "./styles";
import { useFetcher } from "../../hooks";
import { getMovieDetails } from "../../utils/moviesApi";
function Single_movie() {
  const search = window.location.search;
  const { url, id } = queryString.parse(search);
  let {data}: any = useFetcher(getMovieDetails, [id]);
  const styles: any = useStyles();

  if (!data) return <Loading fullScreen={true}/>
  const movie: any = data.movie
  console.log(movie)
  return (
    <Box className={styles.root}>
      <Container className={styles.container}>
        {url ? (
          <VideoPlayer url={url} />
        ) : (
          <Grid container spacing={3}  className={styles.MovieStuff} justifyContent={'center'}>
            <Grid item  xl={4} className={styles.MovieThumbnailWrapper}>
              <MovieThumbnail largeCoverImage={movie.large_cover_image} torrent={movie.torrents} id={movie.id} />
            </Grid>
            <Grid item xl={4} >
              <MovieDetails
                genres={movie.genres}
                title={movie.title}
                likes={movie.like_count}
                quality={movie.torrents}
                year={movie.year}
                rating={movie.rating}

              />
            </Grid>
            <Grid item md={10}xl={4}lg={7} sm={12}>
              <SimilarMovies movieId={movie.id} />
            </Grid>
          </Grid>
        )}
        <Trailer
        ytId={movie.yt_trailer_code}
        summary={movie.description_full}
        />
      </Container>
      
    </Box>
  );
}

export default Single_movie;
