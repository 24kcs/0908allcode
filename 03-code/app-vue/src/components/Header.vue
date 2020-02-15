<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.13="add" v-model="title" />
  </div>
</template>
<script>
// import Vue from 'vue'
export default {
  // 设置当前组件名字
  name: 'Header',
  // 接收传递过来的方法
  // props: {
  //   addTodo: {
  //     type: Function, // 设置类型
  //     required: true // 当前的这个方法是必须地
  //   }
  // },
  data() {
    return {
      title: '' // 用来存储文本框中输入的数据
    }
  },
  // 写方法的地方
  methods: {
    add() {
      // 获取文本框的数据
      const title = this.title.trim()
      // 判断文本框中的数据是否为空
      if (title) {
        const todo = {
          id: Date.now(),
          title,
          isCompleted: false
        }
        // 调用App组件中传递过来的addTodo方法,并传入一个todo对象
        // this.addTodo(todo)
        // 手动分发addTodo事件,并传入参数todo对象
        this.$emit('addTodo', todo)
        // console.log(this.__proto__.__proto__ === Vue.prototype)

        this.title = '' // 清空文本框
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
