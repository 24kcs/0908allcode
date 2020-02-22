import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 脚手架3中的代码
new Vue({
  // 根据组件,来创建对应的DOM节点,然后最终挂载到#app的容器中
  render: h => h(App),
}).$mount('#app')

// render:function(createElement){
//   return createElement(App)
// }

// render:(createElement)=>{
//   return createElement(App)
// }
// render:(h)=>{
//   return h(App)
// }

// render:(h)=>h(App)





// 脚手架2 中的代码
// new Vue({
//   el:'#app',
//   components:{
//     App
//   },
//   template:'<App/>'
// })