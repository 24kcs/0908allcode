// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue
import Vue from 'vue'
// 引入App这个组件
import App from './App'

// 是否关闭浏览器的控制台中的提示信息,这行代码可要可不要
Vue.config.productionTip = false

// 实例化Vue对象
/* eslint-disable no-new */
new Vue({
  // 获取容器---在index.html中app选择器
  el: '#app',
  // 注册组件
  components: { App },
  // 模版---使用App的模版
  template: '<App/>'
})

// 组件:具有特定功能集合---可以认为组件就是包含html,css,js的文件---Vue中组件是一个.vue文件
// React中的组件:.jsx或者是js文件
// 组件化:多个组件的使用
// 模块:一个js文件
// 模块化:多个js文件
