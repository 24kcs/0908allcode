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
import msite from './modules/msite.js'
import user from './modules/user.js'
import shop from './modules/shop.js'
// 声明使用Vuex
Vue.use(Vuex)
// 实例化Vuex的对象,并暴露出去
export default new Vuex.Store({
  state, // 总的state
  mutations, // 总的mutations
  actions, // 总的actions
  getters, // 总的getters
  modules: {
    msite,
    user,
    shop
  }
})

// Vuex中抽取模块,如何抽取?
/**
 * 1. 按照组件的方式进行抽取----哪个组件用到了哪些数据,可以按照这个组件的名字来抽取模块,模块的名字就是组件的名字(小写名字)
 * 2. 按照功能的方式进行抽取----哪个功能用到了哪些数据,可以按照这个功能的名字来抽取模块,模块名字就是功能的名字
 *
 *
 *
 *
 *
 * 3. 按照使用的内容开始抽取-- 哪个使用方式用到一些数据,可以按照使用方式的名字来抽取模块
 * 4. 我愿意,我喜欢
 *
 *
 *
 */

// 如果总的actions中的方法名字和子的actions中的方法名字同名了,将来调用的是谁


// // 实例化Vuex的对象,并暴露出去
// const store= new Vuex.Store({
//   state, // 总的state
//   mutations, // 总的mutations
//   actions, // 总的actions
//   getters, // 总的getters
//   modules:{
//     // 别名:前面的user是模块的名字---->后面的user指的是模块
//     // user:user  // 子的模块
//     user
//   }
// })
// export default store


// const user={
//   // 子级的state
//   state:{
//     name:'小明',
//     user:{_id:1,name:'小黑'}
//   },
//   mutations:{},
//   actions:{
//     xxx(){
//       console.log('哈哈')
//     }
//   },
//   getters:{}
// }
// this.$store.dispatch('xxx)
// 第一个user指的是模块的名字,第二个user指的是user对象(模块中的user对象)
// store.state.user.user.name
// store.state.user.name
