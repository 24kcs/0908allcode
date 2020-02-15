<template>
  <h2 v-if="firstView">请输入搜索内容...</h2>
  <h2 v-else-if="loading">正在加载中...</h2>
  <h2 v-else-if="errorMsg">请求失败,错误信息为:{{errorMsg}}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
</template>
<script>
// 引入axios
import axios from 'axios'
export default {
  name: 'Main',
  // 状态数据
  data() {
    return {
      firstView: true, // 默认没有搜索的时候的状态
      loading: false, // 加载的时候的状态
      errorMsg: '', // 错误信息
      users: [] // 用来存储搜索到的用户对象
    }
  },
  // 界面渲染后
  mounted() {
    // 通过事件总线,绑定事件
    this.$bus.$on('search', async searchName => {
      // 这里会用到外部的this对象,所以,使用箭头函数更方便
      // 设置地址
      const url = `https://api.github.com/search/users`
      // 如果代码执行到这里,说明开始发送异步请求了,此时修改状态数据
      this.firstView = false
      this.loading = true
      try {
        const response = await axios.get(url, {
          params: {
            q: searchName
          }
        })
        const users = response.data.items.map(user => ({
          login: user.login,
          html_url: user.html_url,
          avatar: user.avatar
        }))
        // 更新数据
        this.loading = false
        this.users = users
      } catch (error) {
        // 更新状态数据
        this.loading = false
        this.errorMsg = error
      }
    })
  }
}
</script>
<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
