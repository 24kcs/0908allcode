<!--html的模版代码-->
<template>
  <div>
    铭哥
    <Hello/>
  </div>
</template>
<script>
// JS的代码
// 引入Hello这个子级组件
import Hello from './components/Hello.vue'
// 向外暴露对象
export default {
  // 设置当前组件的名字
  name: 'App',
  // 注册组件
  components: {
    Hello
  }
}
</script>
<style>
  div{
    color: red;
  }
</style>
