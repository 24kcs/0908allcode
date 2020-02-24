// 引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 先获取method对象,data对象,解构method和data
  const { method, data } = config
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把data对象转urlEncoding的形式
    config.data = qs.stringify(data)
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
