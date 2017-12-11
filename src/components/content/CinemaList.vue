<template>
  <div id = "tab_cinema" class = "tab_hide">
    <ul class = "cinemalist">
      <li v-for="(region, diqu, index) in cinemaArr" class="cinema-container" :key="region.id">
        <router-link :to="'/showcinemadet/' + item.id"  v-for="(item, index_1) in region" :key="index_1">
          <div class="cinema-name text-ellipsis">{{item.nm}}</div>
          <div class="price theme-color">
            <span class="num">{{item.sellPrice}}</span>
            <span>元起</span>
          </div>
          <div class="place">
            <p class="address text-ellipsis">{{item.addr}}</p>
            <div class="dis" v-if="index === 0">{{(index_1+1)*0.5}}km</div>
          </div>
          <div class="tag-list">
              <div>座</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cinemaArr: []
    }
  },
  mounted: function () {
    var _this = this
    this.$axios.get('/api/cinemas.json', {}, {
      header: {
      },
      emulateJSON: true
    }).then(function (res) {
      res = res.data
      _this.cinemaArr = res.data
    }, function (error) {
      console.log(error)
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.cinema-container
  font-size 14px
  margin-top 10px
  margin-left 16px
  color #666
  position relative
  line-height 1
  text-align left
  a
    text-decoration none
    display block
    margin-bottom 15px
    border-bottom 1px solid #E6E6E6
    padding-bottom 10px
  .cinema-name
    display inline-block
    max-width 285px
    font-size 16px
    color #000
    white-space nowrap
    text-overflow ellipsis
    overflow hidden
  .price
    display inline-block
    margin-left 10px
    font-size 11px
    line-height 15px
    color #e54847
    .num
      font-size 17px
  .place
    display flex
    .address
      flex 0 1 300px
      margin-top 8px
      padding-top 5px
      margin-right 5px
      display inline-block
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      text-overflow ellipsis
      color #6c6c6c
    .dis
      flex 1
      top 47px
      right 12px
      color #999
      margin-top 8px
      padding-top 5px
      margin-right 5px
      display inline-block
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      text-overflow ellipsis
      text-align center
  .tag-list
    margin-top 10px
    display inline-block
    padding 3px
    border 1px solid #589DAF
    border-radius 4px
    margin-right 2px
    color #589DAF
</style>
