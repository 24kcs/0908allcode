// 引入About组件
import About from '../pages/About.vue'
// 引入Home组件
import Home from '../pages/Home.vue'
// 引入News组件
import News from '../pages/News.vue'
// 引入Message组件
import Message from '../pages/Message.vue'
// 引入MessageDetail
import MessageDetail from '../pages/MessageDetail.vue'
export default [
  // 这里的每个对象,都是路由对象,每个组件都进行了路由的配置后,就变成了路由组件
  {
    path: '/about',
    component: About
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/news',
        component: News
      },
      {
        path: '/home/message',
        component: Message,
        children: [
          {
            path: '/home/message/detail/:id',
            component: MessageDetail
          }
        ]
      },
      {
        path: '/home',
        redirect: '/home/news'
      }
    ]
  },
  // 重定向操作
  {
    path: '/',
    redirect: '/about'
  }
]
