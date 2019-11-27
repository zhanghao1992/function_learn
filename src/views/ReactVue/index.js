/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import React, { Component } from 'react';

import Vue from 'vue/dist/vue.esm.js'
import vueSeamlessScroll from 'vue-seamless-scroll'
import './style.css'
var MyComponent = Vue.extend({
  components: {
    vueSeamlessScroll
  },
  template: `<vue-seamless-scroll :data="listData" :class-option="classOption" class="warp">
  <ul class="item">
      <li v-for="item in listData"><span class="title" v-text="item.title"></span><span class="date"
                                                                                        v-text="item.date"></span>
      </li>
  </ul>
</vue-seamless-scroll>`,
  data: function () {
    return {
      listData: [{
        'title': '无缝滚动第一行无缝滚动第一行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第二行无缝滚动第二行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第三行无缝滚动第三行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第四行无缝滚动第四行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第五行无缝滚动第五行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第六行无缝滚动第六行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第七行无缝滚动第七行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第八行无缝滚动第八行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第九行无缝滚动第九行',
        'date': '2017-12-16'
      }]
    }
  },
  computed: {
    classOption: function () {
      return {
        step: 0.5,
        limitMoveNum: 5
      }
    }
  }
})
class ReactVue extends Component {
  componentDidMount() {
    new MyComponent({el: '#box'})
  }
  render() {
    return <div>
      <div id="box">sdasdaws</div>
    </div>;
  }
}
export default ReactVue