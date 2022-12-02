<template>
  <PageContent :tStyle="{paddingBottom: 0}">
    <view
      class="jiangqie-login"
      :style="
        'background: url(' + background + ');background-size:cover; background-position:center;'
      "
    >
      <view class="jiangqie-logo">
        <image mode="aspectFill" :src="logo"></image>
      </view>
      <view class="jiangqie-slogan">{{ title }}</view>
      <view class="jiangqie-slogan" v-if="type == 'mobile'">绑定手机号才能评论</view>
      <view class="jiangqie-option">
        <button @click="handlerLoginClick" v-if="type == 'login'">授权登录</button>
        <button
          @bindgetphonenumber="getphonenumber"
          openType="getPhoneNumber"
          type="default"
          v-if="type == 'mobile'"
        >
          绑定手机号
        </button>
        <button @click="cancelClick">随便逛逛</button>
        <view class="jiangqie-option-text">
          授权登录即同意
          <text @click="yhxyClick" v-if="yhxy">《用户协议》</text>
          <template v-else>用户协议</template>及
          <text @click="ystkClick" v-if="ystk">《隐私条款》</text>
          <block v-else>隐私条款</block>
        </view>
      </view>
    </view>
  </PageContent>
</template>

<script lang="ts" setup>
import PageContent from '@/components/pageWrapper/content.vue'
import { useImagePath } from '@/hooks';
import { ref } from 'vue'

defineOptions({
  name: 'PageLogin'
})

const loginData = {
  bg: 'https://zs.jiangqie.com/wp-content/uploads/2022/05/a28b9d831de27b7c5e5d2a4cd204dc00.jpg',
  login_yhxy: '160',
  login_ystk: '162'
}

const background = ref(loginData.bg)
const logo = ref(useImagePath('/logo.jpg'))
const title = ref('广泰医药专业的药材提供商')
const type = ref('login')
const yhxy = ref(true)
const ystk = ref(true)

const handlerLoginClick = () => {}
const getphonenumber = () => {}
const cancelClick = () => {}
const yhxyClick = () => {}
const ystkClick = () => {}
</script>

<style lang="scss" scoped>
.jiangqie-login {
  height: 100vh;
  text-align: center;
  width: 100vw;
}

.jiangqie-logo {
  padding-top: 480rpx;
}

.jiangqie-logo image {
  border-radius: 160rpx;
  height: 160rpx;
  width: 160rpx;
}

.jiangqie-slogan {
  color: #fff;
  font-size: 28rpx;
  font-weight: 400;
  margin-top: 40rpx;
}

.jiangqie-option {
  bottom: 80rpx;
  padding: 0 120rpx;
  position: fixed;
}

.jiangqie-option button {
  background: none;
  border: 1rpx solid #eee;
  border-radius: 80rpx;
  color: #fff;
  font-size: 28rpx;
  font-weight: 400;
  line-height: 28rpx;
  margin-bottom: 40rpx;
  padding: 30rpx 0;
  width: 100%;
}

.jiangqie-option-text {
  color: #eee;
  font-size: 24rpx;
  font-weight: 200;
}
</style>
