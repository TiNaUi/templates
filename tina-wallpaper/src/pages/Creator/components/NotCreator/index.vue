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
        <view class="tn-shadow-blur" v-if="userInfo" :style="'background-image:url('+ (userInfo?.profile.avatar || '') +');width: 170rpx;height: 170rpx;background-size: 100% 100%; border-radius: 50%;'">
        </view>
      </view>
      <!-- <view class="user-info__nick-name">图鸟UI</view> -->
    </view>
    
    <view class="tn-text-center tn-color-gray--disabled" style="padding: 40vh 0 0 0;">
      <view class="" style="font-size: 45rpx; margin-top: 24rpx;">
       您还不是星图内容推荐官
      </view>
      <view class="" style="font-size: 45rpx; margin-top: 24rpx;">
       成为星图内容推荐官
      </view>
      <view class="" style="font-size: 45rpx; margin-top: 24rpx;">
       为创意提供更好的舞台
      </view>
      <view class="tn-color-gray--disabled tn-text-df tn-padding-top">
        新创意 新分享 新收获
      </view>
    </view>
    
    <view class="" style="padding: 160rpx 120rpx;z-index: 999;position: relative;">
      <view class="join-btn" v-if="userInfo" @click="doCreator(false)">立即成为星荐官</view>
      <view class="join-btn" v-else @click="doCreator(true)">立即注册成为创意星荐官</view>
    </view>
    
    <view class="tnwave waveAnimation">
      <view class="waveWrapperInner bgTop">
        <view class="wave waveTop" :style="'background-image: url('+ useImagePath('/wave/wave-2.png') +')'"></view>
      </view>
      <view class="waveWrapperInner bgMiddle">
        <view class="wave waveMiddle" :style="'background-image: url('+ useImagePath('/wave/wave-2.png') +')'"></view>
      </view>
      <view class="waveWrapperInner bgBottom">
        <view class="wave waveBottom" :style="'background-image: url('+ useImagePath('/wave/wave-1.png') +')'"></view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useImagePath } from '@/hooks';
import { useUserStore } from '@/store';
import { computed, ref } from 'vue';

defineOptions({
  name: 'NotCreator'
})

const emit = defineEmits(['doCreator'])

const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

const doCreator = (isRegister: boolean) => { emit('doCreator', isRegister) }

</script>

<style lang="scss" scoped src="./index.scss"></style>
