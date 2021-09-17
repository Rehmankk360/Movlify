import React from 'react'
import {Single_movie, Listed, Header} from './views'
interface routesProps{
    component: React.FC
    path: string, 
}
 const routes: routesProps[] = [
     {
         component: Single_movie,
         path: "/Single_movie"
    },
    {
        component: Listed,
        path: "/"
    },
]
export default routes