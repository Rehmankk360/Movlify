import {allEndPoints} from '../allEndPoints'
import get from 'axios'

export const getSearchedMovies = async(query: String)=>{
  const fetcher = get(allEndPoints.get.searched_movies(query), {}).then(data=> data.data) 
    return fetcher
} 
