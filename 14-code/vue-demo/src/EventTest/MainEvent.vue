<template>
  <div>
    <button @click="showMsg1">虚胖的铭哥</button>
    <Event1 @click.native="showMsg2" />
    <h2>自定义事件</h2>
    <Event2 @click="showMsg3" @xxx="showMsg4" />
  </div>
</template>
<script>
// 引入组件
import Event1 from './Event1'
import Event2 from './Event2'
export default {
  name: 'MainEvent',
  components: {
    Event1,
    Event2
  },
  methods: {
    showMsg1(){
      console.log('菊花残满的伤,你的笑容以泛黄')
    },
    showMsg2(){
      console.log('铭哥:健哥潇洒我难求,莫非华哥有...')
    },
    showMsg3(){
      console.log('妈呀,华哥好漂亮啊,正是铭哥喜欢的')
    },
    showMsg4(){
      console.log('我是真的是自定义事件啊')
    }
  }
}


/**
 * 
 * 
 * Vue中的原生事件和自定义事件
 * 
 * 
 * 原生事件:
 * 1.所谓DOM原生事件,指的是系统自带的事件,绑定事件给个回调,事件触发,回调函数中的代码可以自动执行(不需要手动分发事件)
 * 2.Vue中DOM原生事件,指的是在组件上使用事件的时候,有.native修饰的,该事件触发,对应的回调函数也可以自动的执行(不需要手动分发事件)
 * 普通的html标签
 * Vue的组件
 * 
 * 
 * 
 * 
 * 自定义事件:
 * 1.该事件系统中没有,是程序员自己定义的,该事件的回调函数肯定应该是手动的分发的
 * 2.该事件系统中有,但是在组件上绑定事件的时候,没有使用.native进行修改,对应的回调函数需要手动的分发,或者说该事件也是程序员自己定义的,总之,在Vue的组件上使用事件的时候,只要没有使用native进行修饰,就是自定义事件
 * 普通的html标签
 * Vue的组件:
 * 
 * 
 * 
 * 
 * 
 */
</script>
<style scoped>
</style>