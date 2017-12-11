<template>
  <div>
    <div class="phonename">
      <input class="name phone-name" type="text" placeholder="请输入手机号码">
      <div class="pp">获取验证码</div>
    </div>
    <div class="password">
      <input class="login-password" type="text" placeholder="请输入短信验证码">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.phonename,
.msgnum
    text-align left
    padding 8px 10px
    margin-left 2%
    padding-left 0
    border-bottom 1px solid #d6d6d6
    overflow hidden
    font-weight 400
    .phone-name
        width 68%
    .phone-password
        width 100%
    .phone-name,
    .phone-password
        outline none
        display block
        border 0
        height 30px
        margin -8px 0
        text-indent 5px
        line-height 1
        font-size 15px
        border-radius 3px
        padding 0
        display inline-block
  .name
    text-align left
    padding 7px 10px
    display inline-block
  .pp
    padding 0 15px
    display inline-block
    background #eee
.number
  width 100%
  border none
  outline none
</style>

