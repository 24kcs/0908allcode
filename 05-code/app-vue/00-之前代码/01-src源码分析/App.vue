<!--html的模版代码-->
<template>
<!--这里只能有一对根标签,所有的标签都要放在这对根标签中书写-->
  <div id="app">
    <img src="./assets/logo.png">
    <!--这个是组件,组件的使用就相当于是标签使用,把组件当成标签使用即可
      1.组件当成标签使用的时候,什么时候用当个的写法,什么时候用成对的写法?
      这个组件标签中没有任何内容(不包括什么内容)此时使用当个,但是一定要有结束符号
       <HelloWorld/>
      这个组件标签中需要包括其他的内容(标签)这个时候用成对的
      <HelloWorld> <p>哈哈<p> </HelloWorld>
      2.组件当成标签使用的时候,大小写是否需要区分
      大写或者小写都可以,但是推荐使用大写的形式
    -->
    <HelloWorld/>
  </div>
</template>

<script>
// 引入components目录中的HelloWorld.vue文件--->引入一个子级的组件, .vue后缀可以省略
import HelloWorld from './components/HelloWorld'
// 向外暴露一个对象--->整个这个文件就是一个组件,向外暴露出去的就是一个组件对象
export default {
  // 当前这个组件的名字，可以不写,建议写上
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
