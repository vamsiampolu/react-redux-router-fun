import React from 'react'
import routes from '../routes'
import {Router} from 'react-router'

export default function RouterContainer ({history}) {
  return (<Router routes={routes} history={history} />)
}
