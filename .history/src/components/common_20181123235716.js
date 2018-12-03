import Vue from 'vue'
import  { ToastPlugin, LoadingPlugin } from 'vux'

const CancelToken = axios.CancelToken;
const self = this;

self.userInfo = {
  name: "游客"
};
export default function $callBack(response) {
  debugger

  if (response.data.code == 6000) {
    router.push({
      path: "/login",
      querry: {
        redirect: router.currentRoute.fullPath
      } //从哪个页面跳转
    });
    return false;
  } else if (response.data.code == 9999) {
    Vue.$vux.toast.text(response.data.errorMsg);
    reject(response.data);
  } else {
    resolve(response.data);
  }
}