<template>
  <div>
    <Slot1>我没有华哥阅历,也没有铭哥的才华,还没有健哥的容貌,但是,我身体好啊</Slot1>

    <hr />

    <Slot2>
      <p slot="top">冰激淋和冰箱吵架了,离家出走,离开了冰箱,直到有一天,冰激淋开始化了,越走越远,后悔了</p>
      <span>华哥真的好帅哦</span>
      <p slot="bottom">于是回来找到冰箱,说后悔了,冰箱很严厉的说:上来吧,自己冻</p>
    </Slot2>

    <hr />

    <Slot3>
      <template v-slot="slotProps">
        <!-- <p v-if="slotProps.todo.isShow">{{slotProps.todo.title}} ✔</p> -->
        <p v-if="slotProps.todo.isShow" style="color:red">{{slotProps.todo.title}}</p>
      </template>
    </Slot3>
  </div>
</template>
<script>
/**
 * 1.使用普通插槽,没有名字的插槽,直接传值即可：父级组件向子级组件中传入数据
 * 2.如果插槽有名字,那么这个插槽叫具名插槽,也可以叫命名插槽,具名插槽也是父级组件向子级组件中传递数据
 * 2.具名插槽传值,只能使用名字,其他的内容是不会被传递的(标签名字,标签位置这些都没有关系,只要有slot="插槽名字"即可传值)
 * 3.作用域插槽,子组件向父级组件传递数据,父级组件根据数据渲染标签结构传递给子组件
 * 4.slot-scope 是一个属性---->存放的是一个表达式,该表达式可以获取子级组件内部中作用域插槽中传递给父级组件的数据
 * v-slot可以代替slot-scope
 * 作用域插槽是可以把子级组件的数据传递给父级组件的
 * 
 * 普通插槽----父级组件向子级组件传递数据
 * 具名插槽-----父级组件向子级组件传递数据
 * 作用域插槽----父级组件向子级组件传递数据,子级组件也可以向父级组件传递数据-----父子互传
 * 先把Vue中的所有的通信方式全说出来,然后再说每一种方式的特点及使用的方式,然后引入到React中的组件之间的通信问题上
 */
// 引入Slot1组件---显示普通插槽传值方式
import Slot1 from './Slot1.vue'
// 引入Slot2组件---显示具名插槽传值方式
import Slot2 from './Slot2.vue'
// 作用域插槽
import Slot3 from './Slot3.vue'
export default {
  components: {
    Slot1,
    Slot2,
    Slot3
  }
}
</script>
<style >
</style>