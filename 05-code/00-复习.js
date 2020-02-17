/**
 * 
 * MINT_UI---组件库----一般用在移动端(配合Vue使用的)
 * Element-UI---组件库---一般用在PC端(配合Vue使用的)
 * 
 * 1. 在Vue中做异步操作,发送异步请求
 *  1) vue-resource----插件,
 *  使用: 首先要下载,npm install vue-resource
 *  在main.js中引入vue-resource
 *  声明使用这个插件Vue.use(VueResource)
 * 此时会在每个组件对象中出现一个$http对象
 * .get().then().catch()方法---发送异步请求
 * 2) axios
 *  使用:首先要下载,npm install axios
 *  在某个想要执行异步操作的组件中,引入axios
 *  response =await axios.get(url)---->所在的这个函数的名字前面加一个async
 * response.data---->获取相应的数据了
 * 总结:在Vue中推荐使用axios执行异步操作
 * 
 * 路由:是一种映射关系,地址-组件之间的关系
 * 点击一个链接,在页面的指定位置可以显示某个组件中的内容
 * 声明式路由和编程式路由
 * 声明式路由,直接写html的的相关代码,就可以实现路由的跳转操作
 * 编程式路由,通过书写js相关的代码,实现路由跳转的操作
 * Vue都是单页面应用程序(SPA),页面中是通过路由来实现跳转
 * 路由在书写的时候,最终在页面中会产生一个链接地址
 * <router-link to="地址">要显示内容</router-link>路由链接---------------><a href="地址">要显示内容</a>
 * 单击链接的时候,要在页面的指定位置显示一个组件相关的内容
 * <router-view></router-view>路由视图--------> 一个组件对应的显示内容
 * 
 * 编程式路由的代码:
 * router.push()----有记录的
 * router.replace()---没有记录
 * router.back()---返回
 * <keep-alive></keep-alive>组件,用来缓存
 * 路由的配置:
 * 首先要使用路由,就要先安装 npm install vue-router
 * 一般会在router的目录中配置路由,index.js文件,是真正的配置
 * index.js文件
 *  引入Vue,引入vue-router,要声明使用插件,
 * 向外暴露出去 new VueRouter({})这个对象,然后在main.js文件中,引入index.js的文件,进行路由器的注册
 * {
 *   mode:'history'  将来在地址栏中的地址上,是没有# ,这行代码不写,那么地址栏中就会有#
 *   routes:[]
 * }
 * [] 数组中有多个对象
 * 每个路由都是一个对象,每个对象中常用的属性的配置
 * path:'地址',
 * component:组件名字,
 * children:[{path:'地址',component:组件名字},{},{}]
 * {
 *  path:'地址',
 * redirect:'地址'----重定向操作
 * }
 * routes.js文件写的内容就是上面数组中书写的内容,再次封装,使用模块化的方式书写代码
 * 
 * 
 * 
 * 
 * 
 * 
 */