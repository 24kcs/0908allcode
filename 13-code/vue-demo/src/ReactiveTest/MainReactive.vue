<template>
  <div>
    <!-- <button @click="setName1">显示name1属性的值</button>
    <p>name1的值:-------{{name1}}</p>

    <button @click="setName2">显示name2属性的值</button>
    <p>name2的值:-------{{name2}}</p>
     <button @click="setName3">显示name3属性的值</button>
    <p>name3的值:-------{{car.name3}}</p>
    <p>name3的值:-------{{car.color}}</p>-->

    <button @click="setName1">显示name1属性的值</button>
    <p>name1属性值:-------------{{name1}}</p>
    <button @click="setName2">显示name2属性的值</button>
    <p>name2属性值:-------------{{name2}}</p>
     <button @click="setcolor">显示color属性的值</button>
    <p>name属性值:-------------{{car.name}}</p>
    <p>color属性值:-------------{{car.color}}</p>
  </div>
</template>
<script>
/**
 * 1.data中return中的数据是响应式的---实现了代理,才有的响应式
 * 2.如果修改data中数据的时候,也会把name2的属性值修改,是因为修改name导致的重新渲染了
 * 3.car.color,不会因为name改变才修改,本身就是响应式的,所以可以改变
 * 只有一次渲染(name,color 是一起渲染的)
 * 4. 必须是data中响应式的对象添加属性,才有效果
 *
 *
 */
import Vue from 'vue'
export default {
  name: 'MainReactive',
  data() {
    this.name2 = '小黑'
    return {
      name1: '小明',
      car:{
        name:'宝马'
      }
    }
  },
  methods: {
    setName1() {
      this.name1 = '小红'
    },
    setName2() {
      this.name2 = '小白'
    },
    setcolor(){
      this.car.name='奔驰'
      Vue.set(this.car,'color','red')
    }
  }
}
</script>
<style scoped>
</style>