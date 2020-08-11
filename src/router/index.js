/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
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
    id:'Tool',
    path: '/tool',
    component: () => import('../views/Tool'),
  },
  {
    id:'Hooks',
    path: '/hooks',
    component: () => import('../views/Hooks'),
  },
  {
    id:'ReactVue',
    path: '/react_vue',
    component: () => import('../views/ReactVue'),
  },
  {
    id:'WaterMark',
    path: '/water_mark',
    component: () => import('../views/WaterMark'),
  },
  {
    id:'PureComp',
    path: '/pure_comp',
    component: () => import('../views/PureComp'),
  },
  {
    id:'VirtualizedList',
    path: '/virtualized_list',
    component: () => import('../views/VirtualizedList'),
  },
  {
    id:'Rx',
    path: '/rx',
    component: () => import('../views/Rx'),
  },
  {
    id:'BaiDuMap',
    path: '/baidu_map',
    component: () => import('../views/BaiduMap'),
  },
  {
    id:'ArrowFunction',
    path: '/arrow_function',
    component: () => import('../views/ArrowFunction'),
  },
  {
    id:'ArrayHandle',
    path: '/array_handle',
    component: () => import('../views/ArrayHandle'),
  },
  {
    id:'SkyWheel',
    path: '/sky_wheel',
    component: () => import('../views/SkyWheel'),
  },
  {
    id:'Animation',
    path: '/animation',
    component: () => import('../views/Animation'),
  },
  {
    id:'Big',
    path: '/big',
    component: () => import('../views/Big'),
  },
  {
    id:'Decorate',
    path: '/decorate',
    component: () => import('../views/Decorate'),
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