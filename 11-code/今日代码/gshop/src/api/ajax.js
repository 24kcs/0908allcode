// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 引入store
import store from '../store'
// 引入router
import router from '../router'
// 引入Toast
import { Toast } from 'mint-ui'
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 先获取method对象,data对象,解构method和data
  const { method, data } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把data对象转urlEncoding的形式
    config.data = qs.stringify(data)
  }
  // 通过config中获取headers中needToken属性,是否需要携带token
  if (config.headers.needToken) {
    // 该接口需要携带token
    // 取出token----------此处的token将来在user模块中
    const token = store.state.token
    if (!token) {
      // 没有token
      const error = new Error('没有token,请重新登录')
      error.status = 401
      throw error // 抛出错误信息
    } else {
      // 有token
      config.headers.authorization = token
    }
  }
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  // 判断当前的错误信息是请求的还是响应的
  if (!error.response) {
    // 请求的时候的错误
    if (error.status === 401) {
      // 如果不是login界面则进行跳转,提示登录
      if (router.currentRoute.path !== '/login') {
        // 提示错误信息,并跳转
        Toast(error.message)
        router.replace('/login')
      }
    }
  } else {
    // 响应的时候的错误
    // 获取响应的时候的错误码
    const status = error.response.status
    if (status === 401) {
      // token过期了,跳转到login界面
      if (router.currentRoute.path !== '/login') {
        // 提示错误信息
        Toast(error.response.data.message)
        // 重置token
        store.dispatch('resetLogin')
        // 跳转界面
        router.replace('/login')
      }
    } else if (status === 404) {
      Toast('没有资源')
    } else {
      Toast('请求错误:' + error.message)
    }
  }
  // 中断错误消息
  return new Promise(() => { })
})
// 向外暴露axios
export default axios
