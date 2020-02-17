<template>
  <div>
    <h2>点击次数:{{$store.state.count}},奇数or偶数:{{$store.getters.evenOrOdd}}</h2>
    <button @click="increment">increment</button>
    <button @click="deincrement">deincrement</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  // computed: {
  //   evenOrOdd() {
  //     return this.count % 2 === 0 ? '偶数' : '奇数'
  //   }
  // },
  methods: {
    increment() {
      this.$store.commit('INCREMENT')
    },
    deincrement() {
      this.$store.commit('DECREMENT')
    },
    incrementIfOdd() {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>
<style scoped>
</style>
