import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tabbar'
import personalIndex from '@/views/personal/index'
import regist from '@/views/regist'
import login from '@/views/login'
import stationed from '@/views/personal/stationed'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Tab',
    component: Tab,
    redirect: '/personal', //从定向到首页
    children: [{
      path: '/personalIndex',
      name: 'index',
      component: personalIndex
    }, {
      path: '/find',
      name: 'find',
      component: personalIndex
    }, {
      path: '/find',
      name: 'find',
      component: personalIndex
    }, {
      path: '/personal',
      name: 'personal',
      component: personalIndex
    }]
  }, {
    path: '/regist',
    name: 'regist',
    component: regist
  }, {
    path: '/login',
    name: 'login',
    component: login
  },{
    path: '/stationed',
    name: 'stationed',
    component: stationed
  }
]
})
