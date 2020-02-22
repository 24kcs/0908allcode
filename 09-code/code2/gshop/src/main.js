// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App'
// 引入路由器
import router from './router'
// 引入store
import store from './store'
// 引入Header组件
import Header from './components/Header/Header.vue'
// 引入Star组件
import Star from './components/Star/Star.vue'
// 注册公共组件
// 设置浏览器中的控制台中是否提示信息
Vue.config.productionTip = false
Vue.component(Header.name, Header)
Vue.component(Star.name, Star)
// eslint 语法检查,干掉只new 不使用的警告错误
/* eslint-disable no-new */
new Vue({
  // 根据id选择器获取html容器对象
  el: '#app',
  // 注册组件
  components: { App },
  // 使用App模版
  template: '<App/>',
  router,
  store
})
