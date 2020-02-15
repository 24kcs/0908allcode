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
      repUrl: '',
      repName: ''
    }
  },
  mounted() {
    // 界面渲染后就发送异步请求
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`
    // 通过axios调用方法实现异步操作
    axios
      .get(url)
      .then(repsonse => {
        const result = repsonse.data.items[0]
        // 更新状态数据
        this.repUrl = result.html_url
        this.repName = result.name
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
</style>
