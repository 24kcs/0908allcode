<template>
  <div>
    <h2>动态组件</h2>
    <button @click="toggleComponent">切换组件</button>
    <component :is="current"></component>
    <hr />
    <h2>缓存组件</h2>
    <button @click="toggleComponent">切换组件</button>
    <keep-alive>
      <component :is="current"></component>
    </keep-alive>
    <hr />
    <h2>异步组件</h2>
    <AsyncComponent1/>
    <AsyncComponent2/>
    <AsyncComponent3/>

  </div>
</template>
<script>
// 引入Vue
import Vue from 'vue'
Vue.component('AsyncComponent1', function(resolve, reject) {
  setTimeout(function() {
    // 向 `resolve` 回调传递组件定义
    resolve({
      data() {
        return {
          msg: '今天天气格外好,健哥来到桃花岛,看见铭哥在洗澡...'
        }
      },
      template: '<div>{{msg}}</div>'
    })
  }, 1000)
})

// ============================
Vue.component('AsyncComponent2', function (resolve) {
  require(['./AsyncComponent2'], resolve)
})


Vue.component(
  'AsyncComponent3',
  // 这个 `import` 函数会返回一个 `Promise` 对象。
  () => import('./AsyncComponent3')
)


// 引入组件
import Dynamic1 from './Dynamic1'
import Dynamic2 from './Dynamic2'
export default {
  name: 'MainComponent',
  data() {
    return {
      current: 'Dynamic1'
    }
  },
  // 注册组件
  components: {
    Dynamic1,
    Dynamic2
  },
  methods: {
    toggleComponent() {
      this.current = this.current === 'Dynamic1' ? 'Dynamic2' : 'Dynamic1'
    }
  }
  // 点击按钮可以切换两个组件------特别像路由组件-------动态组件
}

// <component> 是一个内置组件,当成标签来使用, 配合:is属性,可以用来显示组件内容

/**
 * 动态组件:使用<component>标签 配合 :is="表达式" 表达式内部存储的是一个组件的名字
 * 异步组件:将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。
 * 静态引入不能单独打包,动态引入才可以单独的打包
 * 动态打包两种写法:require()和import()
 * 
 * 
 * 
 * 
 * 
 * 组件:普通组件,动态组件,异步组件,缓存组件,公共组件,路由组件
 * 组件,具有特定功能的集合,可以有交互的功能,里面包含html,css,js
 * 也就是说,如果当前在页面中,有一个位置,里面有一些功能,然后把html,css,js抽取出来放在一个单独的.vue文件,这就是一个组件文件,也就是普通的组件
 * 普通组件,在一个.vue文件定义,在另一个组件中引入,当前的这个组件就是一个普通的组件,也可以看成是一个子级的组件
 * 路由组件,本身就是一个普通的组件,但是通过router进行注册,形成了一种地址和组件的关系(映射关系),在界面中点击链接地址,在页面的某个指定的位置,可以显示这个地址对应的这个组件的内容,这样的组件叫路由组件(每个路由组件中有一个$route对象)
 * 公共组件:本身是一个普通的组件,但是需要在很多的组件中使用,此时通过Vue.component()方法进行注册(在main.js中注册),那么该组件就是一个公共的组件
 * 动态组件:本身是一个普通的组件,然后需要配合<component/>内置组件和 :is="组件的名字" 来使用,形成动态组件,一般可以用在页面中的切换效果上(tab切换)
 * 缓存组件:通常,一个组件有自己的生命周期,当组件使用完毕后,该组件的生命周期结束(该组件被干掉了),此时这个组件就是一个普通的组件,但是,配合<keep-alive>使用后,即使当前这个组件使用完毕了,但是生命周期还有,没有结束,仅仅是暂时的不使用了,那么此时的这个组件被缓存起来(通过Vue的浏览器插件可以看到的),此时就是一个缓存组件
 *  
 * 异步组件:
 * 组件形成异步组件有三种方式,
 * 1. 直接通过Vue.component('组件名字',function(resolve, reject){resolve({这里可以写正常组件中的代码})})来进行注册
 * 2. 可以通过Vue.component('组件名字',function (resolve){require(['./AsyncComponent2'], resolve)})来进行注册,可以引入一个普通组件的路径(可以把一个普通的组件变成一个异步的组件)
 * 3. 可以通过Vue.component('AsyncComponent3',() => import('./AsyncComponent3'))来进行注册,也是可以引入一个普通的组件路径
 * 异步组件,将一些应用分割成小一些的代码块,并且在需要的时候从服务器加载这个模块,此时就是一个异步组件了
 * 
 * 
 * 子级组件:
 * 父级组件
 * 
 *
 */
</script>
<style scoped>
</style>



