// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'
// 声明使用路由
Vue.use(VueRouter)
// Vue也是当页面应用程序(SPA),所以如果要想实现跳转功能,那么就要有router路由器
// 路由器对象中包含多个路由对象
export default new VueRouter({
  mode: 'history', // 干掉#
  routes
})
