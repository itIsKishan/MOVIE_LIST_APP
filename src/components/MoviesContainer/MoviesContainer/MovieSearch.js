import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {searchMovie} from '../../../action/AddMoviesAction'

const MovieSearch = (props) =>{

    const dispatch = useDispatch()
    const [inputMovie,setInputMovie] = useState('')

    const handleInputMovieChange = (e) =>{
        setInputMovie(e.target.value)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = inputMovie.toLowerCase()
        dispatch(searchMovie(data))
        setInputMovie('')
    }
    return (
        <div className = 'col-md-6'>
            <h3 class="fs-3" class="fw-bolder">MY BIG MOVIE LIST</h3>
            <form class = "row g-3" onSubmit = {handleSubmit}>
                <div class="col-md-4">
                    <input type = 'text' class="form-control" id="search" size = '40' placeholder = 'Search By Name....' value = {inputMovie} onChange = {handleInputMovieChange}/>
                </div>
                <div class="col-auto">
                    <input type = 'submit'class="btn btn-primary" value = 'seacrh' />
                </div>
            </form>
        </div>
    )
}
export default MovieSearch