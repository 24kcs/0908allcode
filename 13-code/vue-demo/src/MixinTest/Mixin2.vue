<template>
  <div>
    <p>{{name1}}</p>
    <p>{{name2}}</p>
    <p>{{length}}</p>
  </div>
</template>
<script>
import mixin from './mixin.js'
export default {
    mixins:[mixin],
  data () {
    return {
      name1:'小明',
      name2:'小健健'
    }
  },
  computed: {
    length(){
      return this.name2.length
    }
  }
 
}
</script>
<style scoped>
</style>