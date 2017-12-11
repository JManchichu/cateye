<template>
  <div>
    <div class="username">
      <input class="login-name" type="text" placeholder="帐户名/手机号/Email">
    </div>
    <div class="password">
      <input class="login-password" type="password" placeholder="请输入您的密码">
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
.username,
.password
    text-align left
    padding 8px 10px
    margin-left 2%
    padding-left 0
    border-bottom 1px solid #d6d6d6
    overflow hidden
    font-weight 400
    .login-name
        width 100%
    .login-password
        width 100%
    .login-name,
    .login-password
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
.password
  font-size 16px
</style>

