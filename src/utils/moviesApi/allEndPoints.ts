interface allEndPoints{
    get: any,
    post: any,
}
   export const allEndPoints: allEndPoints = {
       get:{
           listed: "https://yts.mx/api/v2/list_movies.json",
           suggestions: (movieId: String)=> `https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`,
           searched_movies: (query: String) => `https://yts.mx/api/v2/list_movies.json?query_term=${query}`,
           movie_details: (movieId: String) => `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true&limit=3`
        },
        post: {

        }
    }
