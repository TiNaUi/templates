<template>
  <view class="creator-container">
    <view class="creator-header">
      <!-- 头像用户信息 -->
      <view class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
        <view class="user-info__avatar tn-flex tn-flex-col-center tn-flex-row-center">
          <view class="tn-shadow-blur" style="background-image:url('https://tnuiimage.tnkjapp.com/logo/tuniao.png');width: 170rpx;height: 170rpx;background-size: cover;">
          </view>
        </view>
        <view class="user-info__nick-name">TaTa</view>
        <view class="user-info__nick-desc">什么都没有留下，写点什么吧? <text class="tn-icon-write"></text></view>
      </view>
      <view class="header-bg"></view>
    </view>

    <view class="container">
      <!-- 数据信息 -->
      <view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between">
        <block v-for="(item, index) in tuniaoData" :key="index">
          <view class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between about-shadow">
            <view class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
              <view class="tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                <view :class="[`tn-icon-${item.icon}`]"></view>
              </view>
              <view class="tn-info__item__left__content">
                <view class="tn-info__item__left__content--title">{{ item.title }}</view>
                <view class="tn-info__item__left__content--data tn-padding-top-xs">{{ item.value }}</view>
              </view>
            </view>
          </view>
        </block>
      </view>

      <SectionTitle title="我的投稿" class="mt-30" :hasRight="false" />
      <List :lists="list" style="margin-top: 30upx;"/>

    </view>
    <NotCreator v-if="false" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import NotCreator from './components/NotCreator/index.vue'
import List from '@/components/picture/list.vue';
import SectionTitle from '@/components/sectionTitle/index.vue';

defineOptions({
  name: 'Creator'
})

const list = ref([
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234}
])

const tuniaoData = [
  {
    title: '我的投稿',
    icon: 'medical',
    color: 'indigo',
    value: '1.22 W'
  },
  {
    title: '收获点赞',
    icon: 'praise',
    color: 'orange',
    value: '406'
  },
  {
    title: '收获积分',
    icon: 'topics',
    color: 'purplered',
    value: '129'
  },
  {
    title: '总下载量',
    icon: 'fire',
    color: 'green',
    value: '1.0.0'
  }
]

</script>

<style lang="scss" scoped>
/** 背景图 */
.creator-header {
  background-image: url('@/assets/bg/adn4.jpg');
  background-repeat: no-repeat;
  position: relative;
  height: 460upx;
  overflow: hidden;
  .header-bg {
    background-image: url('https://tnuiimage.tnkjapp.com/cool_bg_image/1.png');
    background-repeat: no-repeat;
    background-size: 100% 50%;
    background-position: 0 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}
/* 用户信息 start */
.user-info {
  &__container {
    position: absolute;
    top: 16vh;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 100;
  }

  &__avatar {
    width: 200rpx;
    height: 200rpx;
    border: 8rpx solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0rpx 0rpx 80rpx 0rpx rgba(0, 0, 0, 0.15);
    background: #fff;
  }

  &__nick-name {
    color: #FFFFFF;
    margin-top: 26rpx;
    font-size: 36rpx;
    font-weight: 600;
    text-align: center;
  }
  &__nick-desc {
    color: #fff;
    width: 100%;
    text-align: center;
    margin-top: 20upx;
  }
}
/* 用户信息 end */

.about-shadow{
  border-radius: 15rpx;
  box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
}

/* 信息展示 start */
.tn-info {
  &__container {
    margin-top: 40rpx;
  }
  
  &__item {
    width: 48%;
    margin: 15rpx 0rpx;
    padding: 28rpx;
    border-radius: 15rpx;
    

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
        background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/6.png);
      }
    
    &__left {
      
      &--icon {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
        font-size: 40rpx;
        margin-right: 20rpx;
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
          background-image: url(https://tnuiimage.tnkjapp.com/cool_bg_image/icon_bg5.png);
        }
      }
      
      &__content {
        font-size: 30rpx;
        
        &--data {
          margin-top: 5rpx;
          font-weight: bold;
        }
      }
    }
    
    &__right {
      &--icon {
        font-size: 60rpx;
        opacity: 0.15;
      }
    }
  }
}
/* 信息展示 end */
</style>
