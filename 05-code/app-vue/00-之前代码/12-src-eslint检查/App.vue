<template>
  <div>
    <h2>测试</h2>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    // 1到5的随机数
    var num = Math.floor(Math.random() * 23+1)
    console.log('今晚作业多写一遍的编号是:'+num)
  }
}
</script>
<style scoped>
</style>