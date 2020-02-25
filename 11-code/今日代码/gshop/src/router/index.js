// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'
// 声明使用
Vue.use(VueRouter)
// 实例化路由器对象并暴露
export default new VueRouter({
  mode: 'history', // 干掉地址栏上的#符号
  routes
})
