// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import { post, fetch } from './components/http'
import  { ToastPlugin, LoadingPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;

//请求回调统一处理判断
function callBack(json){
  this.userInfo = {
    name: '游客'
  };
  
  if(json.code==200){
    return 
  }else if(json.code==9999){
    return false;
  }else{
    Vue.$vux.toast.text(response.data.errorMsg);
  }
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
