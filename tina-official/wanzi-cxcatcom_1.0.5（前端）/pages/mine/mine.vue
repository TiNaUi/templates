<template>
	<view>
		<!--pages/mine/mine.wxml-->
		<view class="user-container" style="min-height: 100vh; padding-top: 30px;">
			<view class="user-information relative">
				<view v-if="user.avatarUrl" class="user-information_img"
					:style="'background-image: url('+user.avatarUrl+')'"></view>
				<image v-else class="user-information_img" src="@/static/images/avatar.png"></image>
				<view class="nickname">
					<view class="user-information_nickname">{{user.nickName?user.nickName:'游客'}}</view>
					<view class="user-information_introduction">{{user?'丸子小程序就是好看!':'点击这里授权登录'}}</view>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<button v-if="user==''" class="userLogin" @tap="getProfile"></button>
				<!-- #endif -->
				<!-- #ifdef MP-BAIDU||MP-TOUTIAO||MP-QQ -->
				<button v-if="user==''" class="userLogin" @getuserinfo="getProfile" openType="getUserInfo">登录</button>
				<!-- #endif -->
				<!-- #ifdef APP-PLUS || H5 -->
				<button v-if="user==''" class="userLogin" @tap="gotologin" openType="getUserInfo"></button>
				<!-- #endif -->
			</view>
			<view class="user-items">
				<view class="user-item relative">
					<text class="user-item_text">我的点赞</text>
					<view class="user-item_icon">
						<image class="user-item_icon_img"
							src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/my-inform.svg"></image>
					</view>
					<!-- #ifdef MP-WEIXIN -->
					<button v-if="user==''" class="userLogin" @tap="getProfile"></button>
					<!-- #endif -->
					<!-- #ifdef MP-BAIDU||MP-TOUTIAO||MP-QQ -->
					<button v-if="user==''" class="userLogin" @getuserinfo="getProfile"
						openType="getUserInfo">登录</button>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS || H5 -->
					<button v-if="user==''" class="userLogin" @tap="gotologin" openType="getUserInfo"></button>
					<!-- #endif -->
					<button v-else class="userLogin" @tap="bindHandler('/pages/posts/posts?id=1')"></button>
				</view>
				<view class="user-item relative">
					<text class="user-item_text">我的收藏</text>
					<view class="user-item_icon">
						<image class="user-item_icon_img"
							src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/my-like.svg"></image>
					</view>
					<!-- #ifdef MP-WEIXIN -->
					<button v-if="user==''" class="userLogin" @tap="getProfile"></button>
					<!-- #endif -->
					<!-- #ifdef MP-BAIDU||MP-TOUTIAO||MP-QQ -->
					<button v-if="user==''" class="userLogin" @getuserinfo="getProfile"
						openType="getUserInfo">登录</button>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS || H5 -->
					<button v-if="user==''" class="userLogin" @tap="gotologin" openType="getUserInfo"></button>
					<!-- #endif -->
					<button v-else class="userLogin" @tap="bindHandler('/pages/posts/posts?id=2')"></button>
				</view>
				<view class="user-item relative">
					<text class="user-item_text">我的评论</text>
					<view class="user-item_icon">
						<image class="user-item_icon_img"
							src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/my-dynamic.svg"></image>
					</view>
					<!-- #ifdef MP-WEIXIN -->
					<button v-if="user==''" class="userLogin" @tap="getProfile"></button>
					<!-- #endif -->
					<!-- #ifdef MP-BAIDU||MP-TOUTIAO||MP-QQ -->
					<button v-if="user==''" class="userLogin" @getuserinfo="getProfile"
						openType="getUserInfo">登录</button>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS || H5 -->
					<button v-if="user==''" class="userLogin" @tap="gotologin" openType="getUserInfo"></button>
					<!-- #endif -->
					<button v-else class="userLogin" @tap="bindHandler('/pages/posts/posts?id=3')"></button>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<view class="user-item relative">
					<text class="user-item_text">订阅更新</text>
					<view class="user-item_icon">
						<image class="user-item_icon_img" src="@/static/images/subscribe.png"></image>
					</view>

					<button v-if="user==''" class="userLogin" @tap="getProfile"></button>
					<button v-else class="userLogin" bindtap="bindSubscribe"></button>
				</view>
				<!-- #endif -->
				<view class="user-item">
					<text class="user-item_text">问题反馈</text>
					<view class="user-item_icon">
						<image class="user-item_icon_img"
							src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/feedback.svg"></image>
					</view>
					<button class="auth-btn" open-type="contact"></button>
				</view>
				<view class="user-item">
					<text class="user-item_text">清除缓存</text>
					<view class="user-item_icon">
						<image class="user-item_icon_img"
							src="https://cloud-minapp-16269.cloud.ifanrusercontent.com/small-logo-gray-with-radius.svg">
						</image>
					</view>
					<button class="auth-btn" @tap="loginOut"></button>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	var app = getApp();
	import API from '@/api/api.js';
	export default {
		data() {
			return {
				user: [],
				unreadMessageCount: 0,
			}
		},
		onShow() {
			let user = app.globalData.user
			if (!user) {
				user = '';
			}
			this.user = user
		},
		methods: {
			getProfile: function(e) {
				console.log(e)
				uni.showLoading({
					title: '正在登录...',
				})
				// #ifdef MP-WEIXIN
				API.getProfiles().then(res => {
						console.log(res)
						this.user = res
						uni.hideLoading()
					})
					.catch(err => {
						console.log(err)
						uni.hideLoading()
					})
				// #endif
				// #ifdef MP-BAIDU||MP-QQ||MP-TOUTIAO
				API.getProfile(e).then(res => {
						console.log(res)
						this.user = res
                        uni.showToast({
                        	title:'登陆成功'
                        })
						uni.hideLoading()
					})
					.catch(err => {
						console.log(err)
						uni.hideLoading()
					})
				// #endif
			},

			bindHandler: function(url) {
				uni.navigateTo({
					url: url
				})
			},

			loginOut: function() {
				API.Loginout()
				uni.clearStorageSync();
				uni.showToast({
					title: '清除完毕',
				})
			},
			gotologin: function() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},

			bindSubscribe: function() {
				let that = this
				let templates = API.template().subscribe
				wx.requestSubscribeMessage({
					tmplIds: templates,
					success(res) {
						if (res.errMsg == "requestSubscribeMessage:ok") {
							for (let i = 0; i < templates.length; i++) {
								let template = templates[i]
								that.subscribeMessage(template, "accept")
							}
						}
					},
					fail: function(res) {
						console.log(res)
					}
				})
			},
			 subscribeMessage: function(template,status) {
			    let args = {}
			    args.openid = this.data.user.openId
			    args.template = template
			    args.status = status
			    args.pages = getCurrentPages()[0].route
			    args.platform = wx.getSystemInfoSync().platform
			    args.program = 'WeChat'
			    API.subscribeMessage(args).then(res => {
			      console.log(res)
			      wx.showToast({
			        title: res.message,
			        icon: 'success',
			        duration: 1000
			      })
			    })
			    .catch(err => {
			      console.log(err)
			      wx.showToast({
			        title: err.message,
			        icon: 'success',
			        duration: 1000
			      })
			    })
			  },
		}
	}
