import App from './components/App'
import Home from './components/Home'
import Register from './components/Register'
import Profile from './components/Profile'
import Settings from './components/Settings'

import React from 'react'
import {Route, IndexRoute, Redirect} from 'react-router'

const routes = (

  <Route path='/app' component={App} >
    <Redirect from='/' to='/app' />
    <IndexRoute component={Home} />
    <Route path='register' component={Register} />
    <Route path='profile' component={Profile} />
    <Route path='settings' component={Settings} />
  </Route>
)

export default routes
