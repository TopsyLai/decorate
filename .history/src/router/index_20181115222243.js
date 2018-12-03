import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import accountIndex from '@/components/account/index'
import regist from '@/regist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },{
      path: '/mine',
      name: 'account',
      component: accountIndex
    },{
      path: '/regist',
      name: 'regist',
      component: regist
    }
  ]
})
