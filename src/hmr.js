import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {browserHistory} from 'react-router'

import reducer from './reducers'

const configureStore = (initialState) => {

  const reduxDevTools = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  const store = createStore(reducer, initialState,reduxDevTools)
  const replaceReducer = () => {
    const nextReducer = require('./reducers').default
    store.replaceReducer(nextReducer)
  }
  if (module.hot) {
    module.hot.accept('./reducers', replaceReducer)
  }
  return store
}

const root = document.getElementById('root')

const renderApp = () => {
  const App = require('./containers/index.js').default
  const store = configureStore()
  const history = syncHistoryWithStore(browserHistory, store)
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider >, root)
}

const renderError = (error) => {
  const Redbox = require('redbox-react')
  ReactDOM.render(<Redbox error={error} />, root)
}

const render = () => {
  try {
    renderApp()
  } catch (error) {
    renderError(error)
  }
}

export default render
