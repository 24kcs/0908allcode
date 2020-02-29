<template>
  <div>
   
    <button @click="$emit('click','showMsg3')">组件2中的第一个按钮</button>
    <button @click="$emit('xxx','showMsg4')">组件2中的第二个按钮</button>
  
    
  
  <button @click="showMsg">修改组件1中的数据</button>
  </div>
</template>
<script>
export default {
  methods: {
   showMsg(){
     this.$bus.$emit('xx','哈哈')
   }
  }
}
</script>
<style scoped>
</style>