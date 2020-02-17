<template>
  <div>
    <h2>点击次数:{{count}},奇数or偶数:{{evenOrOdd}}</h2>
    <button @click="increment">increment</button>
    <button @click="deincrement">deincrement</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
// 此案例在用不同的方式改变数据的状态
// 引入Vuex中的辅助函数
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// 引入mutation-types
import { INCREMENT, DECREMENT } from './vuex/mutation-types.js'
export default {
  name: 'App',
  computed: {
    // count(){
    //   return this.$store.state.count
    // },
    // evenOrOdd(){
    //   return this.$store.getters.evenOrOdd
    // }
    // 'count':function(){}
    // 拆包操作
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  // mounted() {
  //   console.log(this)
  // },
  methods: {
    // 加的操作
    // increment() {
    //   this.$store.commit('INCREMENT') // 找的就是mutation
    // },
    // // 减的操作
    // deincrement() {
    //   this.$store.commit('DECREMENT')
    // },
    ...mapMutations({
      increment: INCREMENT,
      deincrement: DECREMENT
    }),
    ...mapActions(['incrementIfOdd', 'incrementAsync'])
    // // 奇数的时候做加的操作
    // incrementIfOdd() {
    //   this.$store.dispatch('incrementIfOdd') // 找的就是action
    // },
    // // 异步的加法操作
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync')
    // }
  }
}

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [...arr1] // 拆包
// console.log(arr2)

// function f1(...args){ // 打包
//   console.log(args)
// }
// f1(1,2,3,4,5,6,7)
</script>
<style scoped>
</style>
