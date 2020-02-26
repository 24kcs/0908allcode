// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入state
import state from './state.js'
// 引入mutations
import mutations from './mutations.js'
// 引入actions
import actions from './actions.js'
// 引入getters
import getters from './getters.js'
// 引入模块
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'
// 声明使用Vuex
Vue.use(Vuex)
// 实例化Vuex的对象,并暴露出去
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    msite,
    user,
    shop
  }
})
