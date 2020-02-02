/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'
import Son from './child.js'
import { 
  // forEach, 
  // filter, 
  // map, 
  // sort, 
  // unary, 
  // once, 
  // memoized, 
  // concatAll, 
  // reduce, curry, 
  // partial, 
  // composeN 
} from './tool.js'
import { Button } from 'antd'

class Tool  extends Component {
  componentDidMount() {
      

  }
  render() {
    console.log('father render');
    return(
      <div>
          <Son/>
      </div>
    )
  }
}

export default Tool