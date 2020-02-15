/**
 * 
 * Vue的核心内容
 * Vue中的事件处理
 * Vue中如何获取事件的参数对象
 * @事件名字="回调函数('参数1',$event)"
 * 事件的修饰符
 * .prevent---阻止浏览器的默认行为
 * .stop--阻止事件冒泡
 * 按键的修饰符
 * @keyup.enter---按下了回车键
 * @keyup.13---按下了回车键
 * 当用户按下键盘之后,如果按下了是回车键,就会触发
 * v-model指令:主要用在表单表上上
 * Vue中的生命周期
 * 一共11个,咱们目前讲了8个
 * 生命周期函数---生命周期钩子---Vue的实例对象的从生到死的过程中会有哪些函数会自动的执行
 * beforeCreate()函数----当数据初始化之前的时候
 * created()函数----数据初始化完毕后
 * beforeMount()函数----界面渲染之前
 * mounted()函数---界面渲染完毕
 * beforeUpdate()函数---界面在更新之前
 * updated()函数---页面已经更新完毕
 * beforeDestory()函数---Vue实例对象在销毁之前
 * destoryed()函数---Vue实例对象已经销毁
 * Vue中的过渡和动画
 * 如果当前的标签需要有过渡或者动画的效果,只需要只有Vue系统内部提供的一个组件<transition>,使用标签的方式进行包裹即可
 * <transition name="fade">
 *   <p>这是p</p>
 * </transition>
 * 在style标签(将来可以在一个css文件中)内部写过渡或者是动画的css代码即可
 * 
 * .fade-enter  要显示的时候的开始状态
 * .fade-enter-active  显示的时候的过渡的状态
 * .fade-enter-to  显示完毕后的时候的状态
 * 
 * 。fade-leave  要隐藏的时候的开始状态
 * .fade-leave-active 隐藏的时候的过渡的状态
 * .fade-leave-to 隐藏完毕后的时候的状态
 * 
 * Vue中的过滤器---就是做一些格式化的操作而已
 * 全局的过滤器
 * Vue.filter('过滤器的名字',回调函数) 
 * Vue中的指令:内置指令和自定义指令
 * 内置指令:
 * v-model
 * v-on
 * v-bind
 * v-if
 * v-else
 * v-else-if
 * v-show
 * v-for
 * v-text
 * v-html 
 * 面试的时候,一个问题,延伸到另一个问题,最终可以达到把整个前端所有的技术点都说一遍
 * 
 * Vue中的插件
 * 一般在Vue中插件在使用之前,Vue.use(插件对象)
 * 自定义插件
 * 1.首席先要定义一个插件对象
 * 当前这个插件中所有的全局方法,实例方法,包括需要定义的指令,他们都在插件的install方法内部定义
 * 
 * 遍历数据的时候,key推荐使用唯一的值,一般我们使用id,不推荐使用index,虚拟DOM和diff算法的
 * 
 * Vue的脚手架2的版本和3的版本
 * 脚手架2的下载名字---一次即可
 * npm install -g vue-cli
 * 下载模版
 * vue init webpack my-project
 * 
 * npm run dev或者 npm start
 * npm run build 打包---
 * serve dist 运行打包文件
 * 
 * .vue结尾的后缀名的文件,是一个组件的文件
 * 组件:具有特定功能效果的集合,html,css,js
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */