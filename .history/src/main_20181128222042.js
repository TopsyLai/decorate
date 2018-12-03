// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import { post, fetch } from './components/http'
import  { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
window.MF = Vue;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  watch: {
    $route() {
      debugger
    }
  },
  template: '<App/>'
})