</script>

<style>
	/* pages/mine/mine.wxss */
	.user-container {
		background-color: #F5F7F9;
		overflow: hidden;
		box-sizing: border-box;
		padding-bottom: 68rpx;
	}

	.user-information {
		display: flex;
		padding: 48rpx 24rpx;
		margin: 24rpx 24rpx 0;
		background-color: #fff;
		border-radius: 16rpx;
	}

	.user-information_img {
		position: relative;
		width: 140rpx;
		height: 140rpx;
		border-radius: 50%;
		border: 4rpx solid #fff;
		overflow: hidden;
		background-size: cover;
		background-position: center;
		margin-right: 32rpx;
		overflow: hidden;
	}

	.nickname {
		flex: 1;
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
	}

	.user-information_nickname {
		font-size: 44rpx;
		font-weight: bold;
		line-height: 60rpx;
		color: #121212;
	}

	.user-information_introduction {
		font-size: 28rpx;
		line-height: 40rpx;
		color: #7D7D7D;
		margin-top: 10rpx;
		opacity: .8;
	}

	.user-items {
		padding: 24rpx 40rpx;
		margin: 24rpx;
		border-radius: 16rpx;
		background-color: #fff;
	}

	.user-item {
		position: relative;
		height: 120rpx;
		line-height: 120rpx;
		font-size: 36rpx;
		color: #3A3A3A;
		border-bottom: 1rpx solid #E8E8E8;
	}

	.user-item:last-child {
		border-bottom: none;
	}

	.user-item_text {
		position: relative;
		z-index: 10;
		pointer-events: none;
	}

	.user-item_icon {
		position: relative;
		z-index: 10;
		float: right;
		vertical-align: middle;
		width: 60rpx;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		pointer-events: none;
	}

	.user-item_switch {
		float: right;
		transform: scale(0.8, .8);
		margin-right: -20rpx;
	}

	.user-item_icon_img {
		width: 100%;
		height: 60rpx;
	}

	.user-item_icon_sup {
		position: absolute;
		right: -1rpx;
		top: 24rpx;
		width: 32rpx;
		height: 32rpx;
		background: #F13B03;
		border: 2rpx solid #FFFFFF;
		border-radius: 50%;
		font-weight: bold;
		font-size: 24rpx;
		color: #FFFFFF;
		line-height: 32rpx;
		text-align: center;
	}

	.user-welfare {
		position: relative;
		margin: 54rpx 24rpx;
		height: 196rpx;
	}

	.user-welfare_img {
		width: 100%;
		height: 100%;
	}

	.my-login {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: none;
	}

	.my-login::after {
		border: none;
	}

	.auth-btn {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: transparent;
		padding: 0;
		text-align: left;
		line-height: 120rpx;
		color: #3A3A3A;
	}

	.auth-btn:after {
		border: none;
	}

	.separator {
		width: 100%;
		height: 24rpx;
	}

	.relative {
		position: relative;
	}

	.userLogin {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		position: absolute;
	}
</style>
