<template>
 <div id = "tab_movie" ref="tabMovie">
  <ul class="movielist" >
    <li class="item" v-for="(item, index) in movies" :key="item.id">
      <router-link :to="'/moviesdetails/'+ item.id">
        <div class="movie-cover">
          <img class="lazy" :src="item.img">
        </div>
        <div class="movie-content">
          <div class="flexRow flex-item flex-middle text-ellipsis">
            <span class="movie-name">{{item.nm}}</span>
            <span v-if="!item['3d'] && item.imax" class="movie-2d" :class="!item['3d'] && item.imax ? 'v2d' : null"></span>
            <span v-else class="movie-3d" :class="item['3d'] ? 'v3d' : null"></span>
            <span class="movie-version version"  :class="item.imax ? 'imax' : null"></span>
            <div class="movie-rating" >
              <span v-if="item.sc && !item.preSale" class="score">{{item.sc}}</span>
              <span v-else-if="item.preSale && !item.sc" class="wish">{{item.wish}}</span>
              <span v-else class="nothing">暂无评分</span>
            </div>
          </div>
          <p>{{item.cat}}</p>
          <p>主演:{{item.star}}</p>
          <p class="movie-show">{{item.showInfo}}</p>
        </div>
      </router-link>
      <a v-if="item.preSale" class="movie-btn colorB" href="">预购</a>
      <a v-else class="movie-btn colorR" href="">购票</a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      movies: []
    }
  },
  mounted: function () {
    var _this = this
    this.$axios.get('/api/movie/list.json?type=hot&offset=0&limit=1000', {}, {
      header: {
      },
      emulateJSON: true
    }).then(function (res) {
      res = res.data
      _this.movies = res.data.movies
    }, function (error) {
      console.log(error)
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
  .movielist
    background-color #fff
    padding 0 14px
    .item
      display inline-block
      padding 14px 0
      border-bottom 1px solid #E6E6E6
      width 100%
      position relative
      box-sizing border-box
      a
        color #666
        text-decoration none
        .movie-cover
          width 64px
          height 90px
          display block
          float left
          position relative
          background-size 35%
          img
            display block
            width 100%
            vertical-align middle
        .movie-content
          margin 4px 0 0 74px
          position relative
          p
            text-align left
            margin-right 60px
            margin-top 6px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size 13px
            vertical-align baseline
          .movie-show
            color #999
          .flex-item
            display flex
            flex 1
            overflow hidden
            align-items center
            .movie-name
              color #222
              display inline-block
              font-size 15px
              line-height 1.5!important
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
            .movie-version
              flex 1 0 auto
              line-height 1.2!important
              text-align left
              font-size 8px
            .movie-3d,
            .movie-2d
              margin-left 4px
              flex 0 1 auto
              line-height 1.2!important
              text-align left
              font-size 8px
            .v3d::before
              content: '3D'
              border-top-left-radius 4px
              border-bottom-left-radius 4px
              background-color #8BB7CE
              color #fff
            .v2d::before
              content: '2D'
              border-top-left-radius 4px
              border-bottom-left-radius 4px
              background-color #8BB7CE
              color #fff
            .imax::after
              content 'IMAX'
              border-left 0
              border-top-right-radius 4px
              border-bottom-right-radius 4px
              color: #8BB7CE
            .v3d::before,
            .imax::after
              border 1px solid #8BB7CE
              padding 1px 3px 2px
              display inline-block
              vertical-align middle
            .movie-rating
              font-size 14px
              color #FFB400
              .score,
              .wish,
              .nothing
                font-size 16px
                line-height 1
              .score:after
                content '分'
                font-size 10px
              .wish:after
                content '想看'
                font-size 10px
              .nothing
                color black
    .movie-btn
      position absolute
      right 0
      bottom 13px
      padding 8px 11px
      font-size 12px
      border-radius 3px
      display inline-block
      color #fff!important
    .colorR
      background #e54847
    .colorB
      background #52b0eb
</style>
