import Vue from 'vue'
import Router from 'vue-router'

import Index from 'components/index/index'
import Singer from 'components/singer/singer'
import Ranklist from 'components/ranklist/ranklist'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Index,
      redirect:{
        name:'index'
      }
    },
    {
      path: '/index',
      name:'index',
      component:Index
    },
    {
      path: '/singer',
      name:'singer',
      component:Singer
    },
    {
      path: '/ranklist',
      name:'ranklist',
      component:Ranklist
    },
    {
      path: '/search',
      name:'search',
      component:Search
    }
  ]
})
