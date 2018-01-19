import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import DisplayApp from '../reducers'
import {App} from './App'

const store = createStore(DisplayApp)

const AppRedux = render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)

export default AppRedux
