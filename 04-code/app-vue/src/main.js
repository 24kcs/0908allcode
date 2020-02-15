// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 设置提示信息在浏览器中是否显示
Vue.config.productionTip = false
// 定义事件总线
Vue.prototype.$bus = new Vue()
// 实例化Vue对象
/* eslint-disable no-new */
new Vue({ // 匿名对象---->其他组件中是没办法直接调用
  // 获取容器对爱那个
  el: '#app',
  // 注册组件
  components: {
    App
  },
  // 使用模版
  template: '<App/>'
})
