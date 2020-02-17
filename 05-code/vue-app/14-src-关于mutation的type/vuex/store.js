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
// 包含了多个直接修改状态数据方法的对象
const mutations = { // 这里的每个方法都可以叫mutation
  // 每个方法的都可叫mutation,每个mutation都有自己的类型,类型就是方法名字,类型就叫type,所以,每个mutation都有自己的type,一般这些type都会在一个js文件中定义成一个常量,然后在使用的文件引入即可
  // 加的操作
  [INCREMENT] (state) {
    state.count++
  },
  // 减的操作
  [DECREMENT] (state) {
    state.count--
  }
}
// 包含了多个间接修改状态数据方法的对象
const actions = { // 这里的每个方法都可以叫action
  increment (context) { // 调用加的操作
    context.commit(INCREMENT)
  },
  deincrement ({ commit }) { // 调用减的操作
    commit(DECREMENT)
  },
  incrementIfOdd ({ commit, state }) { // 调用加的操作
    if (state.count % 2 !== 0) {
      commit(INCREMENT)
    }
  },
  incrementAsync ({ commit }) { // 调用加的操作
    setTimeout(() => {
      commit(INCREMENT)
    }, 1000)
  }
}
// 包含了多个状态数据的计算属性的get方法的对象
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
