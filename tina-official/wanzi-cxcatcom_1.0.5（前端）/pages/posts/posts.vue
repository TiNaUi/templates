<template>
	<view>
		<!--pages/posts/posts.wxml-->
		<view class="tab-content">
			<view class="index">
				<view class="index_article" v-if="posts.length>0">
					<block v-for="(item,index) in posts" :key="index">
						<view @click="bindDetail(item.id)">
							<view style="position: relative;height: 380rpx">
								<image mode="aspectFill" class="index_article_cover" :src="item.meta.thumbnail"></image>
								<view class="index_article_during">
									<text>{{item.category[0].name}}</text>
								</view>
							</view>
							<view class="index_article_title">{{item.title.rendered}}</view>
							<view class="index_article_desc">{{item.excerpt.rendered}}</view>
						</view>
					</block>
				</view>
				<view class="index_article" v-if="isLastPage&&posts.length==0">
					<view style="position: relative;height: 680rpx">
						<image mode="widthFix" class="index_article_cover" src="@/static/images/null.png"></image>
					</view>
					<view class="last_text">对不起! 你查看的内容没有找到</view>
				</view>
				<view class="last_text" v-if="isLastPage&&posts.length>0">已经到底啦~</view>
				<view class="last_text" v-if="!isLastPage&&posts.length>0">努力加载中...</view>
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
				posts: [],
				isLastPage: false,
				page: 1
			}
		},
		onLoad(options) {

			this.options = options;

			if (options.id == 1) {
				uni.setNavigationBarTitle({
					title: '我的点赞'
				})
				this.getLikePosts();
			} else if (options.id == 2) {
				uni.setNavigationBarTitle({
					title: '我的收藏'
				})
				this.getFavPosts();
			} else if (options.id == 3) {
				uni.setNavigationBarTitle({
					title: '我的评论'
				})
				this.getCommentsPosts();
			}
		},
		onReachBottom() {
			if (!this.isLastPage) {
				if (this.options.id == 1) {
					this.getLikePosts({
						page: this.page
					});
				} else if (this.options.id == 2) {
					this.getFavPosts({
						page: this.page
					});
				} else if (this.options.id == 3) {
					this.getCommentsPosts({
						page: this.page
					});
				}
			}
		},
		onPullDownRefresh() {
			this.page = 1;
			this.posts = [];
			this.isLastPage = flase;
			if (this.data.id == 1) {
				this.getLikePosts();
			} else if (this.data.id == 2) {
				this.getFavPosts();
			} else if (this.data.id == 3) {
				this.getCommentsPosts();
			}
		},
		methods: {
			bindDetail: function(id) {
				console.log(id);
				uni.navigateTo({
					url: '/pages/detail/detail?id=' + id,
				})
			},


			getLikePosts: function(args) {
				API.getLikePosts(args).then(res => {
						console.log(res);
						if (res.length < 10) {
							this.isLastPage = true,
								this.loadtext = '到底啦',
								this.showloadmore = false

						}
						this.posts = this.posts.concat(res)
						this.page = this.page + 1
						uni.stopPullDownRefresh()
					})
					.catch(err => {
						console.log(err)
						if (err == "授权信息有误") {
							uni.showModal({
							  title: '温馨提示',
							  content: '数据出错, 建议清除缓存重新尝试',
							  success: response => {
							    uni.removeStorageSync('user')
							    uni.removeStorageSync('token')
							    uni.removeStorageSync('expired_in')
							  }
							})
						}
						uni.stopPullDownRefresh()
					})
			},

			getFavPosts: function(args) {
				API.getFavPosts(args).then(res => {
						console.log(res);
						if (res.length < 10) {
							this.isLastPage = true,
								this.loadtext = '到底啦',
								this.showloadmore = false

						}
						this.posts = this.posts.concat(res)
						this.page = this.page + 1
						uni.stopPullDownRefresh()
					})
					.catch(err => {
						console.log(err)
						if (err == "授权信息有误") {
							uni.showModal({
							  title: '温馨提示',
							  content: '数据出错, 建议清除缓存重新尝试',
							  success: response => {
							    uni.removeStorageSync('user')
							    uni.removeStorageSync('token')
							    uni.removeStorageSync('expired_in')
							  }
							})
						}
						uni.stopPullDownRefresh()
					})
			},

			getCommentsPosts: function(args) {
				API.getCommentsPosts(args).then(res => {
						console.log(res);
						if (res.length < 10) {
							this.isLastPage = true,
								this.loadtext = '到底啦',
								this.showloadmore = false

						}
						this.posts = this.posts.concat(res)
						this.page = this.page + 1
						uni.stopPullDownRefresh()
					})
					.catch(err => {
						console.log(err)
						if (err == "授权信息有误") {
							uni.showModal({
							  title: '温馨提示',
							  content: '数据出错, 建议清除缓存重新尝试',
							  success: response => {
							    uni.removeStorageSync('user')
							    uni.removeStorageSync('token')
							    uni.removeStorageSync('expired_in')
							  }
							})
						}
						uni.stopPullDownRefresh()
					})
			},

			getProfile: function(e) {
				console.log(e)
				uni.showLoading({
					title: '正在登录...',
				})
				// #ifdef MP
				API.getProfiles().then(res => {
						console.log(res)
						this.user = res
						if (this.options.id == 1) {
							this.getLikePosts();
						} else if (this.options.id == 2) {
							this.getFavPosts();
						} else if (this.options.id == 3) {
							this.getCommentsPosts();
						}
						uni.hideLoading()
					})
					.catch(err => {
						console.log(err)
						uni.hideLoading()
					})
				// #endif
				// #ifndef MP
				API.getProfile().then(res => {
						console.log(res)
						this.user = res
						if (this.options.id == 1) {
							this.getLikePosts();
						} else if (this.options.id == 2) {
							this.getFavPosts();
						} else if (this.options.id == 3) {
							this.getCommentsPosts();
						}
						uni.hideLoading()
					})
					.catch(err => {
						console.log(err)
						uni.hideLoading()
					})
				// #endif
			},
		}
	}
