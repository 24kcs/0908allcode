<template>
  <div>
    <h2>双向数据绑定</h2>
    <input type="text" v-model="msg" />
    <p>{{msg}}</p>
    <h2>自己实现v-model指令效果</h2>
    <input type="text" :value="msg" @input="msg=$event.target.value" />
    <p>{{msg}}</p>

    <h2>通过调用组件实现双向数据绑定效果</h2>
    <Model1 />

    <hr />
    <h2>通过调用组件,传入v-model指令实现双向数据绑定的效果</h2>
    <Model2 v-model="msg" />
    <p>{{msg}}</p>
    <hr>
    <h2>不用v-model来实现组件和组件之间的双向数据绑定的效果</h2>
      <Model3 :value="msg" @input="msg=$event" />
      <p>{{msg}}</p>
  </div>
</template>
<script>
import Model1 from './Model1'
import Model2 from './Model2'
import Model3 from './Model3'
export default {
  name: 'MainModel',
  components: {
    Model1,
    Model2,
    Model3
  },
  data() {
    return {
      msg:
        '那一年军训,教官说,觉得自己帅的向前一步,我们所有人都没有动,这时,教官过来就是一脚,差点把我踹飞,大喊到,我最不喜欢不诚实的人'
    }
  }
}

/**
 * 自己实现双向数据绑定: <input :value="msg" @input="msg=$event.target.value">
 * $event代表分发事件的传递的数据
 *
 * 父级组件中,使用另一个子组件,在组件上使用v-model="msg2",并显示{{msg2}}
 * 在子级组件中,:value='value' @input="$emit('input',$event.target.value)" props:['value']
 *
 *
 */
</script>
<style scoped>
input {
  width: 800px;
}
</style>