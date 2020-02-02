/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component, PureComponent} from 'react'

class Child  extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      name: 'zhanghao23',
      count: 0
    }
  }

  static getDerivedStateFromProps(props) {
      console.log(props, 'getDerivedStateFromProps');
      return {count: props.count}
  }

  handler() {
      console.log(`handler`,this);
  }
  render() {
    return(
      <div style={{
          border: '1px solid green'
      }}>
       子组件的count{this.state.count}
      </div>
    )
  }
}

export default Child