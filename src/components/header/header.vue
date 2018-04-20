<template>
  <div class='wrapper'>
      <div class='header'>
          <div class='logo'></div>
          <h1 class='title'>Chicken Music</h1>
      </div>
      <div class='nav-wrapper'>
          <ul>
              <li v-for='item in navigation' :key='item.url' class='nav-item'>
                  <router-link :to='item.url'>
                      <span>{{item.text}}</span>
                  </router-link>
              </li>
          </ul>
      </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
      return {
          
      }
  },
  computed:{
    ...mapGetters({
      navigation:'navigation'
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/variable.styl';
@import '../../common/stylus/mixin.styl';
    .wrapper
        .header
            display :flex
            justify-content :center
            align-items:center
            height:44px
            font-size 24px
            .logo
                width:30px
                height:30px
                bg-image('logo')
                background-size:30px
        .nav-wrapper>ul
            display :flex
            justify-content :space-around
            height:44px
            line-height:44px
            font-size:14px
            li
                flex:1
                text-align:center
                a
                    display :block
                    span
                        font-weight:700
                .router-link-active
                    color:$color-theme
                    span
                        padding:5px 0px
                        border-bottom:3px solid $color-theme
</style>

