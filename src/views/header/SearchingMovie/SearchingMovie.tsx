import React, {useState} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { Box, Grid, InputBase, Typography } from '@material-ui/core';
import {useFetcher} from '../../../hooks'
import { Loading } from '../..';
import { getSearchedMovies } from '../../../utils/moviesApi';
import useStyles from './styles'
export default function SearchingMovie() {
    const styles = useStyles()
    let {data, fetchAgain}: any = useFetcher(getSearchedMovies, [])
    const handleSearch = (e: any)=>{
        e.preventDefault();
        const text = e.target.value;
        if(text) fetchAgain([text])
        else fetchAgain(['no_movies_for_me'])
    }
    if(!data) return <Loading 
    fullScreen={false}
    />
    const movies = data.movies
    return (
        <Box className={styles.wrapper}>

        <Box className={styles.search}>
              <Box className={styles.searchIcon}>
                <SearchIcon />
              </Box>
              <InputBase
                placeholder="Search…"
                classes={{
                    root: styles.inputRoot,
                    input: styles.inputInput,
                }}
                onChange={e=>handleSearch(e)}
                inputProps={{ "aria-label": "search" }}
                />
        
       <Box className={styles.searchWrapper}>
           
           <Box className={styles.listItem}>
        {movies &&  movies.map((movie: any)=>

            <a href={`/single_movie?id=${movie.id}`}className={styles.links}>

        <Grid container className={styles.searchContainer} spacing={2}>
            <Grid item md={3}>
                <img src={movie.medium_cover_image} alt="thumbnail" className={styles.thumbnail}/>
            </Grid>
            <Grid item md={9}>
                <Typography variant='h5'>{movie.title}</Typography>
            </Grid>
        </Grid>
            </a>
        )}
        </Box>
       </Box>
        </Box >
                </Box>
    )
}
