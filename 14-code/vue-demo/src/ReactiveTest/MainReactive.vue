<template>
  <div>
    <button @click="setName1">改变并显示name1属性的值</button>
    <p>name1的值:--------{{name1}}</p>

    <button @click="setName2">改变并显示name2属性的值</button>
    <p>name2的值:--------{{name2}}</p>


     <button @click="setName3">改变并显示name3属性的值</button>
    <p>name3的值:--------{{car.name3}}</p>
    <p>color的值:--------{{car.color}}</p>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'MainReactive',
  data() {
    this.name2 = '华哥'
    return {
      name1: '铭哥',
      car:{
        name3:'宝马'
      }
    }
  },
  methods: {
    setName1() {
      this.name1 = '健哥'
    },
    setName2(){
      this.name2='凤姐'
    },
    setName3(){
       //this.car.name3='奥迪'
      // this.car.color='red'
      Vue.set(this.car,'color','blue')
    }
  },
  mounted () {
    console.log(this)
  }
}

/**
 * 响应式数据:Vue组件中有一些数据,如果这些数据的值发生了变化了,那么此时界面会重新的渲染,那么此时这种数据可以称为响应式数据
 * 非响应式数据:Vue组件中有一些数据(属性/表达式...)这些数据的值发生了变化,但是界面不会重新的渲染,此时这种数据可以称为非响应式数据
 *
 *
 *
 */

/**
 * 1.data中return中的数据是响应式的---实现了代理,才有的响应式
 * 2.如果修改data中数据的时候,也会把name2的属性值修改,是因为修改name导致的重新渲染了
 * 3.car.color,不会因为name改变才修改,本身就是响应式的,所以可以改变
 * 只有一次渲染(name,color 是一起渲染的)
 * 4. 必须是data中响应式的对象添加属性,才有效果
 *
 *
 */
</script>
<style scoped>
</style>