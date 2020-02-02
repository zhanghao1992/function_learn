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
      count: 0
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({count: 2})
    // }, 2000)
    // const fn = () => {
    //   return new Promise(resolve =>{
    //       setTimeout(() => {
    //         Promise.resolve(5)
    //       }, 1000)
    //   })
    // }

    // fn().then(res => {
    //   console.log('11')
    //     console.log(res)
    // })
    getNews().then(res => {
      console.log(res);
    })
    
    document.getElementById('btn-confirm').addEventListener('click', function(e) {
      // e.stopPropagation()
      console.log('原生事件')
    }, false)
    
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  fetchD = () => {
    console.log(this);
    // const { getAllCities } = this.props
    // getAllCities()
  }
      //测试函数
  handler = (e) => {
      console.log(e);
  }

  abort = () => {
    this.controller.abort();
  }

  handleClickWrap = (e) => {
    // console.log('handleClickWrap');
  }

  handleClick =(e) => {
    // e.nativeEvent.stopImmediatePropagation();
    console.log('button click');
  }
  
  handleNativeAndReact = (e) => {
    console.log('原生+react 事件:  当前执行react事件');
  }
  
  render() {
    const {loading} = this.props
    return(
      <div>
        {this.state.count}
        <Button loading={loading.effects['app/save']} onClick={this.fetchD}>发送请求</Button>
        <input id = "btn" type="button" value='单击this' onClick={this.handler}/>

        <div className="pageIndex" onClick={this.handleClickWrap}>
          <p>react event!!!</p>
            <MyButton id="btn-confirm" onClick={this.handleClick}>react 事件</MyButton>
            <MyButton id="btn-reactandnative" primary onClick={this.handleNativeAndReact}>原生 + react 事件</MyButton>
        </div>
      </div>
    )
  }
}

export default Home