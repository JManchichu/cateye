<template>
  <div>
    <login-header></login-header>
    <div class="tab">
      <div ref="left" class="tab-item login-meituan">
        <router-link to="/login">美团账号登录</router-link>
      </div>
      <div ref="right" class="tab-item">
        <router-link to="/login/phonelogin">手机验证登录</router-link>
      </div>
    </div>
    <router-view></router-view>
    <div class="btn-wrapper">
      <input class="btn-larger" type="submit" value="登录">
    </div>
    <div class="subline">
      <a href="#" class="regitser tab-subline-item">立即注册</a>
      <a href="#" class="lookfor tab-subline-item">找回密码</a>
    </div>
    <div class="copyright"><span class="copyright">@猫眼电影&nbsp;客服电话:&nbsp;&nbsp;<a href="#">400-670-5335</a></span></div>
  </div>
</template>

<script>
import LoginHeader from './LoginHeader.vue'
export default {
  data () {
    return {
      left: true,
      right: false
    }
  },
  components: {
    LoginHeader
  },
  mounted () {
    let left = this.$refs.left
    let right = this.$refs.right
    left.onclick = function () {
      left.style.color = 'rgb(255, 20, 20)'
      left.style.borderBottomColor = 'rgb(255, 20, 20)'
      right.style.color = 'rgb(77, 85, 93)'
      right.style.borderBottomColor = 'rgba(7, 17, 27, 0.1)'
    }
    right.onclick = function () {
      right.style.color = 'rgb(255, 20, 20)'
      right.style.borderBottomColor = 'rgb(255, 20, 20)'
      left.style.color = 'rgb(77, 85, 93)'
      left.style.borderBottomColor = 'rgba(7, 17, 27, 0.1)'
    }
  }
}
</script>

<style lang="stylus">
.tab
  width 100%
  height 40px
  padding 0 10px 0 10px
  display flex
  line-height 40px
  font-size 14px
  .tab-item
    flex 1
    text-align center
    border-bottom 4px solid rgba(7, 17, 27, 0.1)
    & > a
      display block
      color inherit
  .login-meituan
    color rgb(255, 20, 20)
    border-bottom 4px solid rgb(255, 20, 20)
.btn-wrapper
    margin 14px 10px
    .btn-larger
        width 100%
        height 47px
        line-height 47px
        font-size 20px
        text-align center
        padding 0 16px
        color #ffffff
        background-color #df2d2d
        border 0
        box-sizing border-box
        cursor pointer
        vertical-align: middle
.subline
    background #f8f8f8
    display flex
    width 100%
    height 36px
    line-height 36px
    font-size 14px
    color #df2d2d
    .tab-subline-item
        flex 1
        text-align center
        color #df2d2d
    .regitser
      text-align left
      margin-left 10px
    .lookfor
        text-align right
        margin-right 10px
.copyright
    font-size 14px
    text-align center
    line-height 1
    & > a
        color #fd2d2d
        text-decoration none
        display inline-block
</style>

