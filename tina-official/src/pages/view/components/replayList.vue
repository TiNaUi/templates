<template>
  <view class="jiangqie-cmtbox" v-if="switch_comment">
    <view class="jiangqie-cmt-title">
      <text>热门评论</text>
    </view>
    <block v-if="comments.length>0">
      <view class="jiangqie-cmt-content" v-for="(item, index) in comments" :key="item['id']">
        <view class="jiangqie-cmt-avatar">
          <image @click="avatarClickAction(item.user.id)" mode="aspectFill" :src="item.user.avatar.length>0 ? item.user.avatar : '/static/images/default_avatar.jpg'" />
        </view>
        <view class="jiangqie-cmt-head">{{ '' + item.user.name + ''
          }}<block v-if="item.reply"> <text>回复</text>{{ item.reply }}</block>
        </view>
        <view class="jiangqie-cmt-text">
          <text class="jiangqie-cmt-text-world">{{ item.content }}</text>
        </view>
        <view class="jiangqie-cmt-time">{{ '' + item.time + ''
          }}<text class="jiangqie-cmt-time" v-if="item.approved!=1">待审核</text>
          <text @click="commentReplyClickAction(item.id)">回复</text>
          <text class="comment-action" @click="commentDeleteClickAction(item.id)" v-if="item.user.is_me==1">删除</text>
        </view>
      </view>
      <!-- <jiangqie-loadmore bind:__l="__l" vueid="3f3801a0-6" :visible="loadding"></jiangqie-loadmore> -->
      <!-- <jiangqie-nomore bind:__l="__l" vueid="3f3801a0-7" :visible="!pullUpOn"></jiangqie-nomore> -->
    </block>
    <!-- <block v-else="">
      <jiangqie-nodata bind:__l="__l" text="暂无评论，好尴尬啊..." vueid="3f3801a0-8" v-if="loaded"></jiangqie-nodata>
    </block> -->
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'ViewReplyList'
})

const { switch_comment = false, comments = []} = defineProps<{
  switch_comment?: boolean
  comments?: Array<{
    id: number
    reply: string
    content: string
    time: string
    approved: number
    user: {
      id: number
      name: string
      avatar: string
      is_me: number
    }
  }>
}>()

const avatarClickAction = (userId: number) => {}
const commentReplyClickAction = (id: number) => {}
const commentDeleteClickAction = (id: number) => {}
</script>

<style lang="scss" scoped>
.jiangqie-cmtbox {
  background: #fff;
  border-radius: 12rpx;
  margin: 20rpx;
  padding: 20rpx;
  margin-bottom: 110upx;
}

.jiangqie-cmt-content {
  overflow: hidden;
  padding-left: 80rpx;
  padding-top: 16rpx;
  &:last-child {
    border: none;
  }
}
.jiangqie-cmt-avatar {
  float: left;
  height: 64rpx;
  margin-left: -80rpx;
  overflow: hidden;
  width: 64rpx;
  image {
    border-radius: 64rpx;
    height: 64rpx;
    overflow: hidden;
    width: 64rpx;
  }
}
.jiangqie-cmt-head {
  color: #333;
  font-size: 28rpx;
  font-weight: 500;
  text {
    color: #5677fc;
    font-weight: 200;
    padding: 0 14rpx;
  }
  view {
    color: #555;
    float: right;
    font-size: 24rpx;
    font-weight: 300;
    image {
      height: 24rpx;
      margin-left: 10rpx;
      width: 24rpx;
    }
  }
}
.jiangqie-cmt-time {
  border-bottom: 1rpx solid #eee;
  color: #bbb;
  font-size: 22rpx;
  font-weight: 200;
  padding-bottom: 16rpx;
  text {
    color: #5677fc;
    font-size: 28rpx;
    font-weight: 200;
    padding: 0 14rpx;
  }
}
.jiangqie-cmt-text {
  padding: 10rpx 0;
}
.jiangqie-cmt-text-world {
  color: #444;
  font-size: 26rpx;
  font-weight: 300;
}
.jiangqie-cmt-replay {
  padding-left: 160rpx;
  .jiangqie-cmt-time {
    margin-left: -80rpx;
    padding-left: 80rpx;
  }
}
.jiangqie-cmt-title {
  font-size: 36rpx;
  font-weight: 600;
  padding: 10rpx 0 16rpx;
}
</style>
