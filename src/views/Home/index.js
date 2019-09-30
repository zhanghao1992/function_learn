/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import React, {Component} from 'react'
import { Button } from 'antd'
import {connect} from 'dva';

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
    let square = x => Math.pow(x, 2);
    square = R.compose(R.tap(() => console.log("maping")), square)
    let isEven = x => x % 2 === 0;
    isEven = R.compose(R.tap(() => console.log("then filter")), isEven)
    const numbers = _.range(200)
    const result = _.chain(numbers)
                    .map(square)
                    .filter(isEven)
                    .take(3)
                    .value()

    // console.log(result);
    // console.log(result.length);

    const factorial = _.memoize(n => n === 0 ? 1 :(n * factorial(n - 1)))
    const factorial2 = (n, current = 1) => n === 1 ? current : factorial2(n - 1, n * current);
    console.time('1');
    factorial(100)
    console.timeEnd('1')
    console.time('s');
    factorial(99)
    console.timeEnd('s')
    console.time('factorial2');
    factorial2(100)
    console.timeEnd('factorial2')
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