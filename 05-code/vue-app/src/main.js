// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入store
import store from './store'
// 设置浏览器的控制台中是否显示提示信息
Vue.config.productionTip = false
// 实例化Vue对象
/* eslint-disable no-new */
new Vue({
  // 根据选择器获取对应的容器对象
  el: '#app',
  // 注册组件
  components: { App },
  // 使用模版
  template: '<App/>',
  // 注册Vuex仓库
  store
})
