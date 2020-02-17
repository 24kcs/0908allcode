// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入mutation-types
import { INCREMENT, DECREMENT } from './mutation-types.js'
// 声明使用Vuex
Vue.use(Vuex)
// 包含了多个状态数据的对象
const state = {
  count: 0
}
// 包含了多个直接修改状态数据的方法的对象
const mutations = { // 这里的每个方法都可以叫mutation
  // 同步操作的修改状态数据
  // 每个mutation都有自己的方法名,也可以这么说,每个方法名就是这个mutation的类型,类型就是type,所以,每个mutation都有自己的type(就是方法名字)
  [INCREMENT] (state) { // 加的操作
    state.count++
  },
  [DECREMENT] (state) { // 减的操作
    state.count--
  }
}
// 包含了多个间接修改状态数据的方法的对象
const actions = { // 这里的每个方法都可以叫action
  // 异步修改状态数据的方法或者是同步修改状态数据的方法
  // 加的操作
  increment (context) {
    // 找到mutations中的INCREMENT,进行使用
    context.commit(INCREMENT)
  },
  // 减的操作
  deincrement ({ commit }) {
    commit(DECREMENT)
  },
  // 奇数的时候做加的操作
  incrementIfOdd ({ commit, state }) {
    if (state.count % 2 !== 0) {
      commit(INCREMENT)
    }
  },
  // 异步的加法操作
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit(INCREMENT)
    }, 1000);
  }
}
// 包含了多个状态数据的计算属性的getter方法的对象
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

// 实例化Vuex对象,并暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})