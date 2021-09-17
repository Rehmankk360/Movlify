import {allEndPoints} from '../allEndPoints'
import get from 'axios'

export const getMovieDetails = async(movieId: String)=>{
  const fetcher = get(allEndPoints.get.movie_details(movieId), {}).then(data=> data.data) 
    return fetcher
} 
