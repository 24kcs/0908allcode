<template>
  <ul>
    <li>ID:{{$route.params.id}}</li>
    <li>title:{{detail.title}}</li>
    <li>content:{{detail.content}}</li>
  </ul>
</template>
<script>
export default {
  name: 'MessageDetail',
  props: ['id'],
  data() {
    return {
      messageDetails: [
        { id: 1, title: 'message001', content: 'detail001' },
        { id: 2, title: 'message002', content: 'detail002' },
        { id: 3, title: 'message003', content: 'detail003' }
      ],
      detail: {}
    }
  },
  mounted() {
    // 获取id
    // const id = this.$route.params.id * 1
    // this.detail = this.messageDetails.find(message => message.id === id)
    this.showDetail(this.$route)
  },
  watch: {
    $route(val) {
      // const id = val.params.id * 1
      // this.detail = this.messageDetails.find(message => message.id === id)
      this.showDetail(val)
    }
  },
  methods: {
    showDetail(route) {
      const id = route.params.id * 1
      this.detail = this.messageDetails.find(message => message.id === id)
    }
  }
}
</script>
<style scoped>
</style>
