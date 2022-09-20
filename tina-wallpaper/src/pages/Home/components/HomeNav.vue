<template>
  <view class="home-nav">
    <view class="tn-flex">
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-orange--light tn-color-orange">
            <view class="tn-icon-moon-fill tn-three"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis" style="font-size: 24rpx;">高清壁纸</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purple--light tn-color-purple">
            <view class="tn-icon-light-fill tn-three"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis" style="font-size: 24rpx;">热门排行</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-indigo--light tn-color-indigo">
            <view class="tn-icon-star-fill tn-three"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis" style="font-size: 24rpx;">文艺可爱</text>
          </view>
        </view>
      </view>
      <view class="tn-flex-1 tn-padding-sm tn-margin-xs tn-radius">
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-main-gradient-purplered--light tn-color-purplered">
            <view class="tn-icon-like-fill tn-three"></view>
          </view>  
          <view class="tn-text-center">
            <text class="tn-text-ellipsis" style="font-size: 24rpx;">精选壁纸</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'HomeNav'
})

</script>

<style lang="scss" scoped>
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
        background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg.png);
      }
    }
  }
}
</style>
