<template>
  <tn-nav-bar :fixed="fixed" :isBack="false" :bottomShadow="false" backgroundColor="#FFFFFF">
    <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
      <!-- 返回按钮 -->
      <view class="custom-nav__back">
        <view class="logo-pic" :style="'background-image:url('+ useImagePath('/logo.jpg') +')'">
          <view class="logo-image">
          </view>
        </view> 
        <!-- <view class="tn-icon-left"></view> -->
      </view>
      <!-- 搜索框 -->
      <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center ">
        <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-gray--dark tn-bg-gray--light">
          <view class="custom-nav__search__icon tn-icon-search"></view>
          <view class="custom-nav__search__text tn-padding-left-xs">好想搜点什么</view>
        </view>
      </view>
    </view>
  </tn-nav-bar>
</template>

<script lang="ts" setup>
import { useImagePath } from '@/hooks'

defineProps({
  fixed: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped lang="scss">
/* 自定义导航栏内容 start */
.custom-nav {
  height: 100%;
  
  &__back {
    margin: auto 5rpx;
    font-size: 40rpx;
    margin-right: 10rpx;
    margin-left: 30rpx;
    flex-basis: 5%;
  }
  
  &__search {
    flex-basis: 60%;
    width: 100%;
    height: 100%;
    
    &__box {
      width: 100%;
      height: 70%;
      padding: 10rpx 0;
      margin: 0 30rpx;
      border-radius: 60rpx 60rpx 0 60rpx;
      font-size: 24rpx;
      background-color: rgba(255,255,255,0.2);
    }
    
    &__icon {
      padding-right: 10rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
    }
    
    &__text {
    }
  }
}
/* 自定义导航栏内容 end */

/*logo start */
.logo-image{
  width: 65rpx;
  height: 65rpx;
  position: relative;
}
.logo-pic{
  background-size: cover;
  background-repeat:no-repeat;
  // background-attachment:fixed;
  background-position:top;
  border-radius: 50%;
}
</style>