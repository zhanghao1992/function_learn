/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: file content
 */
import React, {Component} from 'react';
import {Button} from 'antd'
import Person from './Person.js'
import _ from 'lodash'
function log() {
  return function(target, name, descriptor) {
    console.log(target)
    const fn = descriptor.value
    descriptor.value = function(...rest) {
      console.log(`这是调用方法【${name}】前打印的日志`)
      fn.call(target, ...rest)
      console.log(`这是调用方法【${name}】后打印的日志`)
    }
  }
}

const debounce = function(wait, options = {leading: true}) {
  return function(target, name, descriptor) {
    descriptor.value = _.debounce(descriptor.value, wait, options)
  }
}

const throttle = function(wait, options = {leading: true}) {
  return function(target, name, descriptor) {
    descriptor.value = _.throttle(descriptor.value, wait, options)
  }
}

class Decorate  extends Component {

  minus = () => {
    return 1
  }

  add() {
    return 0
  } 

  @debounce(2000)
  clickHandler() {
    // console.log(this.add());

    const P = new Person('zh')
    console.log(P);
    P.run();
    P.say()
  }

  @throttle(2000)
  clickHandler2() {
    console.log('2222');
    // console.log(this.minus());
  }

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.clickHandler}>点击试试</Button>
        </div>
        <div>
          <Button onClick={this.clickHandler2}>点击试试2</Button>
        </div>
      </div>
    )
  }
}
 export default Decorate
