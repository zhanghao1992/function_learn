/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'
import { Button } from 'antd'
import {connect} from 'dva';
import styled from 'styled-components';
import {getNews} from '../../request/index.js'
// import data from './data.js'
import a from './a.js'
import './style.css'

console.log(a)
setTimeout(() => {
  console.log(a)
},1000)

const MyButton = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  out-line: none;
`;

// const _ = require('lodash');
// const R = require('ramda');
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
  constructor(props) {
    super(props)
    this.state = {
      name: 'zhanghao23',
      count: 0,
      instance: this
    }
  }

  componentDidMount() {
    // getNews().then(res => {
    //   console.log(res);
    // })
  }

  say = () => {
    console.log('say');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    prevState.instance.say()
    console.log(prevState.instance, 'getDerivedStateFromProps');
    return null

  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  addFn = () => {
    let { count } = this.state
    this.setState({ 
      count: count + 1
    })
  }

  render() {
    // const {loading} = this.props
    return(
      <div>
        {this.state.count}
        <button onClick={this.addFn}>+</button>
        <input placeholder="asdasd"/>
        <div className="box">asdasda</div>
      </div>
    )
  }
}

export default Home