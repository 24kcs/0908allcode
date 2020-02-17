<!--html模版-->
<template>
<!--根标签只有一对-->
  <div id="app">
    <img src="./assets/logo.png">
    <!--组件当标签使用,小写可以,但是推荐大写,组件不包含任何内容写一个,包含其他内容写成对的-->
    <HelloWorld/>
  </div>
</template>

<script>
// 引入组件
import HelloWorld from './components/HelloWorld'
// 向外暴露组件对象
export default {
  // 当前组件的名字
  name: 'App',
  // 注册组件
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
