// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 浏览器的控制台中是否显示提示信息
Vue.config.productionTip = false

// eslint语法检查,如果干掉下面的代码就报错
/* eslint-disable no-new */
new Vue({
  // 容器,在index.html中
  el: '#app',
  // 注册组件,所有的组件最终我们都会放在App组件中,但是注册就要先引入,在上面
  components: { App },
  // App这个组件模版
  template: '<App/>'
})
