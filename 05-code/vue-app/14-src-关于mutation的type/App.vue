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
// 引入Vuex
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
// 引入mutation-types
import { INCREMENT, DECREMENT } from './vuex/mutation-types.js'
export default {
  name: 'App',
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  computed: {
    // count() {
    //   return this.$store.state.count
    // },
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapState(['count']),
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    // increment() {
    //   this.$store.commit('INCREMENT')
    // },
    // deincrement() {
    //   this.$store.commit('DECREMENT')
    // },
    ...mapMutations({ increment: INCREMENT, deincrement: DECREMENT }),
    ...mapActions(['incrementIfOdd', 'incrementAsync'])
    // incrementIfOdd() {
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync')
    // }
  }
}
// // 拆包
// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [...arr1]
// console.log(arr2)
// // 打包
// function f1(...args) {
//   console.log(args)
// }
// f1(1, 2, 3, 4, 5, 6)
</script>
<style scoped>
</style>
