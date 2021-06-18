import {createStore,combineReducers} from 'redux'
import moviesReducer from '../reducers/MoviesReducers'
const configureStore = ()=>{
    const store = createStore(combineReducers({
        movie : moviesReducer
    }))
    return store
}
export default configureStore