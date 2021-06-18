const initialMovieState = []

const moviesReducer = (state = initialMovieState,action)=>{
    switch (action.type){
        case 'ADD_MOVIES' : {
            return [...state,{...action.payload}]
        }
        case 'REMOVE_MOVIE' :{
            return state.filter((ele) =>{
                return ele.id != action.payload
            })
        }
        case 'SEARCH_MOVIE' :{
            return state.filter((ele) =>{
                return ele.movie == action.payload
            })
        }
        
        default :{
            return state
        }
    }
}
export default moviesReducer