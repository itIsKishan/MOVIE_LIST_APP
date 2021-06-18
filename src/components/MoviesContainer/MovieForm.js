import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addMovies } from '../../action/AddMoviesAction'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const MovieForm = (props)=>{
    
    const dispatch = useDispatch()
    const [movies,setMovies] = useState('')
    const [imdb,setImdb] = useState('')
    const handleMovieChange = (e)=>{
        setMovies(e.target.value)
    }

    const handleImdbChange = (e)=>{
        setImdb(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            id : Number(new Date()),
            movie : movies,
            imdb : Number(imdb)
        }
        dispatch(addMovies(data))
        setImdb('')
        setMovies('')
    }

    return (
        <div className = 'col-md-4' >
            <div class="card w-50" class="position-absolute top-0 end-0">
                <div class="card-body"  >
                    <h3 class="fs-3" class="fw-bolder">Add Movie</h3>
                    <form class = "row g-3" onSubmit = {handleSubmit}>
                        <div class="col-md-4">
                            <input type = 'text' class="form-control" id="inputEmail4" placeholder = 'Enter Movie Name' value = {movies} onChange = {handleMovieChange}/><br/><br/>
                        </div><br/>
                        <div class="col-md-4">
                            <input type = 'text' class="form-control" id = "imdb" placeholder = 'IMDB Rating' value = {imdb} onChange = {handleImdbChange}/>
                        </div>
                        <div class="col-auto">
                            <input type = 'submit' class="btn btn-primary" value = 'Add Movie'/>
                        </div>
                    </form>
                </div>
            </div> 
            {/* <form class = "row g-3" onSubmit = {handleSubmit}>
                <div class="col-md-2">
                    <input type = 'text' class="form-control" id="inputEmail4" placeholder = 'Enter Movie Name' value = {movies} onChange = {handleMovieChange}/><br/><br/>
                </div><br/>
                <div class="col-md-2">
                    <input type = 'text' class="form-control" id = "imdb" placeholder = 'IMDB Rating' value = {imdb} onChange = {handleImdbChange}/>
                </div>
                <div class="col-auto">
                    <input type = 'submit' class="btn btn-primary" value = 'Add Movie'/>
                </div>
            </form> */}
        </div>
    )
}
export default MovieForm