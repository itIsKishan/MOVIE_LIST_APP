import React from 'react'
import {Provider} from 'react-redux'
import App from './App'
import ReactDOM from 'react-dom'
import configureStore from './store/createStore'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
  console.log(store.getState())
})
ReactDOM.render(<Provider store = {store}>
  <App/>
</Provider>,document.getElementById('root'))
