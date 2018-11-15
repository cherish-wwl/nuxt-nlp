<template>
  <section class="container">
    <el-button-group>
      <el-button type='primary' icon='arrow-left'>上一页</el-button>
      <el-button type='primary' icon='arrow-right'>下一页</el-button>
    </el-button-group>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import request from '@/plugins/request'
export default {
  layout: 'Layout',
  asyncData({app, query}) {
    console.log('query')
    // 根据不用的标签获取不同的数据，最后返回话题列表。
    // request({
    //   url: 'topics',
    //   method: 'post'
    // }).then(res => {
    //   // console.log(res)
    //   // console.log(JSON.parse(res))
    //   return {list: res.data}
    // })
  },
  components: {
    AppLogo
  },
  mounted() {
   
  }
}
</script>

<style>

</style>

