<template>
  <div class='index-wrapper'>
      <Scroll :data='discList' ref='scroll' class='scroll'>
        <div>
        <Slider v-if='imgList.length'>
          <li v-for='item in imgList' :key='item.id' class='img-item'>
            <a :href="item.linkUrl">
              <img @load='loadimg' :src="item.picUrl">
            </a>
          </li>
        </Slider>
        <div class='songsList'>
          <div class='title'>
            热门歌单推荐
          </div>
          <ul v-if='discList.length>0'>
            <li class='songs-item' v-for='item in discList' :key='item.dissid'>
              <img v-lazy="item.imgurl" class='pic'>
              <div>
                <div class='title'>{{item.creator.name}}</div>
                <div class='desc'>{{item.dissname}}</div>
              </div>
            </li>
          </ul>
          <div v-else>
            <Loading></Loading>
          </div>
        </div>
        </div>
      </Scroll>
    </div>
</template>
<script>
import Axios from "axios";
import Slider from 'components/base/slider.vue'
import Scroll from 'components/base/scroll';
import Loading from 'components/base/loading'
import {getImgList,getDiscList} from 'api/recommend.js';
export default {
  components:{
    Slider,Scroll,Loading
  },
  data() {
    return {
      imgList:[],
      discList:[]
    }
  },
  created() {
    //获取轮播图数据
    getImgList().then((res)=>{
      this.imgList = res.data.slider
    }).catch((err)=>{
      console.info(err)
    })
    //获取歌单列表
    getDiscList().then((res)=>{
      this.discList = res.data.list
    })    
  },
  methods:{
    loadimg(){
      if(!this.checkLoaded){
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
  .index-wrapper
    position:absolute
    top:88px
    bottom:0px
    left:0
    right:0
    .scroll
      height:100%
      overflow hidden
  .songsList
    &>.title
      height:80px
      line-height:80px
      text-align:center
      font-size:14px
    .songs-item
      padding:12px
      display :flex
      &:first-child
        padding-top:0
      img
        width:60px
        height:60px
        flex:0 0 50px
      &>div
        flex:1
        margin-left:12px
        display :flex
        justify-content :center
        flex-direction:column
        font-size:14px
        .title
          padding:8px 0px
          color:white
        .desc
          line-height:18px
          color:$color-text-l
</style>

