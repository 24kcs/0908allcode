// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'
// 设置浏览器中的控制台中是否提示信息
Vue.config.productionTip = false
// eslint 语法检查,干掉只new 不使用的警告错误
/* eslint-disable no-new */
new Vue({
  // 根据id选择器获取html容器对象
  el: '#app',
  // 注册组件
  components: { App },
  // 使用App模版
  template: '<App/>'
})
