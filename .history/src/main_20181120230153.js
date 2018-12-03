// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import {post,fetch} from './utils/http'

Vue.config.productionTip = false
Vue.prototype.axios = axios;
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
