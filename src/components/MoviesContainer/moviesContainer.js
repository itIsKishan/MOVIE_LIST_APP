import React from 'react'
import MovieForm from './MovieForm'
import MovieSearch from './MoviesContainer/MovieSearch'
import MovieStats from './MoviesContainer/MovieStats'
import MoviesList from './MoviesList'
const MoviesContainer = (props) =>{
    return (
        <div>
            <MovieSearch/><br/><br/>
            <MoviesList/>
            <MovieForm/>
            <MovieStats/>
        </div>
    )
}
export default MoviesContainer