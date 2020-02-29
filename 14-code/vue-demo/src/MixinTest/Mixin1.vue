<template>
  <div>
    <p>{{name1}}</p>
    <p>{{name2}}</p>
    <p>{{length}}</p>
  </div>
</template>
<script>
// 引入Mixin混合文件
import mixin from './mixin.js'
export default {
  // 注册混合
  mixins: [mixin],
  data () {
    return {
      name2:'华哥'
    }
  }
 
}
</script>
<style scoped>
</style>