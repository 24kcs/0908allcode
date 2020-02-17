<template>
  <div>
    这是父级组件
    <!--使用组件-->
    <Hello />
  </div>
</template>
<script>
// 引入组件
import Hello from './components/Hello.vue'
export default {
  // 设置当前组件名字
  name: 'App',
  // 注册组件
  components: {
    Hello
  }
}
</script>
<style>
div {
  color: green;
}
</style>
