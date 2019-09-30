/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import React from 'react'
// import {Router, Route, Switch, Redirect} from 'react-router-dom'
// import asyncComponent from '../components/AsyncComponent'

import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'

const routeConfig = [
  {
    id:'Home',
    path: '/home',
    models: () => [import('../models/home')], //models可多个
    component: () => import('../views/Home'),
  },
  {
    id:'NotFound',
    component: () => import('../views/NotFound'),
  }
]

function RootRouter ({history, app}) {
    return(
      <Router history={history}>
        <Switch>
          <Redirect exact from="/" to="/home"/>
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