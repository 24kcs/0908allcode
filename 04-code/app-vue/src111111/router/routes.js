// 引入About组件
import About from '../pages/About.vue'
// 引入Home组件
import Home from '../pages/Home.vue'
// 引入News组件
import News from '../pages/News.vue'
// 引入Message组件
import Message from '../pages/Message.vue'
// 引入MessageDetail组件
import MessageDetail from '../pages/MessageDetail.vue'
export default [
  // 一个组件就是一个对象,有一个地址就会对应这个组件,在一个对象中进行配置,一个路由就是一个对象
  // 组件通过配置进行路由的注册,此时,这个组件就不是普通的组件了,叫路由组件
  {
    path: '/about', // 路径
    component: About // 组件名字
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
            path: '/home/message/detail/:id', // 为了让路径简短一些,可以改名
            component: MessageDetail,
            props: (route) => ({ id: route.params.id })
          }
        ]
      },
      {
        path: '/home',
        redirect: '/home/news'
      }
    ]
  },
  {
    path: '/',
    redirect: '/about' // 路由的重定向
  }
]
