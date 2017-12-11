<template>
<div>
  <header class="navbar navbar-login">
      <a class="react" href=""><i class="text-icon icon-back"></i></a>
      <div class="nav-header">猫眼电影</div>
  </header>
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
  .navbar-login
    display  flex
    font-size 18px
    font-weight lighter
    text-align center
    text-overflow ellipsis
    overflow hidden
    background rgb(255, 20, 20)
    .react
      margin-bottom 20px
      text-decoration none
      display block
      height 23px
      width 23px
      line-height 20px
      padding 15px
      .text-icon
        width 23px
        height 23px
        display block
        vertical-align middle
        position relative
        font-size 40px
        color #fff
        &:before
          content ''
          display inline-block
          position absolute
          left 4px
          top 0
          width 20px
          height 20px
          border-bottom 2px solid #fff
          border-left 2px solid #fff
          transform scaleY(.8) rotateZ(45deg)
    .nav-header
      width 100%
      height 55px
      text-align center
      line-height 55px
      color white
      font-size 20px
      font-weight 400
      &:before
        content ''
        display inline-block
        position absolute
        left 17px
        top 6px
        width 20px
        height 20px
        border-bottom 2px solid #fff
</style>
