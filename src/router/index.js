import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import pageEnter from '../pages/pageEnter'
import pageDetail from '../pages/pageDetail'
import pageIndex from '../pages/pageIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/enter',
    	name:'enter',
    	component:pageEnter
    },
    {
    	path:'/index',
    	name:'indexList',
    	component:pageIndex
    },
    {
        path:'/detail',
        name:'datail',
        component:pageDetail
    }
  ]
})
