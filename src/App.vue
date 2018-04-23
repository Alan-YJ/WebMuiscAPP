<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from 'components/header/header'
export default {
  components:{
    Header
  },
  name: 'App',
}
</script>

<style lang='stylus' scoped>
@import './common/stylus/variable.styl'
  #app
    color:$color-theme
    background-color:$color-background
    font-size:12px
</style>
