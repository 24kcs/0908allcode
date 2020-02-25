// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 引入store
import store from '../store'
// 引入Toast,在mint-ui中
import { Toast } from 'mint-ui'
// 引入路由器对象---涉及到跳转的问题
import router from '../router'
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 先获取method对象,data对象,解构method和data
  const { method, data } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把data对象转urlEncoding的形式
    config.data = qs.stringify(data)
  }
  // 通过config对象获取headers中needToken属性的值,判断是否需要携带token
  if (config.headers.needToken) {
    // 取出token========================此处token将来会在user模块中,需要重新改代码
    const token = store.state.token
    // 判断token是否存在
    if (!token) {
      // 没有token
      const error = new Error('没有token,请重新登录')
      error.status = 401 // 错误码
      throw error // 抛出错误消息
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
  // 处理请求的时候的错误消息及响应的时候的错误消息
  // 判断当前的错误消息是请求的还是响应的
  if (!error.response) {
    // 请求的时候的错误消息
    if (error.status === 401) {
      // 判断如果此时不是login界面,进行跳转，提示登录
      if (router.currentRoute.path!== '/login') {
        // 提示的错误信息,并跳转
        Toast(error.message)
        // 跳转
        router.replace('/login')
      }
    }
  } else {
    // 响应的时候的错误消息
    // 获取响应的时候的错误码
    const status = error.response.status
    if (status === 401) {
      // token过期,跳转到login
      if (router.currentRoute.path!== '/login') {
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
