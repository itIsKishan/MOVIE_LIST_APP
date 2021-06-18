import React from 'react'
import {useSelector} from 'react-redux'

const MovieStats = (props) =>{
    const total = useSelector((state)=>{
        return state.movie
    })
    const topRanked = total.map((ele)=>{
        return ele.imdb
    })
    let greatest = 0
    topRanked.forEach((ele)=>{
        if (ele > greatest){
            greatest = ele
        }
    })
    const result = total.filter((ele)=>{
        if(ele.imdb === greatest){
            return ele.movie
        }
    })
    return (
        <div className = 'col-md-5' class="position-absolute bottom-0 end-30">
        <div class="card text-black bg-light mb-3" >
            <div>
            <div class="card-header">Movie Stats</div>
            <div class="card-body">
                <b>Total Movies - {total.length}</b><br/><br/>
                <b>#Top_Rated_Movie -{result.map((ele) =>{
                    return ele.movie
                })}</b>
            </div>
           </div>
        </div>
        </div>
        
    )
}
export default MovieStats