// 包含多个间接修改状态数据的方法的对象
// 引入mutation-typs
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from './mutation-types.js'
// 引入api
import { reqAddress, reqCategorys, reqShopList } from '../api/index.js'
export default {
  // 获取地址信息
  async getAddress ({ state, commit }) {
    const { longitude, latitude } = state
    const result = await reqAddress({ longitude, latitude })
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  // 获取食品分类信息
  async getCategorys ({ commit },fn) {
    const result = await reqCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
      if(typeof fn==='function'){
        fn()
      }
    }
  },
  // 获取商铺信息
  async getShops ({ state, commit }) {
    const { longitude, latitude } = state
    const result = await reqShopList({ longitude, latitude })
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}
