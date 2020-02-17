<template>
  <div>
    <h2 v-if="!repUrl">正在加载中...</h2>
    <h2 v-else>
      Most Star is
      <a :href="repUrl">{{repName}}</a>
    </h2>
  </div>
</template>
<script>
// 引入axios
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      repUrl: '', // 获取到的地址
      repName: '' // 获取到的名字
    }
  },
  // 页面渲染完毕后的生命周期函数
  mounted() {
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    // 发送异步请求,获取名字及这个名字对应的链接地址
    axios
      .get(url)
      .then(response => {
        const result = response.data.items[0]
        // 更新状态数据
        this.repUrl = result.html_url
        this.repName = result.name
      })
      .catch(error => {
        console.log(error)
      })
  }

  // 在Vue中发送异步请求
  /**
   * 方式1: 原来的方式
   *  vue-resource
   *  先根据命令安装,然后需要在main.js中引入,之后声明使用插件
   * 方式2: 现在推荐使用的方式
   *  axios
   * Vue是一个渐进式的JS框架
   * 渐进式:本身实现的功能是有限的,但是可以使用相关的插件包,完成,更多的功能
   */
}
</script>
<style scoped>
</style>
