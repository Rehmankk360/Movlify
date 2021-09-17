import {allEndPoints} from '../allEndPoints'
import get from 'axios'

export const getSimilarMovies = async(movieId: String)=>{
  const fetcher = get(allEndPoints.get.suggestions(movieId), {}).then(data=> data.data) 
    return fetcher
} 
