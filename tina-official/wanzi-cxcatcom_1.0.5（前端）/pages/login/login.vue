<template>
	<view>
		<view class="content">
			<view class="logo">
				<image src="@/static/logo.png" mode=""></image>
			</view>
			<view class="uni-form-item uni-column">
				<input type="text" class="uni-input" @input="userInput" placeholder="请输入用户名" />
			</view>
			<view class="uni-form-item uni-column">
				<input type="password" class="uni-input" @input="passInput" placeholder="请输入密码" />
			</view>
			<button type="primary" @tap="login">登陆</button>
			<view class="links">
				<view @tap="gotoForgetPassword">忘记密码？</view>
				<view>|</view>
				<view class="link-highlight" @tap="gotoRegistration">注册账号</view>
			</view>
		</view>
	</view>
</template>

<script>
	import API from '@/api/api.js';
	export default {
		data() {
			return {
				user: '',
				pass: '',
				isDetail: false
			}
		},
		onLoad(options) {
			if (options.id) {
				this.isDetail = true
			}
		},
		methods: {
			login: function() {
				if (this.pass == '') {
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
						password: this.pass,
					}
					API.acountlogin(data).then(res => {
						API.storageUser(res);
						uni.showToast({
							title: '登陆成功',
						})
						if (this.isDetail) {
							uni.navigateBack({
								delta: 1,
							})
						} else {
							uni.switchTab({
								url: '/pages/mine/mine'
							})
						}

					}).catch(err => {
						uni.showToast({
							title: err.message
						})
					})
				}
			},
			gotologin: function() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			userInput: function(e) {
				this.user = e.detail.value;
			},
			passInput: function(e) {
				this.pass = e.detail.value;
			},

			gotoRegistration: function() {
				uni.navigateTo({
					url: '/pages/registration/registration'
				});
			},
			gotoForgetPassword: function() {
				uni.navigateTo({
					url: '/pages/forgetpass/forgetpass'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #0055ff;

	.content {
		padding: 100upx;
	}

	.logo {
		text-align: center;

		image {
			height: 100upx;
			width: 100upx;
			margin: 0 0 60upx;
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
