/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: memoize和尾递归优化性能
 */
import React, {Component} from 'react'
import { forEach, filter, map, sort, unary, once, memoized, concatAll, reduce } from './tool.js'
import { Button } from 'antd'

const pay = once(() => {
    console.log('done')
})
class Tool  extends Component {
  componentDidMount() {
      let arr = [1, 2, 3]
      const a = sort(arr, (a, b) => a - b)
      const b = arr.map(unary(parseInt))
      const factorial = memoized(n => n === 0 ? 1 : n * factorial(n - 1) )
      const arr2 = [[1, 2, 3], ['a', 'b'], '张浩']
      console.log(concatAll(arr2));

      const d = reduce(arr, (result, current) => {
        return result += current
      } ,10)
      console.log(d)

  }
  testHandle = () => {
    pay()
  }
  render() {
    return(
      <div>
          <Button onClick={this.testHandle}>test</Button>
      </div>
    )
  }
}

export default Tool