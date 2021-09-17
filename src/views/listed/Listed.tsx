import React from 'react'
import { useFetcher } from '../../hooks'
import { Banner, Trending} from './components'
import { Loading } from '..';
import { getListedMovies } from '../../utils/moviesApi'
import { randomItem } from '../../utils/helpers'
import useStyles from './Styles'
 function Listed () {
     const {data: list}: any = useFetcher(getListedMovies, [])
     const styles: any = useStyles()
     console.log(list)
     if(!list) return <Loading fullScreen={true}/>
const randomMovie: any = randomItem(list.movies)
    return (
        <div className={styles.root}>
            <Banner 
            largeCoverImage={randomMovie.large_cover_image}
            title={randomMovie.title}
            summary={randomMovie.summary}
            containerClass={styles.container}
            background={randomMovie.background_image_original}
            torrent={randomMovie.torrents}
            id={randomMovie.id}
            />
            <Trending
            list={list}
            containerClass={styles.container}
            />
        </div>
    )
}

export default Listed
