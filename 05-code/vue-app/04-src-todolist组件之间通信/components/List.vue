<template>
  <ul class="todo-main">
    <Item
      v-for="(todo,index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
    />
  </ul>
</template>
<script>
// 引入Item组件
import Item from './Item.vue'
export default {
  // 父级组件传入到子级组件中的数据,进行配置
  props: ['todos'],
  name: 'List',
  // 注册组件
  components: {
    Item
  }
}
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
