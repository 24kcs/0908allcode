// 引入mutation的type
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from '../mutation-types.js'
// 引入接口
import { reqAddress, reqCategorys, reqShopList } from '../../api'
const state = {

  // 经度
  longitude: '116.36867',
  // 纬度
  latitude: '40.10038',
  // 地址信息
  address: {},
  // 食品分类信息
  categorys: [],
  // 商铺信息
  shops: []
}
const mutations = {
  // 更新地址信息
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  // 更新食品分类信息
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  // 更新商铺列表信息
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
}
const actions = {
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
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}