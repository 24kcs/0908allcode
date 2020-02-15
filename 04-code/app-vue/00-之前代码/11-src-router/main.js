// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入路由器对象
import router from './router'
// 设置提示信息在浏览器中是否显示
Vue.config.productionTip = false
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
  template: '<App/>',
  // 注册路由器------当前的工程中就可以使用了
  router
})
