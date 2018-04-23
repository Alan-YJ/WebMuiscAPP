<template>
  <div class='wrapper' ref='wrapper'>
    <ul class='slider-wrapper' ref='slider' >
      <slot></slot>
    </ul>
    <div class='dots'>
      <div v-for='(item,index) in dots' :class='currentIndex==index?"active":""'  :key='index' class='dot'></div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { addClass, removeClass } from "common/js/ctrolClass.js";
//步骤：
//1.布局初始化
//2.能进行滚动
//3.循环滚动
//4.下方dot提示
//5.解决其他bug
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data() {
    return {
      dots:[],
      currentIndex:0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this._setSliderWidth();
      this._initSlider();
      this._initDots();
      if(this.autoPlay){
        this._play()
      }
    });
    window.addEventListener('resize',()=>{
      if(!this.scroll){
        return
      }
      this._setSliderWidth(true);
      this.scroll.refresh();
    })
  },
  computed: {},
  methods: {
    _play(){
      let index = this.currentIndex+1;
      if(this.loop){
        index = index==this.children.length-2?0:index
      }
      this.timer = setTimeout(() => {
        this.scroll.goToPage(index,0,400)
      }, this.interval);
    },
    _initDots(){
      this.dots = new Array(this.children.length-2);
    },
    _initSlider() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        scrollX:true,
        scrollY:false,
        momentum:false,
        snap:{
          loop:this.loop,
          threshold:0.3,
          speed:300,
          click:true
        }
      })
      this.scroll.on('scrollEnd',()=>{
        let index = this.scroll.getCurrentPage().pageX
        this.currentIndex = index
        if(this.autoPlay){
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    _setSliderWidth(isResize) {
      this.children = this.$refs.slider.childNodes;
      let width = 0;
      let sliderWidth = this.$refs.wrapper.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        child.style.width = sliderWidth + "px";
      }
      let w = sliderWidth*this.children.length
      if(!isResize&&this.loop){
        w += sliderWidth*2
      }
      this.$refs.slider.style.width = w + "px";
    }
  }
};
</script>
<style lang="stylus" scoped>
.wrapper 
  width: 100%
  overflow: hidden
  position:relative
  .slider-wrapper 
    .img-item 
      float:left
      a
        display :block
        width:100%
        img 
          width: 100%
  .dots
    position:absolute
    bottom:15px
    left:50%
    display :flex
    transform:translate(-50%)
    .dot
      margin-left:5px
      width:8px
      height:8px
      border-radius :8px
      background-color:rgba(255,255,255,0.8)
      &.active
        width:16px
      
</style>

