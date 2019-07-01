import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router-dom'

import store from './store'
import Home from './pages/home'
import ErrorPage from './pages/error-page'
import './App.css'

const history = require('history').createBrowserHistory()
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Redirect from="/" exact to="/home"></Redirect>
          <Route path='/home' component={Home} />
          <Route path='/error-page' component={ErrorPage} />
        </Router>
      </Provider>
    )
  }
}

export default App
