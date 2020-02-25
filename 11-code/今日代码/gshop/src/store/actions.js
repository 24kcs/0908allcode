// 包含了多个间接修改状态数据的方法的对象

// 引入mutation的type
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER, RECEIVE_TOKEN, RESET_USER, RESET_TOKEN, RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO } from './mutation-types.js'
// 引入接口
import { reqAddress, reqCategorys, reqShopList, reqAutoLogin, reqGoods, reqRatings, reqInfo } from '../api'
export default {

  // 获取地址信息
  async getAddress ({ state, commit }) {
    // 获取经纬度
    const { longitude, latitude } = state
    // 调用接口发送异步请求
    const result = await reqAddress({ longitude, latitude })
    // 判断响应的数据是否成功
    if (result.code === 0) {
      // 成功了获取数据
      const address = result.data
      // 向mutation提交,传入对应的地址信息
      commit(RECEIVE_ADDRESS, address)
    }
  },
  // 获取食品分类信息
  async getCategorys ({ commit }, cb) {
    // 调用接口发送异步请求
    const result = await reqCategorys()
    // 判断响应的数据是否成功
    if (result.code === 0) {
      // 获取数据
      const categorys = result.data
      // 向mutation提交,传入对应的食品信息
      commit(RECEIVE_CATEGORYS, categorys)
      typeof cb === 'function' && cb()
    }
  },
  // 获取商铺列表信息
  async getShops ({ state, commit }) {
    // 获取经纬度
    const { longitude, latitude } = state
    // 调用接口,发送异步请求
    const result = await reqShopList({ longitude, latitude })
    // 判断响应的数据是否成功
    if (result.code === 0) {
      // 获取数据
      const shops = result.data
      // 向mutation提交,传入对应的商铺信息
      commit(RECEIVE_SHOPS, shops)
    }
  },





  // 保存用户信息和token信息
  saveUser ({ commit }, user) {
    // 获取token信息
    const token = user.token
    // 保存token到vuex中
    commit(RECEIVE_TOKEN, token)
    // 保存token到localStorage中
    localStorage.setItem('token_key', token)
    // 删除user中的token
    delete user.token
    // 保存user到vuex中
    commit(RECEIVE_USER, user)

  },
  // 退出操作,重置user信息和token信息
  resetLogin ({ commit }) {
    // 重置用户信息
    commit(RESET_USER)
    // 重置token信息
    commit(RESET_TOKEN)
    // 清空localStorage
    localStorage.removeItem('token_key')
  },
  // 自动登录
  async autoLogin ({ commit, state }) {
    // 先获取token,并判断是否存在
    if (state.token) {
      const result = await reqAutoLogin()
      if (result.code === 0) {
        // 获取user信息
        const user = result.data
        console.log(user)
        commit(RECEIVE_USER, user)
      }
    }
  },


  // 获取点餐信息
  async getGoods ({ commit }) {
    const result = await reqGoods()
    if (result.code == 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, { goods })
    }
  },
  // 获取评价信息
  async getRatings ({ commit }) {
    const result = await reqRatings()
    if (result.code == 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, { ratings })
    }
  },
  // 获取商铺信息
  async getInfo ({ commit }) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, { info })
    }
  }
}
