<template>
  <view class="jiangqie-operation" v-if="switch_comment">
    <view class="jiangqie-operation-left jiangqie-col-5 jiangqie-height-full jiangqie-ptop-zero">
      <view
        class="jiangqie-btn-comment"
        @click="commentClickAction"
        >发表你的评论...</view
      >
    </view>
    <view class="jiangqie-operation-right jiangqie-right-flex jiangqie-col-7">
      <view
        class="jiangqie-operation-item"
        hoverclass="opcity"
        hoverstaytime="150"
        @click="commentClickAction"
      >
        <image mode="widthFix" src="/static/images/btn_com.png" />
        <text>{{ comment_count }}</text>
      </view>
      <view
        class="jiangqie-operation-item"
        @click="likeClickAction"
      >
        <image mode="widthFix" src="/static/images/btn_fav_on.png" v-if="post_like" />
        <image mode="widthFix" src="/static/images/btn_fav.png" v-else />
        <text>{{ like_count }}</text>
      </view>
      <view
        class="jiangqie-operation-item"
        @click="favoriteClickAction"
      >
        <image mode="widthFix" src="/static/images/btn_star_on.png" v-if="post_favorite" />
        <image mode="widthFix" src="/static/images/btn_star.png" v-else />
        <text>{{ favorites }}</text>
      </view>
      <button
        class="jiangqie-operation-item"
        hoverclass="opcity"
        hoverstaytime="150"
        opentype="share"
      >
        <image mode="widthFix" src="/static/images/btn_share.png" />
      </button>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'ViewOperation'
})

const { switch_comment = false, comment_count = 0 } = defineProps<{
  switch_comment: boolean
  comment_count: number
  post_like: boolean
  like_count: number
  post_favorite: boolean
  favorites: number
}>()

const commentClickAction = () => {}
const likeClickAction = () => {}
const favoriteClickAction = () => {}
</script>

<style lang="scss" scoped>
.jiangqie-operation {
  align-items: center;
  background: #fff;
  bottom: 0;
  display: flex;
  height: 100rpx;
  justify-content: space-between;
  left: 0;
  overflow: hidden;
  padding-bottom: env(safe-area-inset-bottom);
  position: fixed;
  width: 100%;
  z-index: 99999;
  &::before {
    border-top: 1rpx solid #eaeef1;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scaleY(.5);
  }
}
.jiangqie-operation-item,.jiangqie-operation-left {
  align-items: center;
  display: flex;
}
.jiangqie-operation-item {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  position: relative;
  image {
    height: 46rpx;
    width: 46rpx;
  }
  text {
    background: #fff;
    font-size: 20rpx;
    padding: 4rpx;
    position: absolute;
    right: 4rpx;
    top: -8rpx;
  }
}
button {
  &.jiangqie-operation-item {
    padding: 0 10rpx;
  }
}
.jiangqie-operation-right {
  box-sizing: border-box;
  height: 100rpx;
  padding-top: 0;
}
.jiangqie-btn-comment {
  background: #ededed;
  border-radius: 40rpx;
  box-sizing: border-box;
  color: #999;
  font-size: 28rpx;
  height: 64rpx;
  margin-left: 30rpx;
  padding-left: 20rpx;
  padding-top: 0;
  width: 84%;
}
.jiangqie-right-flex {
  justify-content: center;
}
.jiangqie-btn-comment,.jiangqie-right-flex {
  align-items: center;
  display: flex;
}
</style>
