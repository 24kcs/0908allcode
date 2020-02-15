<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.13="add" />
  </div>
</template>
<script>
export default {
  // props: {
  //   addTodo: {
  //     type: Function,
  //     required: true // 是否是必须的
  //   }
  // },
  name: 'Header',
  data() {
    return {
      title: '' // 用来获取文本框中的数据
    }
  },
  methods: {
    add() {
      // 获取文本框中的数据
      const title = this.title.trim()
      if (title) {
        const todo = {
          id: Date.now(),
          title,
          isCompleted: false
        }
        // this.addTodo(todo)
        // 手动分发事件
        this.$emit('addTodo', todo)
        console.log(this)
        // 清空文本框
        this.title = ''
      }
    }
  }
}
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
