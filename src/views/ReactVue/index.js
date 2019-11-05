/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import React, { Component } from 'react';
import Two from './Two.vue';

import { VueWrapper } from 'vuera'



class ReactVue extends Component {
  componentDidMount() {
 
  }
  render() {
    return <div>
        <VueWrapper
              component={Two}
              message='Hello from Vue!'
        />
      <div className="">sdasdaws</div>
    </div>;
  }
}
export default ReactVue