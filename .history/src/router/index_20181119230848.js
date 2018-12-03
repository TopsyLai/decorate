import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import personalIndex from '@/views/personal/index'
import regist from '@/views/regist'

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
  }]
})
