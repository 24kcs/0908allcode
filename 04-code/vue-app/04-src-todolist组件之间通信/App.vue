<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header @addTodo="addTodo" />
        <List :todos="todos" />
        <Footer :todos="todos" :checkAllTodos="checkAllTodos">
          <label slot="left">
            <input type="checkbox" v-model="checkAll" />
          </label>
          <span slot="center">
            <span>已完成{{count}}</span>
            / 全部{{todos.length}}
          </span>
          <button class="btn btn-danger" v-show="count>0" slot="right">清除已完成任务</button>
        </Footer>
      </div>
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
// 引入utils工具对象
import storage from './utils/utils.js'
// 引入PubSub
import PubSub from 'pubsub-js'
export default {
  // 设置当前组件名字
  name: 'App',
  // 数据
  data() {
    return {
      // todos: [
      //   { id: 1, title: '宝马', isCompleted: false },
      //   { id: 2, title: '奔驰', isCompleted: true },
      //   { id: 3, title: '奥迪', isCompleted: false }
      // ]
      // todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
      todos: storage.getTodos()
    }
  },
  // 注册组件
  components: {
    Header,
    List,
    Footer
  },
  methods: {
    // 添加数据操作的方法
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    // 删除数据操作方法
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
    // 设置内容选中操作--权限的操作
    toggleTodo(todo) {
      todo.isCompleted = !todo.isCompleted
    },
    // 设置全选操作
    checkAllTodos(flag) {
      this.todos.forEach(todo => {
        todo.isCompleted = flag
      })
    }
  },
  // 通过监视,进行缓存数据
  watch: {
    todos: {
      deep: true, // 深度监视
      // handler: function() {
      //   localStorage.setItem('todos_key', JSON.stringify(this.todos))
      // }
      handler: storage.setTodos
    }
  },
  // 界面加载后的生命周期函数
  mounted() {
    // 消息订阅,进行组件之间通信
    this.token = PubSub.subscribe('deleteTodo', (msg, data) => {
      // console.log(msg, data)
      this.deleteTodo(data)
    })
    // 事件总监的方式进行组件之间通信
    this.$bus.$on('toggleTodo', todo => {
      this.toggleTodo(todo)
    })
  },
  // 实例对象销毁之前
  beforeDestroy() {
    // 取消消息订阅
    PubSub.unsubscribe(this.token)
    // 解绑事件
    this.$bus.$off()
  },
  computed: {
    count() {
      return this.todos.reduce(
        (pre, todo) => pre + (todo.isCompleted ? 1 : 0),
        0
      )
    },
    // 是否全选
    checkAll: {
      get() {
        return this.count === this.todos.length && this.count > 0
      },
      set(val) {
        this.checkAllTodos(val)
      }
    }
  }
}
</script>
<style scoped>
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
