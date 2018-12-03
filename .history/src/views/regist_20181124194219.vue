<template>
    <div class="regist">
        <group>
            <x-input type="tel" title="" ref="phone" name="phone" placeholder="请输入手机号" v-model="phone" keyboard="number" is-type="china-mobile" required></x-input>
            <x-input should-error=false title="" ref="verifyCode" :max="4" :min="4" type="text" placeholder="请输入图片验证码" v-model="verifyCode">
              <img slot="right-full-height" type="primary" :src="getCode.img" />
            </x-input>
            <x-input title="" ref="mobileCode" type="text" :max=4 :min=4 placeholder="请输入短信验证码" v-model="mobileCode	" required>
                <x-button slot="right" type="primary" mini :disabled="getCode.disabled" @click.native="handleGetCode" style="width: 100px;">{{getCode.txt}}</x-button>
            </x-input>
            <x-input title="" type="password" placeholder="请设置登录密码" v-model="password" :min="6" :max="16" required></x-input>
            <x-input title="" type="password" placeholder="确认密码" v-model="passwordC" :min="6" :max="16" required></x-input>
            <x-input title="" type="tel" is-type="china-mobile" placeholder="邀请人手机号" v-model="invitationCode" :min="6" :max="16" required></x-input>
        </group>
        <p><span>注册后，您的微信账号和手机号都可以登录</span></p>
        <box gap="10px 25px">
            <x-button type="primary" @click.native="handleRegist">注册</x-button>
        </box>
        <p>
            <router-link to="/login" replace>已有账号？去登录</router-link>
        </p>
    </div>
</template>

<script>
import { XInput, Box, Group, XButton, md5 } from "vux";

export default {
  name: "regist",
  data() {
    return {
      phone: "", //手机号
      mobileCode: "", //验证码
      password: "", //密码
      passwordC: "", //确认密码
      verifyCode: "",//图片验证码
      invitationCode: "", //邀请人手机号(可选)
      getCode: {
        txt: "获取验证码",
        img: "api/common/getVerifyCode.htm",
        disabled: false
      }
    };
  },
  methods: {
    md5: md5,
    handleGetCode() {
      if (this.phone) {
        this.getCode.disabled = true;
        var params = new URLSearchParams();
        params.append("phone", this.phone);
        params.append("verifyCode", this.verifyCode);
        params.append("msgCode", 10010	);
        let self = this;
        this.$post("common/sendSms.htm", params).then(function(json){
          console.log('成功')
          console.log(json)
          self.getCode.txt = "获取中...";
          let seconds = 60;
          let time = setInterval(function() {
            --seconds;
            self.getCode.txt = seconds + "s";
            if (seconds <= 0) {
              clearInterval(time);
              self.getCode.disabled = false;
              self.getCode.txt = "获取验证码";
            }
          }, 1000);
        },function(json){
          console.log('失败')
          self.getCode.disabled = false;
          self.getCode.txt = json.errorMsg;
        });
      } else {
        this.$vux.toast.text("请先填写手机号");
      }
    },
    handleRegist() {
      if (
        !this.phone ||
        !this.mobileCode ||
        !this.password ||
        !this.passwordC
      ) {
        this.$vux.toast.text("您有未填项，不能注册");
      } else if (this.password != this.passwordC) {
        this.$vux.toast.text("两次输入的密码不一致");
      } else {
        var params = new URLSearchParams();
        params.append("phone", this.userName);
        params.append("password", this.md5(this.password));
        params.append("invitationCode",this.invitationCode);
        params.append("mobileCode",this.mobileCode);
        params.append("deviceId", 0);
        this.$post("account/userReg.htm", params).then(function(json){
          localStorage.setItem('tokenId',json.data.tokenId);
          console.log('成功')
          console.log(json)
          this.$vux.toast.text("注册成功");
        },function(json){
          console.log('失败')
          console.log(json)
        });
      }
    }
  },
  created() {
    window.document.title = "注册";
  },
  components: {
    XInput,
    XButton,
    Group,
    Box
  }
};
</script>