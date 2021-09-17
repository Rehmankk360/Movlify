import React from 'react'
import useStyles from './Styles'
import { Grid } from '@material-ui/core'
import { Loading } from '../../..'
import { useFetcher } from '../../../../hooks'
import { getSimilarMovies } from '../../../../utils/moviesApi'
interface prop{
    movieId: any
}
export default function SimilarMovies(props: prop) {
    const {movieId} = props
    const styles = useStyles()
    const {data}: any = useFetcher(getSimilarMovies, [movieId])
    if(!data) return <Loading fullScreen={false}/>
    const movies=data.movies
    return (
        <Grid container spacing={2} className={styles.similarMovies} justifyContent='center'>
            {movies.map((movie: any)=>
            <Grid item md={6} xs={11} sm={6}>
                <a href={`/single_movie?id=${movie.id}`} style={{width: "100%"}}>
                <img src={movie.medium_cover_image} className={styles.thumbnail} alt='bg'/>
                </a>
            </Grid>
            )}
        </Grid>
    )
}
