// 引入axios
import axios from 'axios'
// 引入mutation的type
import { REQUEST, REQ_SUCCESS, REQ_ERROR } from './mutation-types.js'
// 包含了多个间接修改状态数据方法的对象
export default {
  // 发送异步请求修改状态数据
  async search ({ commit }, searchName) {
    // 发送异步请求了
    const url = `https://api.github.com/search/users`
    // 第一次更改状态数据
    commit(REQUEST)
    try {
      // 根据地址和参数进行异步请求
      const response = await axios.get(url, {
        params: {
          q: searchName
        }
      })
      // 遍历数据,并返回每个对象,并存储到users数组中(每个对象我只要三个属性)
      // avatar_url,login,html_url
      console.log(response.data.items)
      const users = response.data.items.map(user => ({
        login: user.login,
        html_url: user.html_url,
        avatar_url: user.avatar_url
      }))

      // 第二次更新状态数据
      commit(REQ_SUCCESS, users)
    } catch (error) {
      // 再次更新状态数据
      commit(REQ_ERROR, error)
    }
  }
}
