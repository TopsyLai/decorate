import Vue from 'vue'
import Router from 'vue-router'
import Tab from '@/components/tabbar'
import personalIndex from '@/views/personal/index'
import regist from '@/views/regist'

Vue.use(Router)

export default new Router({
  name: 'router',
  routes: [{
    path: '/',
    name: 'Tab',
    component: Tab,
    redirect: '/personal', //从定向到首页
    children: [{
      path: '/index',
      name: 'index',
      component: personalIndex
    }, {
      path: '/find',
      name: 'find',
      component: personalIndex
    }, {
      path: '/work',
      name: 'work',
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
  }]
})
