<template>
  <div>
      <header class="navbar navbar-login">
          <a class="react" href=""><i class="text-icon "></i></a>
          <h1 class="nav-header">{{cinemaDetailModel.nm}}</h1>
          <div class="nav-wrap-right"></div>
      </header>
      <div class="body-wrapper" id="bodyWrapper">
 <!-- 在排片页，选座页，下单页的美团i版在微信中显示时展示头部 -->
        <div class="imeituan-movie">
          <div class="bg" style="background:#fff">
          <div class="showtime-cinema-info">
            <div class="stci-info">
              <p class="cinema-name">{{cinemaDetailModel.nm}}</p>
              <p class="area-msg">{{cinemaDetailModel.addr}}</p>
            </div>
            <div class="stci-tel">
              <a href="##" @click="onClick">
                <img src="../../../static/img/phone.png" class="phone-icon"></img>
              </a>
            </div>
          </div>
          <div class="showtime-movies" id="overhid">
            <ul class="lazy clear" ref="movieLen">
              <li  v-for="item in movies" :key="item.id">
                <a class="ma-dis selected" href="javascript:;">
                    <img :alt="item.nm" :src="item.img" ref="movieImg" :data-id="item.id">
                  </a>
                </li>
              </ul>
            </div>
        <div class="showtime-mname">
          <a class="movie-relative" href="javascript">
            <span class="movie-name">{{currentMovie.nm}}</span>
            <span class="sc" v-if="currentMovie.sc"><strong>9.6</strong>分</span>
            <span class="sc" v-else>暂无评分</span>
          </a>
          </div>
        <div class="time-line">
            <a class="showday" href="active" v-for="data in Dates" :key="data.id">{{data.text}}</a>
        </div>
          <ul class="showtime-list">
              <li class="stl-time">
                  <p class="begin-time">16:30</p>
                    <p class="over-time">18:15结束</p>
                </li>
              <li class="stl-info">
                 <div>
                    <p class="stl-ver">国语 3D</p>
                      <p class="two-line">3号厅 晶亮3D大</p>
                 </div>
                </li>
              <li class="stl-price">
                  <p class="unit"><span class="stonefont">34</span>元</p>
                    <p class="origin-price">影院价:70元</p>
                </li>
              <li class="stl-buy">
                  <a class="stl-btn" href="">选座购票</a>
                </li>
          </ul>
           <ul class="showtime-list">
              <li class="stl-time">
                  <p class="begin-time">16:30</p>
                    <p class="over-time">18:15结束</p>
                </li>
              <li class="stl-info">
                 <div>
                    <p class="stl-ver">国语 3D</p>
                      <p class="two-line">3号厅 晶亮3D大</p>
                 </div>
                </li>
              <li class="stl-price">
                  <p class="unit"><span class="stonefont">34</span>元</p>
                    <p class="origin-price">影院价:70元</p>
                </li>
              <li class="stl-buy">
                  <a class="stl-btn" href="">选座购票</a>
                </li>
          </ul>
        </div>
      </div>
  <footer class="footer">
      <div class="footer-links">
        <span>
          友情链接：<a href="">猫眼电影</a>
        </span>
        </div>
      <div class="footer-copyright">
          <div class="hr"></div>
          <span class="footer-copyright-text">©2017 美团网 <a href="#" target="_blank">京ICP证070791号</a></span>
      </div>
  </footer>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Dates: [],
      currentMovie: [],
      cinemaDetailModel: [],
      movies: [],
      DateShow: [],
      movieImgLen: 0,
      movieData: [],
      movieDataid: [],
      index: ''
    }
  },
  methods: {
    onClick: function () {
      alert('请拨打10020030040')
    }
  },
  created: function () {
    let cinemaid = this.$route.path.match(/\d/g).join('')
    let path = '/api/showtime/wrap.json?cinemaid=' + cinemaid
    var that = this
    this.$axios.get(path, {}, {
    // this.$axios.get('/api/movie/list.json?type=hot&offset=0&limit=1000', {}, {
      header: {
      },
      emulateJSON: true
    }).then(function (res) {
      console.log(res)
      res = res.data
      console.log(res)
      console.log('如果出现Dates是undefined,是接口原因')
      that.Dates = res.data.Dates
      that.currentMovie = res.data.currentMovie
      that.cinemaDetailModel = res.data.cinemaDetailModel
      that.movies = res.data.movies
      that.DateShow = res.data.DateShow
      let movieid = that.movies[0].id
      that.$nextTick(() => {
        let moviesImg = that.$refs.movieImg
        that.movieImgLen = moviesImg.length
        that.$refs.movieLen.style.width = 100 * that.movieImgLen + 110 + 'px'
        for (let i = 0, length = moviesImg.length; i < length; i++) {
          moviesImg[0].className = 'active-img'// 设置第一张图片为默认样式
          moviesImg[i].onclick = function (e) {
            for (let j = 0, length = moviesImg.length; j < length; j++) {
              moviesImg[j].className = ''
            }
            e.target.className = 'active-img'
            let x = -100 * i
            that.$refs.movieLen.style.transform = `translateX(${x}px)`
            that.index = i
          }
        }
        for (let i = 0, length = that.movies.length; i < length; i++) {
          that.movieDataid.push(that.movies[i].id)
          let newpath = '/api/showtime/wrap.json?cinemaid=' + cinemaid + '&' + 'movieid=' + that.movieDataid[i]
          that.$http.get(newpath, {}, {
            header: {
            },
            emulateJSON: true
          }).then(function (res) {
            res = res.data
            that.movieData.push(res.data)
          }, function (error) {
            console.log(error)
          })
          // console.log(that.movieDataid)
        }
      })
      console.log(movieid)
      console.log(res.data)
    }, function (error) {
      console.log(error)
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
body
  font 14px/1.5 Arial,Helvetica,sans-serif
  background-color #f0efed
  a
    text-decoration none
  .navbar
    display flex
    flex 1
    height: 50px
    color: #fff
    background: #e54847
    border-bottom: 1px solid #e54847
    .react
      display block
      height 23px
      width 23px
      padding 15px
      line-height 20px
    .text-icon
      width 23px
      height 23px
      display inline-block
      vertical-align middle
      position relative
      font-size 40px
      color #fff
      &:before
        content ''
        display block
        position absolute
        left 4px
        top 0
        width 18px
        height 18px
        border-bottom 2px solid #fff
        border-left @border-bottom
        transform scaleY(.8) rotateZ(45deg)
    .nav-wrap-right
      flex 1
    .nav-header
      font-size 18px
      flex 4
      width 60%
      line-height 50px
  .body-wrapper
    .imeituan-movie
      min-height 520px
  .showtime-cinema-info
    text-align left
    padding 0
    align-items center
    display flex
    .stci-info
      flex 1 1 auto
      margin 10px
      .cinema-name
        font-size 16px
      .area-msg
        font-size 13px
        color #666
    .stci-tel
      flex 0 0 auto
      width 65px
      line-height 65px
      a
        display inline-block
        height 65px
        width 65px
        font-size 0
        color: #df3434
        .phone-icon
          vertical-align middle
          margin-left 20px
    a:before
      content ''
      height 28px
      border-left 1px solid #d8d8d8
      display inline-block
      vertical-align middle
  .showtime-movies
    height 150px
    position relative
    background #5b5b5b
    overflow hidden
  .showtime-movies:after
    content ''
    position absolute
    width: 0
    height: 0
    line-height 0
    font-size 0
    bottom: 0
    left 45%
    margin-left 6px
    border 6px dashed transparent
    border-bottom: 6px solid #fff
  .lazy
    display inline-block
    padding-left 250px
    transform-origin 0px 0px 0px
    position: absolute
    top 0px
    left -99px
  .clear:after
    content ""
    display block
    clear both
    height:0
    overflow hidden
  li
    position relative
    z-index: 1
    float left
    .ma-dis
      display inline-block
      width 91px
      height 125px
      margin 10px 2px
      transform scale(.88)
      transform-origin bottom center
      border 2px solid #5b5b5b
      img
        width 91px
        height 125px
      .active-img
        transform:scale(1.2)
        margin-top -10px
        border 2px solid #fff
  .showtime-mname
    .movie-relative
      text-align left
      display block
      line-height 45px
      padding 0 10px
      font-size 16px
      color #333
      .movie-name
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        line-height 45px
        font-style 16px
      .sc
        margin-left 7px
        color #F07C0A
        font-size 12px
        padding-top 4px
        &>strong
          font-size 16px
  .time-line::-webkit-scrollbar
      display none
  .time-line
    padding 0 0 15px 5px
    overflow-x scroll
    white-space nowrap
    font-size 0
    text-align left
    border-top 2px solid #dbdbdb
    border-bottom @border-top
    .showday
      display inline-block
      height 21px
      line-height @height
      padding 12px 9px 10px
      font-size 15px
      color #333
    .active
      color #e54847
      border-bottom 3px solid #e54847
  .showtime-list
    display flex
    flex 1
    border-bottom 1px solid #dbdbdb
    .stl-time
      flex 1
      height 58px
      text-align left
      padding-left 1.5%
      padding-top 1%
      color #df2d2d
      font-size 20px
      .begin-time
        color #1f1f1f
      .over-time
          font-size 12px
          color #9a9a9a
    .stl-info
      flex 2
      text-align left
      font-size 16px
      color #999
      padding-left 2%
      .stl-ver
        margin-top 10px
        line-height 24px
        color #333
        font-size 14px
        max-width 180px
      .two-line
        text-overflow clip
        white-space normal
        max-height 36px
        max-width 180px
        font-size 12px
    .stl-buy
      flex 0 1 auto
      .stl-btn
        display block
        width 79%
        height 55%
        margin-right 30px
        margin-top 13px
        text-decoration none
        padding 4px 0
        font-size 13px
        border-radius 5px
        color #FA5939
        text-align center
        border 2px solid #FA5939
    .stl-price
      margin-right 15px
      line-height 22px
      font-size 20px
      text-align right
      padding-top 8px
      .unit
        color #e54847
        .stonefont
          font-family stonefont
      .origin-price
        font-size 12px
        color #9a9a9a
  .footer
    padding 15px 10px 20px
    box-sizing border-box
    background-color #f0efed
    width 100%
    .footer-links
      font-size 12px
      text-align center
      margin 12px 0
      a
        display inline-block
        color #e54847
    .footer-copyright
      width 100%
      display flex
      font-size 12px
      color #999
      a
        display inline-block
        color #999
      .hr
        flex 1
        border-top 1px solid #999
        margin-top 8px
      .footer-copyright-text
        flex 0 1 auto
        padding 0 15px
        background-color #f0efed
</style>
