<template>
  <div>这是子级组件</div>
</template>
<script>
export default {
  name: 'Hello'
}
// 注意问题:scoped 是范围的意思,如果子级组件中没有这个scoped那么会影响到父级组件的样式
</script>
<style scoped>
div {
  color: red;
}
</style>
