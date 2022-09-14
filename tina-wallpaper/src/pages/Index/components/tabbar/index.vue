<template>
<!-- 底部tabbar start-->
<!-- <view class="tabbar footerfixed">
  <view class="action">
    <view class="bar-icon">
      <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/home_tnnew.png'></image>
    </view>
    <view class="tn-color-black">首页</view>
  </view>
  <view class="action">
    <view class="bar-icon">
      <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/information_tn.png'></image>
    </view>
    <view class="tn-color-gray">圈子</view>
  </view>
  <view class="action">
    <view class="bar-icon">
      <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/case_tn.png'></image>
    </view>
    <view class="tn-color-gray">案例</view>
  </view>
  <view class="action">
    <view class="bar-icon">
      <image class="" src='https://tnuiimage.tnkjapp.com/tabbar/my_tn.png'></image>
    </view>
    <view class="tn-color-gray">我的</view>
  </view>
</view> -->
<tn-tabbar
  v-model="currentIndex"
  :list="tabbarList"
  activeColor="#838383"
  inactiveColor="#AAAAAA"
  activeIconColor="tn-cool-bg-color-7"
  :animation="true"
  :safeAreaInsetBottom="true"
  @change="switchTabbar"
></tn-tabbar>
</template>

<script lang="ts" setup>import { reactive, ref } from 'vue';

defineOptions({
  name: 'TabBar'
})

const tabbarList = reactive([
  {
    title: '首页',
    activeIcon: 'https://tnuiimage.tnkjapp.com/tabbar/home_tnnew.png',
    inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/home_tn.png'
  },
  {
    title: '分类',
    activeIcon: 'https://tnuiimage.tnkjapp.com/tabbar/cate_tncur.png',
    inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/cate_tn.png'
  },
  {
    title: '推荐官',
    activeIcon: 'https://tnuiimage.tnkjapp.com/tabbar/information_tncur.png',
    inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/information_tn.png'
  },
  {
    title: '我的',
    activeIcon: 'https://tnuiimage.tnkjapp.com/tabbar/my2_tncur.png',
    inactiveIcon: 'https://tnuiimage.tnkjapp.com/tabbar/my2_tn.png',
    dot: true
  }
])

const currentIndex = ref(0)
const switchTabbar = (index: number) => {
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
/* 底部tabbar start*/
.footerfixed{
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 999;
  background-color: #FFFFFF;
  box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
}

.tabbar {
  display: flex;
  align-items: center;
  min-height: 110rpx;
  justify-content: space-between;
  padding: 0;
  height: calc(110rpx + env(safe-area-inset-bottom) / 2);
  padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}

.tabbar .action {
  font-size: 22rpx;
  position: relative;
  flex: 1;
  text-align: center;
  padding: 0;
  display: block;
  height: auto;
  line-height: 1;
  margin: 0;
  overflow: initial;
}

.tabbar .action .bar-icon {
  width: 100rpx;
  position: relative;
  display: block;
  height: auto;
  margin: 0 auto 10rpx;
  text-align: center;
  font-size: 42rpx;
}

.tabbar .action .bar-icon image {
  width: 50rpx;
  height: 50rpx;
  display: inline-block;
}
</style>
