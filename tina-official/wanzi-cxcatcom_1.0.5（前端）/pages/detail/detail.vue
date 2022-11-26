<template>
	<view>
		<view class="topic-detail">
			<view class="article-info" v-if="detail">
				<text class="title">{{detail.title.rendered}}</text>
				<view class="article-info__category">
					<i class="cuIcon-form icons"></i>
					<text class="category">{{detail.category[0].name}}</text>
					<i class="cuIcon-time icons"></i>
					<text class="time">{{detail.date}}</text>
				</view>
			</view>
			<view class="article-info" v-else>
				<view class="title" style='width:420rpx;height:40rpx;background:#f3f3f3'></view>
				<view class="article-info__category">
					<image class="avator" style='background:#f3f3f3'></image>
					<text class="category" style='width:100rpx;height:40rpx;background:#f3f3f3'></text>
					<i></i>
					<text class="time" style='width:100rpx;height:40rpx;background:#f3f3f3'></text>
				</view>
			</view>
			<view id="entry-content" v-if="detail" class="entry-content clearfix">
				<jyf-parser :html="detail.content.rendered" ref="article" :tag-style="tagStyle"></jyf-parser>
			</view>
			<view id="entry-content" v-else class="entry-content clearfix">
				<view style='padding-top:20rpx' wx:for="article" wx:key="index">
					<view style='width:690rpx;height:40rpx;background:#f3f3f3'></view>
					<view style='width:690rpx;height:250rpx;background:#f3f3f3;margin-top:20rpx'></view>
				</view>
			</view>
			<view class="topic-title-wrapper" id="comment">
				<view class="topic-title">话题讨论</view>
				<view class="onlooker-amount relative">
					<text>邀请好友参与讨论 </text>
					<text class="onlooker-arrow">>></text>
					<button open-type='share' class="userLogin"></button>
				</view>
			</view>
			<view class="commentdata">
				<view class="listnodata" v-if="comments.length==0">
					<image class="nodataimg" lazyLoad="false" mode="aspectFit|aspectFill|widthFix"
						src="@/static/images/message.png"></image>
					<view class="nodatatext">
						还没有评论，快来抢沙发吧！</view>
				</view>
				<view class="comment-reply" v-else>
					<view class="comment-reply-item" @tap="replyComment(item.id,item.author.name)"
						v-for="(item,index) in comments" :key="index">
						<view class="comment-header">
							<view class="comment-header-left">
								<image class="comment-avatar" :src="item.author.avatar"></image>
								<view class="comment-user-date">
									<text>{{item.author.name}}</text>
									<text>{{item.date}}</text>
								</view>
							</view>
							<view class="comment-header-right">
								<text></text>
							</view>
						</view>
						<view class="comment-content">
							<text @tap="replay"></text> {{item.content}}
						</view>
						<!-- 一级回复 -->
						<view class="replay-content" v-for="(item1,idx) in item.reply" :key="idx">
							<view class="replay-user" @tap="replyComment(item1.id,item1.author.name)">
								<text style="font-weight:bold;"> {{item1.author.name}} </text>:{{item1.content}}
							</view>
							<!-- 二级回复 -->
							<view v-for="(item2,idx2) in item1.reply" :key="idx2">
								<view class="replay-user" @tap="replyComment(item1.id,item.author.name)">
									<text style="font-weight:bold;"> {{item2.author.name}} </text> 回复
									{{item1.author.name}}:{{item2.content}}
								</view>
								<!-- 三级回复 -->
								<view v-for="(item3,idx3) in item2.reply" :key="idx2">
									<view class="replay-user" @tap="replyComment(item3.id,item3.author.name)">
										<text style="font-weight:bold;"> {{item3.author.name}} </text> 回复
										{{item2.author.name}}:{{item3.content}}
									</view>
									<!-- 四级回复 -->
									<view v-for="(item4,idx4) in item3.reply" :key="idx4">
										<view class="replay-user">
											<text style="font-weight:bold;"> {{item4.author.name}} </text> 回复
											{{item3.author.name}}:{{item4.content}}
										</view>
									</view>
									<!-- 四级回复 -->
								</view>
								<!-- 三级回复  -->
							</view>
							<!-- 二级回复 -->
						</view>
						<!-- 一级回复  -->
						<view class="comment-footer">
							<view style="height:1px;background:#f1f1f1;margin-right:20rpx"></view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bottom">
			<form catchsubmit="formSubmit" report-submit="true" v-if="!showTextarea">
				<view class="bottom-bar" :class="isIphoneX?'bottom-bar-iphonex':''">
					<image @tap="bindBack" class="bottom-btn bottom-back" src="@/static/images/back.png"></image>
					<view class="bottom-btn bottom-text relative" style="width:260rpx">
						<text>{{placeholder}}</text>

						<button class="userLogin" @tap="tapcomment"></button>
					</view>
					<view class="bottom-btn bottom-comment-container relative">
						<image class="bottom-comment"
							:src="detail.isfav?require('@/static/images/collected.png'):require('@/static/images/collect.png')">
						</image>
						<!-- #ifdef MP-WEIXIN -->
						<button v-if="user==''" class="userLogin" @tap="getProfile"></button>
						<button v-else class="userLogin" @tap="bindFavTap"></button>
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<button v-if="user==''" class="userLogin" @tap="getTtProfile"></button>
						<button v-else class="userLogin" @tap="bindFavTap"></button>
						<!-- #endif -->
						<!-- #ifdef MP-BAIDU||MP-QQ -->
						<button v-if="user==''" class="userLogin" @getuserinfo="getProfile"
							openType="getUserInfo"></button>
						<button v-else class="userLogin" @tap="bindFavTap"></button>
						<!-- #endif -->
					    <!-- #ifdef APP-PLUS || H5 -->
					    <button v-if="user==''" class="userLogin" @tap="gotologin"
					    	openType="getUserInfo"></button>
					    <button v-else class="userLogin" @tap="bindFavTap"></button>
					    <!-- #endif -->
					</view>
					<view class="bottom-btn bottom-comment-container">
						<image class="bottom-btn bottom-fav"
							:src="detail.islike?require('@/static/images/liked.png'):require('@/static/images/like.png')">
						</image>
						<!-- #ifdef MP-WEIXIN -->
						<button v-if="user==''" class="userLogin" @tap="getProfile"></button>
						<button v-else class="userLogin" @tap="bindLikeTap"></button>
						<!-- #endif -->
						<!-- #ifdef MP-TOUTIAO -->
						<button v-if="user==''" class="userLogin" @tap="getTtProfile"></button>
						<button v-else class="userLogin" @tap="bindFavTap"></button>
						<!-- #endif -->
						<!-- #ifdef MP-BAIDU||MP-QQ -->
						<button v-if="user==''" class="userLogin" @getuserinfo="getProfile"
							openType="getUserInfo"></button>
						<button v-else class="userLogin" @tap="bindLikeTap"></button>
						<!-- #endif -->
						<!-- #ifdef APP-PLUS || H5 -->
						<button v-if="user==''" class="userLogin" @tap="gotologin"
							openType="getUserInfo"></button>
						<button v-else class="userLogin" @tap="bindLikeTap"></button>
						<!-- #endif -->
					</view>
					<button class="bottom-btn bottom-share bottom-fav btn-clear-style" plain="true" open-type="share">
						<image src="@/static/images/share.png"></image>
					</button>
				</view>
			</form>
		</view>
		<view capture-catch:touchmove class="textareacontent" v-if="showTextarea">
			<form catchsubmit="addComment">
				<view class="textheaders">
					<view @tap="closeCommentary" class="cancel">取消</view>
					<!-- #ifdef MP-WEIXIN -->
					<button v-if="user==''" class="nopublish" @tap="getProfile">登录</button>
					<!-- #endif -->
					<!-- #ifdef MP-TOUTIAO -->
					<button v-if="user==''" class="userLogin" @tap="getTtProfile"></button>
					<button v-else class="userLogin" @tap="bindFavTap"></button>
					<!-- #endif -->
					<!-- #ifdef MP-BAIDU||MP-QQ -->
					<button v-if="user==''" class="nopublish" @getuserinfo="getProfile"
						openType="getUserInfo">登录</button>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS || H5 -->
					<button v-if="user==''" class="nopublish" @tap="gotologin"
						openType="getUserInfo">登录</button>
					<!-- #endif -->
					<button v-else @tap="addComment" class="publish">发布</button>
				</view>
				<view class="textareaBox" v-if="showTextarea">
					<textarea autoFocus="true" name="inputComment" @input="bindInputContent" class="textareaInput"
						:fixed="true" :focus="focus" maxlength="1000" :placeholder="placeholder" :showConfirmBar="false"
						style="height: 286rpx;" :value="content"></textarea>
					<view class="textNum">{{textNum}}/1000</view>
				</view>
			</form>
		</view>
		<view @tap="closeCommentary" class="pagemake" v-if="showTextarea"></view>
	</view>
