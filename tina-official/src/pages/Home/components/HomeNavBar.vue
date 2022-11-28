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
      <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center" @click="search()">
        <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left tn-color-gray--dark tn-bg-gray--light">
          <view class="custom-nav__search__icon tn-icon-search"></view>
          <view class="custom-nav__search__text tn-padding-left-xs">
            <swiper autoplay="{{true}}" circular="{{true}}" class="lxy-nav-bar-search__input data-v-4bb376a2" interval="3000" vertical="{{true}}">
                <swiper-item class="lxy-nav-bar-search__input-item data-v-4bb376a2" wx:for="{{hot_search}}" wx:key="index">
                    <text class="data-v-4bb376a2">{{item}}</text>
                </swiper-item>
            </swiper>
          </view>
        </view>
      </view>
    </view>
  </tn-nav-bar>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'HomeNavBar'
})

</script>

<style lang="scss" scoped>

</style>
