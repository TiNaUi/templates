<template>
	<view>
		<view>
			<view class="content">
				<view class="logo">
					<image src="@/static/logo.png" mode=""></image>
				</view>
				<view class="uni-form-item uni-column">
					<input type="text" class="uni-input" @input="userInput" placeholder="请输入用户名或邮箱" />
				</view>
				<button type="primary" @tap="getPassWords">获取新密码</button>
				<view class="links">
					<view class="link-highlight" @tap="goto">登陆账号</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import API from '@/api/api.js';
	export default {
		data() {
			return {
				user:''
			}
		},
		methods: {
			userInput:function(e){
				this.user=e.detail.value;
			},
			getPassWords:function(){
				let data={
					login:this.user,
				}
				API.getPassWord(data).then(res=>{
					if(res.status==200)
					{
						uni.showToast({
							title:'重置邮箱已发送'
						})
					}
				}).catch(err=>{
					uni.showToast({
						title:err.message
					})
				})
			},
			goto:function(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
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
