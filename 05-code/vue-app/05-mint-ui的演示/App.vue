<template>
  <div>
    哈哈
    <mt-button type="primary" style="width:100%" @click="showMsg">显示效果</mt-button>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
  methods: {
    showMsg() {
      MessageBox({
        title: '提示',
        message: '确定执行此操作?',
        showCancelButton: true
      })
    }
  }
}
</script>
<style >
</style>
