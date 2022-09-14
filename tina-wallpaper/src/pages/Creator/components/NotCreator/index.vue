<template>
  <view class="template-outset">
    <!-- 流星-->
    <view class="tn-satr">
      <view class="sky"></view>
      <view class="stars">
        <view class="falling-stars">
          <view class="star-fall"></view>
          <view class="star-fall"></view>
          <view class="star-fall"></view>
          <view class="star-fall"></view>
        </view>
        <view class="small-stars">
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
        </view>
        <view class="medium-stars">
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
          <view class="star"></view>
        </view>
      </view>
    </view>
    
    <!-- 头像用户信息 -->
    <view class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
      <view class="user-info__avatar tn-flex tn-flex-col-center tn-flex-row-center">
        <view class="tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/tuniao.png');width: 170rpx;height: 170rpx;background-size: cover;">
        </view>
      </view>
      <!-- <view class="user-info__nick-name">图鸟UI</view> -->
    </view>
    
    <view class="tn-text-center tn-color-gray--disabled" style="padding: 40vh 0 0 0;">
      <view class="" style="font-size: 45rpx; margin-top: 12upx;">
       您还不是创意传播官
      </view>
      <view class="" style="font-size: 45rpx; margin-top: 12upx;">
       成为创意传播官
      </view>
      <view class="" style="font-size: 45rpx; margin-top: 12upx;">
       为创意提供更好的舞台
      </view>
      <view class="tn-color-gray--disabled tn-text-df tn-padding-top">
        新创意 新分享 新收获
      </view>
    </view>
    
    <view class="" style="padding: 120rpx 200rpx;z-index: 999;position: relative;">
      <tn-button :plain="true" shape="round" backgroundColor="#FFFFFF" fontColor="#FFFFFF" width="100%" height="70rpx">立即成为创意传播官</tn-button>
    </view>
    
    <view class="tnwave waveAnimation">
      <view class="waveWrapperInner bgTop">
        <view class="wave waveTop" style="background-image: url('https://tnuiimage.tnkjapp.com/wave/wave-2.png')"></view>
      </view>
      <view class="waveWrapperInner bgMiddle">
        <view class="wave waveMiddle" style="background-image: url('https://tnuiimage.tnkjapp.com/wave/wave-2.png')"></view>
      </view>
      <view class="waveWrapperInner bgBottom">
        <view class="wave waveBottom" style="background-image: url('https://tnuiimage.tnkjapp.com/wave/wave-1.png')"></view>
      </view>
    </view>
  </view>

</template>

<script lang="ts" setup>

defineOptions({
  name: 'NotCreator'
})

</script>

<style lang="scss" scoped src="./index.scss"></style>
