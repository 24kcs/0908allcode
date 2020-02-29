// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'


import store from '../store'
// 声明使用
Vue.use(VueRouter)
// 实例化路由器对象,并暴露
const router = new VueRouter({
  mode: 'history', // 干掉地址栏上的#符号
  routes
})
// 全局前置路由守卫
const paths = ['/goone', '/gotwo'] // 数组中存储的是两个路由组件对应的路由的地址
router.beforeEach((to, from, next) => {
  // to --->即将要进入的目标对象(路由就是要跳转,如:点击链接A,跳转到组件A中)
  // console.log(to) // to.path---->可以得到路径---进入的路由的路径
  // from--->当前导航正要离开的路由对象
  // console.log(from) // from.path---->可以得到路径---离开的路由的路径
  // next--->放行

  // 如果访问的地址是goone或者地市是gotwo,则跳转到登录界面
  if (paths.indexOf(to.path) !== -1) {
    // 此时却是是要跳转到goone或者gotwo的地址
    // 直接跳转到login界面
    // router.push('/login')

    // 如果没有登录,则跳转到登录
    // store.state.user.user._id---->登录了
    if (!store.state.user.user._id) {
      router.push('/login')
    }


  }







  next()
})
export default router



// // 实例化路由器对象并暴露
// const router = new VueRouter({
//   mode: 'history', // 干掉地址栏上的#符号
//   routes
// })
// const paths = ['/goone', '/gotwo']
// router.beforeEach((to, from, next) => {
//   // to---对象---即将要进入的目标对象
//   // from--对象--当前导航正要离开的路由
//   // 放行
//   // 如果访问的地址是goone或者gotwo,则跳转到登录界面
//   if (paths.indexOf(to.path) !== -1) {
//     // router.push('/login')

//     // 如果没有登录则去登录
//     if (!store.state.user.user._id) {
//       router.push('/login')
//     }
//   }

//   next()

// })
// export default router
