// 引入mutation-types
import { REQUEST, REQ_SUCCESS, REQ_ERROR } from './mutation-types.js'
// 引入axios
import axios from 'axios'
// 包含多个间接修改状态数据的方法的对象
export default {
  async search ({ commit }, searchName) {
    // 设置地址
    const url = `https://api.github.com/search/users`
    // 如果代码执行到这里,说明开始发送异步请求了,此时修改状态数据
    commit(REQUEST)
    try {
      // 发送异步请求
      const response = await axios.get(url, {
        params: {
          q: searchName
        }
      })
      const users = response.data.items.map(user => ({
        login: user.login,
        html_url: user.html_url,
        avatar: user.avatar
      }))
      // 更新数据
      commit(REQ_SUCCESS, users)
    } catch (error) {
      // 更新状态数据
      commit(REQ_ERROR, error)
    }
  }
}
