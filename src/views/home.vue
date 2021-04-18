<template>
  <div class="wrap">
    <header-top title="Home"/>
    <div class="content">
      Vue移动端模板
      <div class="">
        <van-button type="primary" @click="toLogin">主要按钮</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import headerTop from '../components/HeaderTop'
export default {
  data() {
    return {
      params: { username: '003', password: '123456', captcha: "230050", captchaId: "c2zhSyz7NjQUXX2mR8x7", }
    }
  },
  mounted(){
  },
  methods:{
    ...mapActions("user", ["loginIn"]),
    async toLogin() {
      return await this.loginIn(this.params)
    },
  },
  components:{
    headerTop
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../common/stylus/mixin.styl"

</style>
