// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import { Button } from 'mint-ui'
// 设置浏览器的控制台中是否显示提示信息
Vue.config.productionTip = false
// Vue.use(MintUI)

Vue.component(Button.name, Button)
// 实例化Vue对象
/* eslint-disable no-new */
new Vue({
  // 根据选择器获取对应的容器对象
  el: '#app',
  // 注册组件
  components: { App },
  // 使用模版
  template: '<App/>'
})
