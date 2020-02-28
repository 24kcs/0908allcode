<template>
  <div>
    <h2>具名插槽(命名插槽)</h2>
   <slot name="top"></slot>
   <p>如果有一天邪恶了,请记住,我曾纯洁过</p>
   <slot name="bottom"></slot>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
</style>