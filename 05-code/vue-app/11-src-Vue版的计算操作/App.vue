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
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    increment() {
      this.count++
    },
    deincrement() {
      this.count--
    },
    incrementIfOdd() {
      if (this.count % 2 !== 0) {
        this.count++
      }
    },
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