</template>

<script>
	import API from '@/api/api.js';
	const app = getApp()
	export default {
		data() {
			return {
				comments: [],
				detail: '',
				showTextarea: false,
				isLastPage: false,
				page: 1,
				tagStyle: {
					img: 'width:100%;display:block;',
					table: 'width:100%',
					video: 'width:100%'
				},
				isIphoneX: false,
				user: [],
				placeholder: '说点什么..',
				user: '',
				focus: false,
				commentsId: 0,
				textNum: 0,

			}
		},
		onLoad(options) {
			this.id = options.id;
			this.getPostsbyID(this.id);
		},
		onShow() {
			let user = app.globalData.user
			if (!user) {
				user = '';
			}
			this.user = user
		},
		onShareAppMessage() {
			return {
				title: this.detail.title.rendered,
				path:'/pages/detail/detail?id='+this.detail.id,
				desc:this.detail.excerpt.rendered,
				imageUrl:this.detail.meta.thumbnail,
			}
		},
		methods: {

			getPostsbyID: function(id) {
				console.log(id);
				API.getPostsbyID(id).then(res => {
						this.detail = res;
						console.log(res);
						if (res.comments != 0) {
							this.getComments()
						}
					})
					.catch(err => {
						console.log(err)
					})
			},
			
			gotologin:function(){
				uni.navigateTo({
					url:'/pages/login/login?id=1'
				})
			},
			
			getTtProfile:function(){
				uni.showLoading({
					title: '正在登录...',
				})
				API.getTtProfile().then(res => {
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
			},


			getProfile: function(e) {
				console.log(e)
				uni.showLoading({
					title: '正在登录...',
				})
				// #ifdef MP-WEIXIN
				API.getProfiles().then(res => {
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
				// #ifdef MP-QQ ||MP-BAIDU
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
			getComments: function() {
				API.getComments({
					id: this.id,
					page: this.page
				}).then(res => {
					let data = {}
					if (res.length < 10) {
						this.isLastPage = true;
						this.loadtext = '到底啦';
						this.showloadmore = false;

					}
					if (this.isBottom) {
						this.comments = this.comments.concat(res)
						this.page = this.page + 1
					} else {
						this.comments = res
						this.page = this.page + 1
					}
				})
			},
			
			
			  bindFavTap: function() {
				let args = {}
			    args.id = this.id
				let that=this
			    API.fav(args).then(res => {
			      //console.log(res)
			      if (res.status === 200) {
			        this.detail.isfav = true
			       uni.showToast({
			          title: '加入收藏!',
			          icon: 'success',
			          duration: 900,
			        })
			      } else if (res.status === 202) {
			        this.detail.isfav = false
			        uni.showToast({
			          title: '取消收藏!',
			          icon: 'success',
			          duration: 900,
			        })
			      } else {
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
			    })
			    .catch(err => {
			      if(err.message=="授权信息有误")
			      {
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
			    })
			  },
			
			  bindLikeTap: function(e) {
				let args = {}
				let that=this;
			    args.id = this.id
			    API.like(args).then(res => {
			      //console.log(res)
			      if (res.status === 200) {
                    this.detail.islike = true 
			        uni.showToast({
			          title: '谢谢点赞!',
			          icon: 'success',
			          duration: 900,
			        })
			      } else if (res.status === 202) {
			        this.detail.islike = false
			        uni.showToast({
			          title: '取消点赞!',
			          icon: 'success',
			          duration: 900,
			        })
			      } else {
			        uni.showModal({
			          title: '温馨提示',
			          content: '数据出错, 建议清除缓存重新尝试',
			          success: response => {
						that.user='',
			            uni.removeStorageSync('user')
			            uni.removeStorageSync('token')
			            uni.removeStorageSync('expired_in')
			          }
			        })
			      }
			    })
			    .catch(err => {
			      if(err.message=="授权信息有误")
			      {
			        uni.showModal({
			          title: '温馨提示',
			          content: '数据出错, 建议清除缓存重新尝试',
			          success: response => {
						that.user='',
			            uni.removeStorageSync('user')
			            uni.removeStorageSync('token')
			            uni.removeStorageSync('expired_in')
			          }
			        })
			      }
			    })
			  },

			bindBack: function() {
				wx.navigateBack()
			},


			tapcomment: function(id) {
				if (id) {
					this.commentsId = id,
						this.showTextarea = true

				} else {
					this.showTextarea = true
				}
				setTimeout(function() {
					this.focus = true

				}, 100);
			},
			closeCommentary: function() {
				this.showTextarea = false

			},

			bindInputContent: function(e) {
				this.content = e.detail.value;
			},
			replyComment: function(parent, reply) {
				this.isFocus = true;
				this.isReply = true;
				this.parent = parent;
				this.placeholder = " 回复 " + reply + ":";
			},

			addComment: function(e) {
				console.log(e)
				let args = {}
				let that = this
				args.id = this.id
				args.content = this.content
				args.parent = this.parent
				if (!this.user) {
					uni.showModal({
						title: '提示',
						content: '必须授权登录才可以评论',
						success: function(res) {
							if (res.confirm) {
								that.getProfile();
							}
						}
					})
				} else if (args.content.length === 0) {
					uni.showModal({
						title: '提示',
						content: '评论内容不能为空'
					})
				} else {
					API.addComment(args).then(res => {
							console.log(res)
							if (res.status === 200) {
								this.page = 1;
								this.showTextarea = false;
								this.content = "";
								this.comments = [];
								this.placeholder = "";
								this.isFocus = false;
								setTimeout(function() {
									uni.showModal({
										title: '温馨提示',
										content: res.message
									})
								}, 900)
								if (!this.isComments) {
									this.isComments = true;
									this.placeholder = ''
								}
								//this.bindSubscribe()
								this.getComments()
							} else if (res.status === 500) {
								uni.showModal({
									title: '提示',
									content: '评论失败，请稍后重试。'
								})
							} else {
								uni.showModal({
								  title: '温馨提示',
								  content: '数据出错, 建议清除缓存重新尝试',
								  success: response => {
									  that.user='',
								    uni.removeStorageSync('user')
								    uni.removeStorageSync('token')
								    uni.removeStorageSync('expired_in')
								  }
								})
							}
						})
						.catch(err => {
							console.log(err)
							uni.showModal({
								title: '提示',
								content: '评论失败，请稍后重试。'
							})
						})
				}
			}
		}
	}
</script>

<style>
	.flex {
		display: flex;
	}

	@-webkit-keyframes infinite-move {
		from {
			opacity: 1;
			transform: translateX(0);
		}

		to {
			opacity: 0.6;
			transform: translateX(6rpx);
		}
	}

	@keyframes infinite-move {
		from {
			opacity: 1;
			transform: translateX(0);
		}

		to {
			opacity: 0.6;
			transform: translateX(6rpx);
		}
	}

	.icons {
		padding-right: 20rpx;
	}

	.topic-detail {
		height: 100vh;
		background: transparent;
		-webkit-overflow-scrolling: touch;
	}

	.topic-detail .topic-header {
		position: relative;
		width: 100%;
	}

	.topic-detail .topic-header .topic-banner {
		display: block;
		width: 100%;
		height: 420rpx;
	}

	.topic-detail .topic-header .topic-review {
		padding: 26rpx 80rpx 80rpx;
		font-size: 30rpx;
	}

	.topic-detail .topic-header .topic-review text {
		display: block;
		text-align: justify;
		line-height: 60rpx;
	}

	.topic-detail .topic-subtitle {
		margin-top: 56rpx;
		padding: 0 32rpx;
		font-size: 36rpx;
		font-weight: 700;
		color: #3b3b3b;
		line-height: 60rpx;
	}

	.topic-detail .topic-subtitle.short-margin {
		margin-top: 36rpx;
		margin-bottom: 24rpx;
	}

	.topic-detail .topic-title {
		margin-top: 80rpx;
		padding: 0 32rpx;
		font-size: 44rpx;
		font-weight: 700;
		color: #3b3b3b;
		line-height: 52rpx;
	}

	.topic-detail .topic-title-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 80rpx;
	}

	.topic-detail .topic-title-wrapper .topic-title {
		margin-top: 0;
	}

	.topic-detail .topic-title-wrapper .onlooker-amount {
		position: relative;
		right: 0;
		bottom: 0;
		padding: 6rpx 8rpx 8rpx 18rpx;
		background: #565656;
		border-radius: 8rpx 0rpx 0rpx 8rpx;
		font-size: 30rpx;
		font-weight: 400;
		line-height: 44rpx;
		color: #fff;
	}

	.topic-detail .topic-title-wrapper .onlooker-amount .onlooker-arrow {
		animation: infinite-move 0.8s linear infinite alternate;
		display: inline-block;
		margin: 0 8rpx;
	}

	.topic-detail .vote-amount,
	.topic-detail .all-comments-count {
		padding: 0 32rpx;
		font-size: 28rpx;
		color: #ababab;
		line-height: 34rpx;
	}

	.topic-detail .vote-wrapper {
		display: flex;
		justify-content: space-between;
		margin-top: 26rpx;
		padding: 0 32rpx;
	}

	.topic-detail .vote-share {
		margin: 14rpx 32rpx 14rpx 32rpx;
		font-size: 28rpx;
		font-weight: bold;
	}

	.topic-detail .editor {
		margin: 48rpx 32rpx 64rpx;
		font-size: 28rpx;
		font-weight: normal;
		color: #ababab;
		line-height: 34rpx;
	}

	.topic-detail .comment-counts {
		font-size: 28rpx;
		font-weight: normal;
		color: #00abff;
		text-align: right;
		line-height: 30rpx;
	}

	.topic-detail .all-comments {
		position: relative;
		padding: 8rpx 32rpx;
		font-size: 24rpx;
		font-weight: normal;
		color: #ababab;
		line-height: 34rpx;
	}

	.topic-detail .all-comments .all-comments-btn {
		position: absolute;
		right: 32rpx;
	}

	.topic-detail .comments-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		padding: 0 40rpx 0 56rpx;
		font-size: 32rpx;
	}

	.topic-detail .comments-title::before {
		transform: scale(0.6);
		position: absolute;
		top: 0;
		left: 32rpx;
		height: 100%;
		width: 8rpx;
		background: #fd4843;
		content: '';
	}

	.topic-detail .comments-wrapper {
		padding: 0 0 64rpx;
	}

	.topic-detail .comments-wrapper .comment-item {
		margin: 0;
		border-bottom: 1rpx solid rgba(230, 230, 230, 0.8);
	}

	.topic-detail .comments-wrapper .comment-share {
		padding: 32rpx;
		font-size: 28rpx;
		font-weight: normal;
		color: #ababab;
		line-height: 34rpx;
		text-align: center;
	}

	.topic-detail .comment-list {
		padding: 0 0 24rpx;
	}

	.topic-detail .comment-list .comment-item {
		margin: 0;
		border-bottom: 1rpx solid rgba(230, 230, 230, 0.8);
	}

	.topic-detail.prevent-scroll {
		height: 100%;
		overflow: hidden;
	}

	.add-margin-top {
		margin-top: 10rpx;
	}

	.add-distance {
		margin-top: 162rpx;
	}

	.article-info {
		background: #fff;
		padding-top: 60rpx;
		margin: 0rpx 10rpx 40rpx 30rpx;
		border-radius: 15rpx;
	}

	.article-info .avator {
		margin-right: 20rpx;
		width: 40rpx;
		height: 40rpx;
		border-radius: 50%;
	}

	.article-info .article-info__category {
		margin-top: 30rpx;
		font-size: 32rpx;
		display: flex;
		align-items: center;
	}

	.article-info .article-info__category .category {
		font-weight: 700;
		font-family: PingFangSC-Medium, "Helvetica Neue", Helvetica, Arial, sans-serif;
		color: #f13b03;
	}

	.article-info .article-info__category i {
		display: inline-block;
		width: 3rpx;
		height: 32rpx;
		background: #eee;
		margin: 0 20rpx;
		vertical-align: middle;
	}

	.article-info .article-info__category .time {
		font-weight: 400;
		font-family: PingFangSC-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif;
		color: #7d7d7d;
	}

	.article-info .title {
		font-weight: 700;
		font-family: PingFangSC-Medium, "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 40rpx;
		line-height: 40rpx;
	}

	.entry-content {
		clear: both;
		color: #404246;
		margin: 0;
		padding: 0 30rpx;
		font-size: 32rpx;
		line-height: 68rpx;
		letter-spacing: 2rpx;
		text-align: justify;
		word-wrap: break-word;
		word-break: normal;
		font-family: PingFangSC-Regular, "Helvetica Neue", Helvetica, Arial, sans-serif;
	}

	.entry-content video {
		width: 100% !important;
	}

	.entry-content image {
		width: 100% !important;
	}

	/*评论*/

	.relatedTitle {
		text-align: left;
		padding: 20rpx 30rpx 20rpx;
		font-weight: bold;
		line-height: 40rpx;
		font-size: 36rpx;
		color: #4c4c4c !important;
	}

	.relatedText {
		text-align: left;
		font-weight: normal;
		font-size: 28rpx;
		line-height: 60rpx;
		color: #4c4c4c !important;
	}

	.commentheader {
		padding: 20rpx;
		text-align: left;
		font-weight: normal;
		font-size: 28rpx;
		line-height: 40rpx;
		color: #959595;
	}

	.listnodata {
		height: 446rpx;
		text-align: center;
	}

	.listnodata .nodataimg {
		width: 297rpx;
		height: 220rpx;
	}

	.listnodata .nodatatext {
		font-size: 26rpx;
		color: #999;
		margin-top: 30rpx;
	}

	.comment-reply {
		margin-left: 30rpx;
		padding-bottom: 80rpx;
	}

	.comment-reply-title {
		font-size: 40rpx;
		line-height: 1.5;
		color: #3ec382;
	}

	.comment-reply-item {
		margin-bottom: 40rpx;
	}

	.comment-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.comment-header-left {
		display: flex;
		align-items: center;
	}

	.comment-avatar {
		display: inline-block;
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		margin-right: 20rpx;
	}

	.comment-user-date {
		display: flex;
		flex-direction: column;
	}

	.comment-user-date text:first-child {
		font-size: 30rpx;
		font-weight: bold;
		color: #3a3a3a;
	}

	.comment-user-date text:last-child {
		font-size: 22rpx;
		color: #a8a8a8;
	}

	.comment-header-right {
		display: flex;
		align-items: center;
	}

	.comment-header-right text {
		font-size: 28rpx;
		padding-right: 30rpx;
		color: #7d7d7d;
	}

	.comment-vote-btn {
		position: relative;
		display: flex;
		align-items: center;
	}

	.comment-header-right .comment-vote-btn:first-child {
		margin-right: 34rpx;
	}

	.comment-vote-btn text {
		display: inline-block;
		font-size: 24rpx;
		color: #a8a8a8;
		border: 10rpx solid transparent;
		border-right: 0;
	}

	.vote-count-actived {
		color: #f13b03 !important;
	}

	.comment-vote-btn image {
		display: inline-block;
		width: 20rpx;
		height: 18rpx;
		border: 10rpx solid transparent;
	}

	.comment-vote-btn .transparent-login-btn {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.comment-content {
		position: relative;
		margin: 20rpx 20rpx 30rpx 80rpx;
		font-size: 30rpx;
		color: #3a3a3a;
	}

	.comment-content text {
		color: #a8a8a8;
	}

	.replay-content {
		margin-left: 80rpx;
		margin-right: 30rpx;
		margin-bottom: 20rpx;
		background: #f5f5f5;
		border-radius: 10rpx;
	}

	.replay-user {
		align-items: center;
		/* height: 80rpx; */
		font-size: 26rpx;
		/* line-height: 80rpx; */
		font-weight: normal;
		outline: none;
		color: #4c4c4c;
		margin: 10rpx 0;
		margin-left: 40rpx;
		margin-right: 40rpx;
		padding: 20rpx 0rpx;
	}

	.commentdata {
		padding-top: 60rpx;
	}

	/* 底部菜单 */

	.bottom-bar {
		position: fixed;
		width: 100%;
		line-height: 100rpx;
		bottom: 0;
		left: 0;
		z-index: 99;
		display: flex;
		background: #f8f9fb;
		padding-bottom: 48rpx;
	}


	.bottom-bar .bottom-btn {
		margin: auto 0;
		width: 85rpx;
		height: 85rpx;
		padding: 20rpx;
		box-sizing: border-box;
		position: relative;
	}

	.bottom-bar .bottom-send {
		background: #576cd3;
		font-size: 24rpx;
		margin: auto 0 auto 20rpx;
		color: #fff;
		height: 60rpx;
		border-radius: 10rpx;
	}

	.bottom-bar .bottom-text {
		background: #ebf0f4;
		margin: auto 0 auto 10rpx;
		height: 70rpx;
		line-height: 70rpx;
		border-radius: 40rpx;
		width: 260rpx;
		color: #95989d;
		padding: 0 30rpx;
		font-size: 30rpx;
	}

	.bottom-bar .bottom-comment-container {
		width: 85rpx;
		padding: 20rpx;
		margin-left: 20rpx;
		box-sizing: border-box;
		overflow: visible;
		position: relative;
	}

	.bottom-bar .bottom-comment-container image {
		position: absolute;
		width: 85rpx;
		height: 85rpx;
		padding: 20rpx;
		box-sizing: border-box;
		top: 0;
		left: 0;
		margin: 0;
	}

	.bottom-comment-count {
		text-align: left;
		font-size: 18rpx;
		position: absolute;
		top: 17rpx;
		left: 48rpx;
		height: 20rpx;
		line-height: 20rpx;
		color: #4782ff;
		white-space: nowrap;
	}

	.bottom-bar .bottom-fav {
		margin-left: 37rpx;
	}

	.bottom-bar .bottom-share image {
		width: 45rpx;
		height: 45rpx;
		box-sizing: border-box;
	}

	.bottom-bar .bottom-share {
		border: none;
	}

	button::after {
		border-radius: 0;
		border: none;
	}

	.btn-clear-style {
		border-color: #fff;
		background: transparent;
		padding: 0;
		padding-left: 0;
		padding-right: 0;
		margin: 0;
		border-radius: 0;
		display: flex;
		text-align: left;
		line-height: normal;
	}

	.btn-clear-style::after {
		border: none !important;
	}

	/* 评论框 */

	.textareacontent {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 1000rpx;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
		background-color: #fff;
		z-index: 10;
	}

	.textareacontent .textheaders {
		width: 100%;
		height: 96rpx;
		border-bottom: 1rpx solid #eaeaea;
	}

	.textareacontent .textheaders .cancel {
		color: #333;
		font-size: 32rpx;
		line-height: 96rpx;
		margin-left: 32rpx;
		float: left;
	}

	.textareacontent .textheaders .publish {
		color: #3ec382;
		font-size: 32rpx;
		line-height: 96rpx;
		margin-right: 32rpx;
		float: right;
	}

	.textareacontent .textheaders .nopublish {
		color: #999;
		font-size: 32rpx;
		line-height: 96rpx;
		margin-right: 32rpx;
		float: right;
	}

	.textareaBox {
		height: 360rpx;
		position: relative;
	}

	.textNum {
		position: absolute;
		font-size: 26rpx;
		color: #999;
		right: 32rpx;
		top: 10rpx;
	}

	.textareacontent .textareaInput {
		width: 686rpx;
		padding: 32rpx 32rpx 42rpx 32rpx;
		height: 286rpx;
		font-size: 34rpx;
		line-height: 65rpx;
	}

	.textareaInput.hide {
		display: none;
	}

	.pagemake {
		background-color: #000;
		opacity: 0.8;
		height: 100%;
		width: 100%;
		position: fixed;
		top: 0;
	}

	button {
		padding: 0;
		margin: 0;
		border-radius: 0;
		background-color: transparent;
	}

	.bottom-modal-icon {
		width: 64rpx;
		height: 64rpx;
	}

	.zan-actionsheet {
		background-color: #f8f8f8;
	}

	.zan-actionsheet__mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0);
		display: none;
	}

	.zan-actionsheet__container {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background: #f8f8f8;
		transform: translate3d(0, 50%, 0);
		transform-origin: center;
		transition: all 0.2s ease;
		z-index: 1001;
		opacity: 0;
		visibility: hidden;
		box-shadow: 0 -1px 6px 0 rgba(132, 131, 123, 0.12);
		display: flex;
	}

	.zan-actionsheet__btn.zan-btn {
		height: 146rpx;
		line-height: 60rpx;
		margin-bottom: 0;
		flex-grow: 1;
		font-size: 24rpx;
	}

	.zan-actionsheet__btn.zan-btn::after {
		border-width: 0;
		border-bottom-width: 1px;
	}

	.zan-actionsheet__btn.zan-btn:last-child::after {
		border-bottom-width: 0;
	}

	.zan-actionsheet__subname {
		margin-left: 2px;
		font-size: 12px;
		color: #666;
	}

	.zan-actionsheet__footer {
		margin-top: 10px;
	}

	.zan-actionsheet__btn.zan-btn--loading .zan-actionsheet__subname {
		color: transparent;
	}

	.zan-actionsheet--show .zan-actionsheet__container {
		opacity: 1;
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}

	.zan-actionsheet--show .zan-actionsheet__mask {
		display: block;
	}

	.zan-btn--loading .down-icon,
	.zan-btn--loading .wc-icon {
		opacity: 0;
	}

	.down-icon,
	.wc-icon {
		height: 40rpx;
		display: block;
		margin: 30rpx auto 0;
	}

	.down-icon {
		width: 36rpx;
	}

	.wc-icon {
		width: 52rpx;
	}

	.zan-colum-container {
		display: block;
	}

	.zan-colum-container .zan-actionsheet__btn.zan-btn {
		line-height: 146rpx;
		font-size: 36rpx;
	}

	.canvas {
		position: fixed;
		top: 999999rpx;
		left: 0;
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
