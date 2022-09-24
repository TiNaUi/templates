<template>
  <!-- 顶部自定义导航 -->
  <tn-nav-bar fixed alpha customBack>
    <view slot="back" class='tn-custom-nav-bar__back'
      @click="goBack">
      <text class='icon tn-icon-left'></text>
      <text class='icon tn-icon-home-capsule-fill'></text>
    </view>
  </tn-nav-bar>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'CustimerNavbarCapsule'
})

// 点击左上角返回按钮时触发事件
function goBack() {
  // 通过判断当前页面的页面栈信息，是否有上一页进行返回，如果没有则跳转到首页
  const pages = getCurrentPages()
  if (pages && pages.length > 0) {
    const firstPage = pages[0]
    if (pages.length == 1 && (!firstPage.route || firstPage.route != 'pages/index/index')) {
      uni.reLaunch({
        url: '/pages/index/index'
      })
    } else {
      uni.navigateBack({
        delta: 1
      })
    }
  } else {
    uni.reLaunch({
      url: '/pages/index/index'
    })
  }
}

</script>

<style lang="scss" scoped>
.tn-custom-nav-bar__back {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 1000rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
  font-size: 18px;
  
  .icon {
    display: block;
    flex: 1;
    margin: auto;
    text-align: center;
  }
  
  &:before {
    content: " ";
    width: 1rpx;
    height: 110%;
    position: absolute;
    top: 22.5%;
    left: 0;
    right: 0;
    margin: auto;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    box-sizing: border-box;
    opacity: 0.7;
    background-color: #FFFFFF;
  }
}
</style>