</script>

<style>
	/* pages/posts/posts.wxss */
	.index {
		padding: 20rpx 36rpx;
	}

	.top_text {
		width: 100%;
		text-align: center;
		color: #AAA;
		font-size: 24rpx;
	}

	page::-webkit-scrollbar {
		display: none;
	}

	.index_label {
		position: relative;
	}

	.index_label_title {
		font-size: 48rpx;
		color: #262626;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.index_label_bg {
		width: 160rpx;
		height: 12rpx;
		background: linear-gradient(270deg, rgba(249, 228, 135, 0) 0%, rgba(241, 197, 79, 1) 100%);
		border-radius: 11rpx;
		position: absolute;
		top: 48rpx;
		left: 0;
	}

	.index_label_more {
		position: absolute;
		right: 0;
		top: -14rpx;
		color: #888888;
		font-size: 28rpx;
		line-height: 48rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.index_comment_box {
		margin: 120rpx 30rpx 0 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
	}

	.index_comment {
		background: rgba(246, 247, 249, 1);
		border-radius: 4rpx;
		padding: 70rpx 40rpx 100rpx 40rpx;
	}

	.index_comment_hb {
		display: flex;
		flex-direction: row;
	}

	.index_comment_avatar {
		width: 70rpx;
		height: 70rpx;
		border-radius: 50%;
		background: #888888;
	}

	.index_comment_hb_name {
		color: #888888;
		font-size: 24rpx;
		line-height: 37rpx;
	}

	.index_comment_hb_title {
		color: #262626;
		font-size: 24rpx;
		line-height: 24rpx;
		margin-left: 6rpx;
		width: 220rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.index_comment_content {
		color: #262626;
		font-size: 32rpx;
		height: 240rpx;
		width: 340rpx;
		display: inline-block;
		margin-top: 50rpx;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
	}

	.index_article_cover {
		width: 678rpx;
		height: 380rpx;
		border-radius: 4rpx;
	}

	.index_article {
		margin-top: 20rpx;
	}

	.index_article_title {
		font-size: 36rpx;
		font-weight: 400;
		color: rgba(38, 38, 38, 1);
		line-height: 50rpx;
		margin-top: 30rpx;
		width: 678rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.index_article_desc {
		color: #888888;
		font-size: 28rpx;
		margin-bottom: 70rpx;
		overflow: hidden;
		margin-top: 16rpx;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-wrap: break-word;
	}

	.index_article_during {
		position: absolute;
		top: 326rpx;
		left: 16rpx;
		z-index: 1;
		/* width: 120rpx; */
		height: 40rpx;
		background: rgba(38, 38, 38, 1);
		border-radius: 4rpx;
		opacity: 0.9;
		padding: 2rpx 10rpx;
		text-align: center;
		line-height: 32rpx;
	}

	.index_article_during text {
		font-size: 22rpx;
		color: #fff;
		margin-left: 8rpx;
	}

	.last_text {
		width: 100%;
		text-align: center;
		color: #AAA;
		font-size: 24rpx;
		margin: 90rpx 0 30rpx;
	}
</style>
