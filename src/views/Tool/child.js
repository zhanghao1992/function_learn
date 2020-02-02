/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'

import { Button } from 'antd'

class Son  extends Component {
  state = {
      count: 0
  }
  componentDidMount() {
      document.addEventListener('click', (e) => {
          console.log('document click');
        //   e.preventDefault()
      }, false)

      const btn = document.getElementById('btn')
      btn.addEventListener('click',(e) => {
          console.log('btn natiove event');
        //   e.stopPropagation()
      })
  }
  testHandle = (e) => {
    console.log('testHandle');
    // e.nativeEvent.preventDefault()
    e.nativeEvent.stopImmediatePropagation()
    this.setState(pre => ({
        count: pre.count + 1
    }))
  }
  render() {
    return(
      <div>
        <Button id="btn" onClick={this.testHandle}>{this.state.count}</Button>
      </div>
    )
  }
}

export default Son