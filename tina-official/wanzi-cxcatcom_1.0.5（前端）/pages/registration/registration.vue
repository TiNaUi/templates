<template>
	<view class="content">
		<view class="logo">
			<image src="@/static/logo.png" mode=""></image>
		</view>
		<view class="uni-form-item uni-column">
			<input type="email" class="uni-input" @input="emailInput" placeholder="请输入邮箱" />
		</view>
		<view class="uni-form-item uni-column column-with-btn">
			<input type="number" class="uni-input" @input="codeInput" placeholder="请输入验证码" />
			<button :class="{active : !disableCodeBtn}" :disabled="disableCodeBtn"
				@tap="sendCode">{{codeBtn.text}}</button>
		</view>
		<view class="uni-form-item uni-column">
			<input type="text" class="uni-input" @input="userInput" name="" placeholder="请输入用户名" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" @input="passInput" name="" placeholder="请输入密码" />
		</view>
		<button type="primary" @tap="registra">注册</button>
		<view class="links">已有账号？<view class="link-highlight" @tap="gotoLogin">点此登陆</view>
		</view>
	</view>
</template>

<script>
	import API from '@/api/api.js';
	export default {
		data() {
			return {
				email: '',
				pass: '',
				code: '',
				user: '',
				disableCodeBtn: false,
				captchaImg: '',
				seconds: 60,
				codeBtn: {
					text: '获取验证码',
					waitingCode: false,
					count: this.seconds
				}
			}
		},
		methods: {
			emailInput: function(e) {
				this.email = e.detail.value;
			},
			isemail: function(text) {
				var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				return reg.test(text);
			},
			sendCode: function() {
				if (this.email == '' || !this.isemail(this.email)) {
					uni.showToast({
						title: '请输入正确的邮箱'
					})
					return;
				}

				if (this.codeBtn.waitingCode == false) {
					API.getEmailCode({
						email: this.email
					}).then(res => {
						console.log(res);
						if (res.status === 200) {
							uni.showToast({
								title: "验证码已发送"
							})
						}
					})
				}
				this.disableCodeBtn = true;
				this.codeBtn.waitingCode = true;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';
				let countdown = setInterval(() => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if (this.codeBtn.count < 0) {
						clearInterval(countdown);
						this.codeBtn.text = '重新发送';
						this.codeBtn.waitingCode = false;
						this.disableCodeBtn = false;
					}
				}, 1000);
			},
			codeInput: function(e) {
				this.code = e.detail.value;
			},
			passInput: function(e) {
				this.pass = e.detail.value;
			},
			userInput: function(e) {
				this.user = e.detail.value;
			},
			registra: function() {
				if (this.email == '') {
					uni.showToast({
						title: '请输入邮箱'
					})
					return;
				} else if (this.code == '') {
					uni.showToast({
						title: '请输入验证码'
					})
					return;
				} else if (this.pass == '') {
					uni.showToast({
						title: '请输入密码'
					})
					return;
				} else if (this.user == '') {
					uni.showToast({
						title: '请输入用户名'
					})
					return;
				} else if (this.pass.length < 6) {
					uni.showToast({
						title: '密码应大于6位'
					})
					return;
				} else {
					let data = {
						login: this.user,
						email: this.email,
						code: this.code,
						password: this.pass,
					}
					API.getRegistra(data).then(res => {
						console.log(res);
						uni.showToast({
							title: '注册成功',
						})
						setTimeout(this.gotoLogin(), 2000);
					}).catch(err => {
						uni.showToast({
							title: err.message
						})
					})
				}

			},
			gotoLogin: function() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>


<style lang="scss" scoped>
	$color-primary: #0055ff;

	.content {
		padding: 60upx 100upx 100upx;
	}

	.logo {
		text-align: center;

		image {
			height: 100upx;
			width: 100upx;
			margin: 0 0 40upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	.column-with-btn {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		button {
			font-size: 24upx;
			margin: 0;
			width: 180upx;
			text-align: center;

			&:after {
				border: none
			}

			&.active {
				background-color: $color-primary;
				color: $uni-text-color-inverse;
			}
		}
	}

	.img-captcha {
		width: 150upx;
		height: 60upx;
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
</style>
