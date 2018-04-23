<template>
  <div class='wrapper'>
    <Slider v-if='imgList.length'>
      <li v-for='item in imgList' :key='item.id' class='img-item'>
        <a :href="item.linkUrl">
          <img :src="item.picUrl">
        </a>
      </li>
    </Slider>
  </div>
</template>
<script>
import Axios from "axios";
import Slider from 'components/base/slider.vue'
import {getImgList} from 'api/recommend.js';
export default {
  components:{
    Slider
  },
  data() {
    return {
      imgList:[]
    }
  },
  created() {
    //获取轮播图数据
    getImgList().then((res)=>{
      this.imgList = res.data.slider
    }).catch((err)=>{
      console.info(err)
    })
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
</style>

