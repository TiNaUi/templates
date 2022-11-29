<template>
  <view class="jiangqie-new-header">
    <view class="jiangqie-new-header-title">
        <view class="title-text">{{title}}</view>
    </view>
    <view class="jiangqie-new-search" @click="clickSearch()">
        <view class="custom-nav__search__icon tn-icon-search"></view>
        <swiper
          autoplay
          circular
          class="lxy-nav-bar-search__input"
          :interval="3000"
          vertical
        >
          <swiper-item class="lxy-nav-bar-search__input-item" v-for="(item, index) in hotSearch" :key="index">
            <text class="">{{item}}</text>
          </swiper-item>
        </swiper>
    </view>
  </view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'HomeHeader'
})

const {title, hotSearch} = defineProps<{
  title: string,
  hotSearch: string[]
}>()

const clickSearch = () => {}

</script>

<style lang="scss" scoped>
.jiangqie-new-header {
  margin-bottom: 10upx;
  padding: 20upx;
  &-title {
    display: flex;
    padding-bottom: 30upx;
    .title-text {
      color: #333;
      font-size: 56rpx;
      font-weight: 600;
    }
  }
}
.jiangqie-new-search {
  align-items: center;
  background: #fff;
  border-radius: 40rpx;
  display: flex;
  height: 80rpx;
  line-height: 80rpx;
  padding: 0 30rpx;
  input {
    font-size: 30rpx;
    height: 70rpx;
    line-height: 70rpx;
    text-indent: 10rpx;
  }
}

.lxy-nav-bar-search {
  align-items: center;
  background: #f6f6f6;
  border-radius: 16px;
  display: flex;
  height: 32px;
  justify-content: left;
  margin: 6rpx 0;
  padding: 0 10rpx;
  position: relative;
  width: 70%;
  &__input {
    align-items: left;
    color: #999;
    display: flex;
    font-size: 13px;
    height: 100%;
    line-height: 14px;
    width: 100%;
    &-item {
      align-items: center;
      display: flex;
      flex-direction: row;
      font-size: 13px;
      padding: 0 10rpx;
    }
  }
}
</style>
