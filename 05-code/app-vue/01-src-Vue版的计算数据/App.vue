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
export default {
  name: 'App',
  data() {
    return {
      count: 0 // 状态数据
    }
  },
  computed: {
    // get的操作
    evenOrOdd() {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    // 加的操作
    increment() {
      this.count++
    },
    // 减的操作
    deincrement() {
      this.count--
    },
    // 奇数的时候做加的操作
    incrementIfOdd() {
      if (this.count % 2 !== 0) {
        this.count++
      }
    },
    // 异步的加法操作
    incrementAsync() {
      setTimeout(() => {
        this.count++
      }, 1000)
    }
  }
}
</script>
<style scoped>
</style>
