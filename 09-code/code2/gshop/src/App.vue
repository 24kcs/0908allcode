<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter" />
  </div>
</template>
<script>
// 引入FooterGuide组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import { reqAddress, reqCategorys, reqShopList } from './api'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  async mounted() {
    // 界面渲染后,发送请求,获取地址信息
    this.$store.dispatch('getAddress')
    // this.$store.dispatch('getCategorys')
    // this.$store.dispatch('getShops')
    // const result1 = await reqAddress({
    //   longitude: '116.36867',
    //   latitude: '40.10038'
    // })
    // const result2 = await reqCategorys()
    // const result3 = await reqShopList({
    //   longitude: '116.36867',
    //   latitude: '40.10038'
    // })
    // console.log(result1)
    // console.log(result2)
    // console.log(result3)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
