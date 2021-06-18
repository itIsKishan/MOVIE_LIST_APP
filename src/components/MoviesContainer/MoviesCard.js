import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeMovie} from '../../action/AddMoviesAction'

const MoviesCard = (props) =>{

    const dispatch = useDispatch()
    const data = useSelector((state) =>{
        return state.movie
    })
    const handleRemove = (id)=>{
        dispatch(removeMovie(id))
    }
    return (
        <div className = 'col-mb-4' >
            <div class="row">
                <div class="col-sm-2">
                    <div class="card">
                        <div class="card-body">
                        {
                        data.map((ele)=>{
                            return(
                            <div key = {ele.id}>
                                <b>Name - {ele.movie}</b><br/>
                                <b>IMDB - {ele.imdb}</b><br/>
                                <button class="btn btn-primary" onClick = {() =>{
                                    handleRemove(ele.id)
                                    }}>Delete</button><br/><br/>
                            </div>
                            )
                        })
                         }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default MoviesCard