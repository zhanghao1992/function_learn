import React from 'react'
// import {HashRouter, Route, Switch} from 'react-router-dom'
// import asyncComponent from '../components/AsyncComponent'

import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'


const routeConfig = [
  {
    id:'Home',
    pid:'0',
    name:'aaa页',
    icon:'user',
    path: '/Home',
    models: () => [import('../models/home')], //models可多个
    component: () => import('../views/Home'),
  }
]

function RootRouter ({history, app}) {
    return(
      <Router history={history}>
        <Switch>
        {
          routeConfig.map(({path,...dynamics},index)=>(
            <Route
              key={index} 
              path={path} 
              exact 
              component={dynamic({
                app,
                ...dynamics
              })} 
            />
          ))
        }
        </Switch>
      </Router>
    )
}

export default RootRouter