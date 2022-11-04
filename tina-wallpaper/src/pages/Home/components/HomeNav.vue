<template>
  <view class="home-nav tn-margin-bottom">
    <view class="nav-item tn-bg-orangeyellow tn-shadow-yellowgreen" @click="navigator('getPicture')">
      <view class="title tn-color-white">取 图</view>
      <view class="tn-icon-moon-fill icon tn-color-white"></view>
    </view>
    <view class="nav-item right">
      <view class="nav-item_item tn-bg-indigo tn-shadow-indigo" @click="navigator('rank')">
        <view class="tn-icon-light-fill icon tn-color-white"></view>
        <view class="title tn-color-white">排行榜</view>
      </view>
      <view class="nav-item_item tn-bg-orangered tn-shadow-orangeyellow" @click="navigator('creator')">
        <view class="tn-icon-star-fill icon tn-color-white"></view>
        <view class="title tn-color-white">星荐官</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'HomeNav'
})

const urlMap: Record<string, string> = {
  creator: "/pages/Creator/list",
  rank: "/pages/rank/index",
  getPicture: "/pages/Creator/search"
}

function navigator(pathKey: string) {
  uni.navigateTo({ url: urlMap[pathKey] || '/pages/Index/index' })
}

</script>

<style lang="scss" scoped>
.home-nav {
  display: flex;
  flex-wrap: nowrap;
  .nav-item {
    flex: 1;
    border-radius: 16upx;
    padding: 16upx;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    .title {
      flex: 1;
      font-size: 40upx;
      text-align: center;
    }
    &:first-child {
      margin-right: 20upx;
    }
    &:last-child {
      padding: 0;
    }
    &_item {
      width: 260upx;
      height: 120upx;
      border-radius: 16upx;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:first-child {
        margin-bottom: 20upx;
      }
      .title {
        font-size: 32upx;
      }
      .icon {
        font-size: 40upx !important;
        margin-top: 16upx;
      }
    }
    .icon {
      font-size: 120upx;
      width: 160upx;
    }
  }
  .right {
    flex-direction: column;
    flex: none;
    justify-content: center;
    align-items: center;
  }
}
/* 图标容器12 start */
.tn-three{
  position: absolute;
  top: 50%;
  right: 50%;
  bottom: 50%;
  left: 50%;
  transform: translate(-38rpx, -16rpx) rotateX(30deg) rotateY(20deg) rotateZ(-30deg);
  text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
}
.icon12 {
  &__item {
    width: 30%;
    background-color: #FFFFFF;
    border-radius: 10rpx;
    padding: 30rpx;
    margin: 20rpx 10rpx;
    transform: scale(1);
    transition: transform 0.3s linear;
    transform-origin: center center;
    
    &--icon {
      width: 100rpx;
      height: 100rpx;
      font-size: 60rpx;
      border-radius: 50%;
      margin-bottom: 18rpx;
      position: relative;
      z-index: 1;
      
      &::after {
        content: " ";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        border-radius: inherit;
        opacity: 1;
        transform: scale(1, 1);
        background-size: 100% 100%;
        background-image: url(#{$tnt-img-host}/cool_bg_image/icon_bg.png);
      }
    }
  }
}
</style>
