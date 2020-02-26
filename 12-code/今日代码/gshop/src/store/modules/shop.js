import { RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO, ADD_FOOD_COUNT, REDUCE_FOOD_COUNT } from '../mutation-types.js'
// 引入接口
import { reqGoods, reqRatings, reqInfo } from '../../api'
// 引入Vue
import Vue from 'vue'
const state = {

  // 点餐信息
  goods: [],
  // 评价信息
  ratings: [],
  // 商家信息
  info: {},
  // 用来存储购物车中的食物的
  cartFoods: []
}
const mutations = {

  // 更新点餐信息
  [RECEIVE_GOODS] (state, { goods }) {
    state.goods = goods
  },
  // 更新评价信息
  [RECEIVE_RATINGS] (state, { ratings }) {
    state.ratings = ratings
  },
  // 更新商家信息
  [RECEIVE_INFO] (state, { info }) {
    state.info = info
  },

  // 增加食物
  [ADD_FOOD_COUNT] (state, { food }) {
    // 判断食物的数量是否有值
    if (!food.count) {
      // 由于该属性不是响应式数据,所以,没有效果
      Vue.set(food, 'count', 1)
      // 立刻把食物对象添加到数组中
      state.cartFoods.push(food)
      // food.count = 1
    } else {
      food.count++
    }
  },

  // 减少食物
  [REDUCE_FOOD_COUNT] (state, { food }) {
    if (food.count > 0) {
      food.count--
      // 判断 如果食物的数量为0则删除
      if (food.count === 0) {
        // 从食物数组中删除当前添加的食物
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  }
}
const actions = {

  // 获取点餐信息
  async getGoods ({ commit }) {
    // 调用接口
    const result = await reqGoods()
    // 判断是否获取成功
    if (result.code === 0) {
      const goods = result.data
      // 调用mutation更新数据
      commit(RECEIVE_GOODS, { goods })
    }
  },
  // 获取评价信息
  async getRatings ({ commit }) {
    // 调用接口
    const result = await reqRatings()
    // 判断
    if (result.code === 0) {
      const ratings = result.data
      // 调用mutation更新数据
      commit(RECEIVE_RATINGS, { ratings })
    }
  },
  // 获取商家信息
  async getInfo ({ commit }) {
    // 调用接口
    const result = await reqInfo()
    // 判断
    if (result.code === 0) {
      const info = result.data
      // 调用mutation提交
      commit(RECEIVE_INFO, { info })
    }
  },
  // 更新食物的数量--增加或者减少
  updateFoodCount ({ commit }, { isAdd, food }) {
    if (isAdd) {
      // 增加
      commit(ADD_FOOD_COUNT, { food })
    } else {
      // 减少
      commit(REDUCE_FOOD_COUNT, { food })
    }
  }
}
const getters = {
  // 总数量
  totalCount (state) {
    return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
  },
  // 总价格
  totalPrice () {
    return state.cartFoods.reduce((pre, food) => pre + food.count * food.price, 0)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
