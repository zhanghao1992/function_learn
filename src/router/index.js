import React, { Component } from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import asyncComponent from '../components/AsyncComponent'

const Home = asyncComponent(() => import('../views/Home'));

class RootRouter extends Component {

  render() {
    return(
      <HashRouter>
          <Switch>
              <Route exact path="/" component={Home}/>
          </Switch>
      </HashRouter>
    )
  }
}

export default RootRouter