<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :toggleTodo="toggleTodo" />
      <Footer :todos="todos" :checkAllTodos="checkAllTodos" />
    </div>
  </div>
</template>
<script>
// 引入Header组件
import Header from './components/Header.vue'
// 引入List组件
import List from './components/List.vue'
// 引入Footer组件
import Footer from './components/Footer.vue'
// 引入封装之后的工具对象
import Storage from './utils/utils.js'
export default {
  // 设置当前组件的名字
  name: 'App',
  // 注册组件
  components: {
    Header,
    List,
    Footer
  },
  // 数据
  data() {
    return {
      // todos: [
      //   { id: 1, title: '铭哥', isCompleted: false },
      //   { id: 2, title: '华哥', isCompleted: true },
      //   { id: 3, title: '健哥', isCompleted: false }
      // ]
      // todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
      todos: Storage.getTodos()
    }
  },
  // 写方法的地方
  methods: {
    // 添加数据的方法
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    // 删除数据的方法
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    // 设置内容选中的一个操作----权限操作
    toggleTodo(todo) {
      todo.isCompleted = !todo.isCompleted
    },
    // 设置全选和全不选的操作
    checkAllTodos(flag) {
      this.todos.forEach(todo => {
        todo.isCompleted = flag
      })
    }
  },
  // 监视---如果todos中的数据变化了,那么就进行缓存数据的操作
  watch: {
    // 对象的方式书写监视的代码
    todos: {
      deep: true, // 深度监视
      // handler: function(val) {
      //   // 监视的时候做相关操作的方法---代码在这里写
      //   // 缓存数据
      //   // localStorage.setItem('todos_key', JSON.stringify(this.todos))
      //   // Storage.setTodos(val)
      // }
      handler: Storage.setTodos
    }
  }
}
// 使用脚手架组件化的方式实现todolist案例
// 拆分组件
// function f1(){}
// console.log(f1())
</script>
<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
