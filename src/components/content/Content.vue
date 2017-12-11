<template>
<div>
  <content-header></content-header>
  <div class="tab">
    <div class="tab-item movielist">
      <router-link to="/">影片</router-link>
    </div>
    <div class="tab-item cinemaList">
      <router-link to="/cinemaList">影院</router-link>
    </div>
  </div>
  <router-view/>
  <div id="icon-mine">
      <router-link to="/login">
        <div class="icon-box">
          <img class="icon" src="https://ms0.meituan.com/touch/img/account/login/icon_login_user@2x.png">
          我的
        </div>
      </router-link>
    </div>
</div>
</template>

<script>
import ContentHeader from './ContentHeader'
import $ from '$'
export default {
  data () {
    return {}
  },
  components: {
    ContentHeader
  }
}
$(function () {
  $('.tab-item').click(function () {
    $(this).css({
      color: 'rgb(255, 20, 20)',
      borderBottomColor: 'rgb(255, 20, 20)'
    }).siblings().css({
      color: 'rgb(77, 85, 93)',
      borderBottomColor: 'rgba(7, 17, 27, 0.1)'
    })
  })
})
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
  .movielist
    color rgb(255, 20, 20)
    border-bottom 4px solid rgb(255, 20, 20)
#icon-mine
  position fixed
  bottom 40px
  right 5px
  border-radius 50%
  width 60px
  height: 60px
  line-height: .8rem;
  text-align: center;
  border: 1px solid #ececec;
  background: rgba(255,255,255,.95);
  box-shadow: 0 0 6px 0 rgba(0,0,0,.25);
  background white
  right 15px
  .icon-box
   text-align center
   color rgb(255, 20, 20)
   font-size 12px
   .icon
      display block
      margin auto
      width 25px
      height 25px
      margin-top 10px
      margin-bottom 3px
</style>
