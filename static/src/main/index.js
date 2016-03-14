import MainApp from './MainApp'
import React from 'react'
import ReactDOM from 'react-dom'
import mainAppReducers from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const initialState = window.__INITIAL_STATE__
const store = createStore(mainAppReducers, initialState)


ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
)
