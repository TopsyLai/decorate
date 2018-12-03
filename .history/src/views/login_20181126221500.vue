<template>
	<div class="login">
		<p>{{toastText}}</p>
		<group>
	      <x-input title="" ref="userName" name="text" placeholder="请输入手机号码" v-model="userName" keyboard="number" is-type="china-mobile" required></x-input>
	      <x-input title="" ref="password" type="password" placeholder="请输入密码" v-model="password" :min="6" :max="16" @on-change="change" required></x-input>
	    </group>
	    <p><span class="forget-pass">忘记密码?</span></p>
	    <box gap="10px 25px">
	    	<x-button type="primary" @click.native="handleLogin">登录</x-button>
	    	<!-- <x-button><img class="icon-wx" src="../../assets/icon-wx.png" />微信登录</x-button> -->
	    </box>
	    <p><span class="to-regist"><router-link to="/regist" replace >还没有账号？快去注册</router-link></span></p>
		<!-- <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="toastText" :position="position"></toast> -->
	</div>
</template>

<script>
import { XInput, Box, Group, XButton, md5 } from "vux";

export default {
  data() {
    return {
      self: this,
      userName: "", //用户名称、支持手机号
      password: "", //用户密码
      deviceId: 0, //移动端唯一标识
      showPositionValue: false, //是否显示提示
      position: "center", //提示信息的位置
      toastText: "" // 提示文本
    };
  },
  components: {
    XInput,
    XButton,
    Group,
    Box
  },
  created() {
    window.document.title = "登陆";
  },
  methods: {
    md5: md5,
    change(val) {
      console.log("on change", val);
    },
    handleLogin() {
      if (!this.userName || !this.password) {
        this.$vux.toast.text("您有未填项，不能登陆");
        return;
      } else if (!this.$refs.userName.valid && !this.$refs.password.valid) {
        this.$vux.toast.text("请填写正确的信息");
        return;
      }
      var params = new URLSearchParams();
      params.append("userName", this.userName);
      params.append("password", this.md5(this.password));
      params.append("deviceId", 0);
      this.$post("account/login.htm", params).then(
        function(json) {
          localStorage.setItem("tokenId", json.data.tokenId);
          if (window.history.length > 1) {
            self.$router.go(-1);
          } else {
            self.$router.replace("/");
          }
        },
        function(json) {
          console.log("失败");
          console.log(json);
        }
      );
    }
  }
};
</script>

<style scoped lang="less">
@color666: #666666;
@color393a31: #393a31;
.input-box {
  background-color: #ffffff;
}
.login {
  > p:first-of-type {
    padding: 20px 15px 40px;
    float: right;
    color: @color666;
    font-size: 14px;
  }
  > p:last-of-type {
    width: 100%;
    text-align: center;
    color: @color393a31;
    font-size: 14px;
    position: absolute;
    bottom: 25px;
  }
}
.icon-wx {
  width: 18px;
  height: 14px;
  margin-right: 6px;
}
</style>