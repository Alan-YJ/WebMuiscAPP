// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import vueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

//解决点击延迟
fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.use(vueLazyLoad,{
  loading:require('./common/image/img-loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render:h=>h(App)
  // components: { App },
  // template: '<App/>'
})
