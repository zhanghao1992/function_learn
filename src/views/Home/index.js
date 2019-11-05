/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'
import { Button } from 'antd'
import {connect} from 'dva';

import data from './data.js'

const _ = require('lodash');
const R = require('ramda');
const mapStateToProps = (state) => {
  const { app, loading } = state
  return {
    app,
    loading
  }
}
const mapDispatchToProps = (dispatch) => ({
    getAllCities: () => dispatch({ type: 'app/save' })
})

@connect(mapStateToProps, mapDispatchToProps)
class Home  extends Component {
  componentDidMount() {
    
  }
  fetchD = () => {
    const { getAllCities } = this.props
    getAllCities()
  }
  render() {
    const {loading} = this.props
    return(
      <div>
        <Button loading={loading.effects['app/save']} onClick={this.fetchD}>发送请求</Button>
      </div>
    )
  }
}

export default Home