<template>
	<div class="login">
		<group>
	      <x-input title="" name="mobile" placeholder="请输入手机号码" v-model="mobile" keyboard="number" is-type="china-mobile" required></x-input>
	      <x-input title="" type="text" placeholder="请输入密码" v-model="password" :min="6" :max="16" @on-change="change" required></x-input>
	    </group>
	    <p><span class="forget-pass">忘记密码?</span></p>
	    <box gap="10px 25px">
	    	<x-button type="primary" @click.native="handleLogin">登录</x-button>
	    	<!-- <x-button><img class="icon-wx" src="../../assets/icon-wx.png" />微信登录</x-button> -->
	    </box>
	    <p><span class="to-regist"><router-link to="/regist" replace >还没有账号？快去注册</router-link></span></p>
	</div>
</template>

<script>
	import { XInput,Box, Group, XButton } from 'vux'
	import md5 from 'js-md5'
	export default {
		name: 'login',
		data() {
			return {
				mobile:'',//用户手机号
				password:'',//用户密码
			}
		},
		components: {
		    XInput,
		    XButton,
		    Group,
		    Box
		},
		methods:{
			change (val) {
		      console.log('on change', val)
			},
			handleLogin(){


				var params = new URLSearchParams();
				params.append('userName', this.mobile);
				params.append('password', md5(this.password));
				params.append('deviceId', 0);
				this.$post("account/login.htm",params).then(response => {
					Vue.prototype.$tokenId = response.data.tokenId;
					this.$router.go(-1)
				});
			}
		}
	}
</script>

<style scoped lang="less">
	@color666:#666666;
	@color393a31:#393a31;
	.input-box{
		background-color: #FFFFFF;
	}
	.login{
		>p:first-of-type{
			padding: 20px 15px 40px;
			float: right;
			color: @color666;
			font-size:14px;
		}
		>p:last-of-type{
			width: 100%;
			text-align: center;
			color: @color393a31;
			font-size:14px;
			position: absolute;
			bottom: 25px;
		}
	}
	.icon-wx{
		width: 18px;
		height: 14px;
		margin-right: 6px;
	}
</style>