// 引入Vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'
// 声明使用路由
Vue.use(VueRouter)
// 向外暴露路由器
export default new VueRouter({
  mode: 'history',
  routes
})
