import {allEndPoints} from '../allEndPoints'
import get from 'axios'

export const getListedMovies= async()=>{
  const fetcher = get(allEndPoints.get.listed, {}).then(data=> data.data) 
    return fetcher
} 
