// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 设置提示信息在浏览器的控制台中是否显示
Vue.config.productionTip = false
// 实例化Vue
/* eslint-disable no-new */
new Vue({
  // 获取容器的元素
  el: '#app',
  // 注册组件
  components: {
    App
  },
  // 使用模版
  template: '<App/>'
})
// 总结:scoped是在style标签上使用的,如果父级组件和子级组件有相同的标签应用了相同的样式,如果没有使用scoped,那么子级组件的样式有可能会影响父级组件的样式
