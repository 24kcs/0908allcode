// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入router路由器
import router from './router'
// 引入store
import store from './store'
// 引入公共组件Header
import Header from './components/Header/Header.vue'
// 引入公共组件Star
import Star from './components/Star/Star.vue'
// 引入CartControl 组件
import CartControl from './components/CartControl/CartControl.vue'
// 引入表单验证的插件validate,执行该文件中的代码
import './validate.js'
// 引入mock的js文件
import './mock/mock-server.js'
import { Button } from 'mint-ui';
// 格式化日期
import './filter'
// 引入vue-lazyload
import VueLazyload from 'vue-lazyload'
// 引入图片路径
import loading from './common/images/loading.gif'
// 声明使用插件包
Vue.use(VueLazyload, {
  loading
})

Vue.prototype.$bus=new Vue()
// 注册成公共组件
Vue.component(Button.name, Button);
// 注册成公共组件
Vue.component(Header.name, Header)
Vue.component(Star.name, Star)
Vue.component(CartControl.name, CartControl)
// 设置浏览器的控制台中是否显示提示信息
Vue.config.productionTip = false
// 创建Vue的实例对象
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  // 注册路由器
  router,
  // 注册仓库
  store
})
