// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import 'babel-polyfill'
import 'event-source-polyfill'
import 'url-search-params-polyfill'
import {
  post,
  fetch
} from './components/http'
import {
  ToastPlugin,
  LoadingPlugin
} from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)
Vue.use(VueRouter)

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
window.MF = Vue;

window.router = router

window.os = window.os || {};
var plus = navigator.userAgent.match(/Html5Plus/i); //TODO 5\+Browser?
if (plus) {
  window.os.plus = true;
  if (navigator.userAgent.match(/StreamApp/i)) { //TODO 最好有流应用自己的标识
    window.os.stream = true;
  }
}
if(window.os.plus){
  document.addEventListener('plusready',function () {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  },false);
}else{
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: {
      App
    },
    template: '<App/>'
  })
}

