<template>
<div class="introduce-box">
  <header class="navbar movie-name-header">
      <a class="react" href=""><i class="text-icon icon-back"></i></a>
      <div class="nav-header">{{MovieDetailModel.nm}}</div>
  </header>
  <div class="movie-background">
      <div class="movie-filter">
        <div class="movie-img">
          <img class="imgs" :src="MovieDetailModel.img" alt="">
        </div>
      <div class="filter-right">
        <div class="movie-name">{{MovieDetailModel.nm}}</div>
        <!-- <div class="movie-ename">Coco***api没提供</div> -->
        <div class="released-score" v-if="MovieDetailModel.sc">{{MovieDetailModel.sc}}分<span class="add-people">({{MovieDetailModel.snum}}人评分)</span></div>
        <div class="released-score" v-else-if="!MovieDetailModel.sc && !MovieDetailModel.showSnum">{{MovieDetailModel.wish}}人想看</div>
        <div class="released-score" v-else-if="!MovieDetailModel.sc && MovieDetailModel.showSnum">暂无评分</div>
        <div class="movie-category">{{MovieDetailModel.cat}}</div>
        <div class="movie-content-row">{{MovieDetailModel.src}}/{{MovieDetailModel.dur}}分钟</div>
        <div class="movie-content-row">{{MovieDetailModel.rt}}</div>
      </div>
    </div>
  </div>
  <div class="pay-introduce">
    <div class="nowpay">立即购票</div>
    <div ref="show">
      <div class="introduce hidden" ref="introduce">{{dra.replace(/<.*?>/ig,"")}}</div>
      <div class="hidden-btn-down" ref="icon"></div>
    </div>
  </div>
  <div class="celebrities">
    <div class="movie-people">
      <ul class="movie-people-ul class-box">
        <li v-for="(item, index) in MovieDetailModel.photos" :key="index">
          <img :src="item" alt="">
          <h4>{{star[index]}}</h4>
          <!-- <p>职位/主演角色**api没提供</p> -->
        </li>
      </ul>
    </div>
    <div class="all-people">全体演职人员</div>
  </div>
  <div class="movie-comment">
    <div class="clearfix">短评</div>
    <div class="list-view-item" v-for="item in CommentResponseModel.hcmts" :key="item.id">
      <p class="talk-time">{{item.time}}</p>
      <div class="talk-content">{{item.content}}</div>
      <div class="talk-footer">
        <div class="userimg">
          <img :src="item.avatarurl" alt="">
        </div>
        <span class="username">{{item.nick}}</span>
        <span class="reponst">回复&nbsp;{{item.reply}}</span>
        <span class="good">赞&nbsp;{{item.approve}}</span>
      </div>
    </div>
  </div>
  <div class="footer">
    <p class="one">友情链接:&nbsp;<a href="#">猫眼专业版</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">美团网</a></p>
    <p class="two">@&nbsp;猫眼电影&nbsp;客服电话:&nbsp;<a href="#">1010-5335</a></p>
    <p class="three">
      <a href="http://www.miibeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=zmshIwhCuLeaTAslNJ7CXereLeFDWaabnLWkp5JKGXLkckSkJcO7!-139023563">京ICP备 16022489号-1</a>
      <a href="http://www.beian.gov.cn/portal/index">京公安网备11010502030881号</a>
    </p>
    <p class="four">北京猫眼文化传媒有限公司</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      MovieDetailModel: [],
      CommentResponseModel: [],
      dra: '',
      star: '',
      turnoff: false
    }
  },
  created () {
    console.log(this.$route.path)
    let path = this.$route.path
    let num = path.replace(/[^0-9]+/g, '')
    console.log(num)
    let api = '/api/movie/' + num + '.json'
    var _this = this
    this.$axios.get(api, {}, {
      header: {
      },
      emulateJSON: true
    }).then(function (res) {
      res = res.data
      _this.MovieDetailModel = res.data.MovieDetailModel
      _this.CommentResponseModel = res.data.CommentResponseModel
      _this.dra = _this.MovieDetailModel.dra
      _this.star = _this.MovieDetailModel.star.split(' ')
    }, function (error) {
      console.log(error)
    })
  },
  mounted () {
    let show = this.$refs.show
    let introduce = this.$refs.introduce
    let icon = this.$refs.icon
    show.onclick = function () {
      this.turnoff = !this.turnoff
      this.turnoff ? introduce.setAttribute('class', 'introduce') : introduce.setAttribute('class', 'introduce hidden')
      this.turnoff ? icon.setAttribute('class', 'hidden-btn-up') : icon.setAttribute('class', 'hidden-btn-down')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.introduce-box
  background #f4f4f4
.movie-name-header
  display  flex
  font-size 18px
  font-weight lighter
  text-align center
  text-overflow ellipsis
  overflow hidden
  background #e54847
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
.movie-background
  // background url(//p1.meituan.net/movie/4ba0ebccc0e3115911bfecdcfbbafa1a5114683.jpg@177w_249h.webp)
  // filter blur(10px)
  background black
  .movie-filter
    color #fff
    display flex
    width 100%
    .movie-img
      padding 20px 0 20px 30px
      .imgs
        width 107px
        height 150px
    .filter-right
      padding 20px
      .movie-name
        font-size 17px
        line-height 1.2
        margin-top 3px
        margin-bottom 4px
      .movie-ename
        font-size 11px
        opacity .8
        height 11px
        margin-bottom 6px
      .movie-category
        font-size 12px
        margin-bottom 6px
        margin-top 6px
      .movie-content-row
        font-size 12px
        opacity .7
        margin-bottom 6px
      .released-score
        font-size 16px
        color #ffc600
        .add-people
          color #fff
          font-size 9px
          opacity: .7
          margin-top 4px
          margin-bottom 8px
.pay-introduce
  background #fff
  width 100%
  padding 13px 13px 0 13px
  margin-bottom 10px
  .nowpay
    margin-bottom 10px
    font-size 16px
    padding 7.5px 12px
    text-align center
    border-radius 4px
    line-height 1
    background #e54847
    color #fff
  .introduce
    font-size 16px
    margin 0
    line-height 21px
    text-overflow ellipsis
    -o-text-overflow ellipsis
    overflow hidden
  .hidden
    max-height 64px
  .hidden-btn-down
    color #aaa
    text-align center
    height 22px
    position relative
    &:after
      content ''
      display block
      position absolute
      width 10px
      height 10px
      transform rotate(-45deg)
      border-bottom 2px solid gray
      border-left 2px solid gray
      left 180px
      top 0
  .hidden-btn-up
    color #aaa
    text-align center
    height 22px
    position relative
    &:after
      content ''
      display block
      position absolute
      width 10px
      height 10px
      transform rotate(-45deg)
      border-top 2px solid gray
      border-right 2px solid gray
      left 180px
      top 10px
.celebrities
  color #fff
  margin 10px 0
  .movie-people::-webkit-scrollbar
    display none
  .movie-people
    border-top 1px solid #e5e5e5
    border-bottom 1px solid #e5e5e5
    padding 15px 0 10px 15px
    background #fff
    overflow-x scroll
    .movie-people-ul
      width 1000%
      list-style none
      & > li
        float left
        &> img
          display inline-block
          width 65px
          height 90px
          margin 2px
          background gray
          word-break normal
        &> h4
          width 65px
          font-size 11px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          color black
        &> p
          width 65px
          font-size 11px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          text-align center
          color #999
  .all-people
    border-top 1px solid #e5e5e5
    padding 10px
    background #fff
    color #666
    margin 0
    font-weight lighter
.movie-comment
  background #fff
  .clearfix
    height 40px
    line-height 20px
    margin 0
    color #666
    font-size 15px
    padding 10px 15px
    border-bottom 1px solid #e5e5e5
  .list-view-item
    margin-left 15px
    padding 8px 13px 8px 0
    .talk-time
      color #999
      font-size 15px
      margin-right 50px
    .talk-content
      margin 5px 0
      color #333
      font-size 14px
      line-height 1.5
      text-align justify
      word-wrap break-word
      padding 0 !important
    .talk-footer
      display block
      padding 10px 12px 10px 0px
      .userimg
        float left
        width 29px
        border-radius 50%
        display inline-block
        &> img
          border-radius 50%
          background #6c6c6c
      .username
        display inline-block
        padding-top 5px
        max-width 150px
        color #999
        font-size 12.5px
        font-style normal
        margin-left 10px
        vertical-align inherit
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
      .good
        color #999
        margin 0 5px
        line-height 15px
        display inline-block
        float right
        padding-top 5px
      .reponst
        color #999
        margin 0 5px
        line-height 15px
        display inline-block
        float right
        padding-top 5px
.footer
  display block
  .one
    margin 30px 0 14px
    text-align center
    &> a
      color #e54847
  .two
    text-align center
    margin-bottom 14px
    &> a
      color #e54847
  .three
    text-align center
    margin-bottom 14px
    &> a
      font-size: 10px
      color #9e9e9e
  .four
    text-align center
    font-size: 10px
    color #9e9e9e
    margin-bottom 14px
</style>

