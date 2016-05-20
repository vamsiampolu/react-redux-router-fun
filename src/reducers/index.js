import home from './home'
import profile from './profile'
import register from './register'
import settings from './settings'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
  home,
  profile,
  register,
  settings,
  routing: routerReducer
})

export default rootReducer
