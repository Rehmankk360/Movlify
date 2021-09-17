import {useState, useEffect} from 'react'

export default function useFetcher(toBeFetched: Function, params: any[]) {
    const [data, setData] = useState(null)
    const fetcher = async(fields: any) =>{
        const result = await toBeFetched(...fields)
        setData(result.data)
    }
    useEffect(()=>{
        fetcher(params)
        return ()=>{
        }
    }, [])
    
    return {data, fetchAgain: fetcher}
}
