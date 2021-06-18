export const addMovies = (movies)=>{
    return {
        type : 'ADD_MOVIES',
        payload : movies
    }
}
export const removeMovie = (id) =>{
    return{
        type : 'REMOVE_MOVIE',
        payload : id
    }
}
export const searchMovie = (movie) =>{
    return{
        type : 'SEARCH_MOVIE',
        payload : movie
    }
}
export const ascendingMovie = () =>{
    return {
        type : 'ASCENDING_MOVIE'
    }
}