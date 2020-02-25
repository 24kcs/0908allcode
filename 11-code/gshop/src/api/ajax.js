// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 引入store
import store from '../store'
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
  alert(error)
  // 中断错误消息
  return new Promise(() => { })
})
// 向外暴露axios
export default axios
