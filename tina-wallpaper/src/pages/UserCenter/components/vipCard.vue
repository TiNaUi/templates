<template>
  <view class="user-vip-card about-shadow">
    <view class="home-vip-tag-box">
      <image class="bg" src="@/static/vip/vipcard_bg_vip02@2x.png"></image>
      <view class="main" v-if="false">
        <view class="tag-no-vip">普通用户</view>
        <view class="tn-flex tn-text-center" style="flex: 1;">
          <text class="vip-text">升级VIP，省更多钱</text>
          <image class="right-icon" src="@/static/vip/vipcard_icon_arrowr_black@2x.png"></image>
        </view>
      </view>
      <view class="main">
        <view class="tag-has-vip tn-flex tn-text-center tn-flex-center">
          <image class="vip-level-icon" src="@/static/vip/vipcard_icon_v1@2x.png"></image>
          <text class="vip-level-means">VIP会员</text>
        </view>
        <view class="tn-flex tn-text-center" style="align-items: center; flex: 1;">
          <view class="vip-expired-text">您好！尊敬的VIP<br>您的会员已经到期-2天</view>
          <view v-if="false" class="vip-expired-text">您好！尊敬的VIP<br>您的会员90天后到期</view>
          <image class="right-icon" src="@/static/vip/vipcard_icon_arrowr_black@2x.png"></image>
        </view>
      </view>
    </view>
    <view class="user-data-container">
      <view class="data-item">
        <view class="data-text">积分</view>
        <view class="data-value">2200</view>
      </view>
      <view class="data-item">
        <view class="data-text">投稿</view>
        <view class="data-value">100</view>
      </view>
      <view class="data-item">
        <view class="data-text">可提现</view>
        <view class="data-value">200</view>
      </view>
    </view>
    <view class="user-data-button">
      <view class="user-data-button-group">
        <button class="data-btn" :style="getBtnStyle">充 值</button>
        <button class="data-btn tx-btn" :style="getBtnStyle">提 现</button>
      </view>
      <view @click="showQrcodeAct" class="vip-qrcode-tag" :style="getBtnStyle">
        <text class="tn-icon-qr-code"></text>
      </view>
      <!-- #ifdef APP-PLUS -->
      <!-- <view @click="wdfxm" v-if="userinfo.config.iskq==1" class="vip-qrcode-tag" :style="getBtnStyle">
        <text class="iconfont iconbtn_card_ma-copy ft20 cl-w"></text>
      </view> -->
      <!-- #endif -->
    </view>
    <view class="login-box" v-if="false">
      <view class="tn-text-center">您还没登录，登录后即可体验VIP会员!</view>
      <view class="login-btn tn-flex tn-flex-nowrap">
        <button class="btn-mid" @click="loginAct" :style="getBtnStyle">立即登录</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useButtonStyle } from '@/hooks/useButtonStyle';

defineOptions({
  name: 'UserVipCard'
})

const emit = defineEmits(['loginAct'])

const loginAct = () => {
  emit('loginAct')
}
const showQrcodeAct = () => {}

const getBtnStyle = useButtonStyle()

</script>

<style lang="scss" scoped>
.user-vip-card {
  margin: 40upx 30upx 0 30upx;
  .login-box {
    padding: 60upx;
  }
  .btn-mid {
    width: 60%;
    height: 80upx;
    line-height: 80upx;
    margin-top: 30upx;
  }
}

.home-vip-tag-box{
  height: 100upx;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8upx;
  .main{
		width: 100%;
		height: 100upx;
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 0 30upx;
    .right-icon{
      width: 40upx;
      height: 40upx;
    }
    .vip-text {
      margin-left: 40upx;
      flex: 1;
      display: block;
    }
  }
  .bg{
		width: 100%;
		height: 100upx;
	}
  .tag-no-vip{
		width: 128upx;
		height: 40upx;
		background: #FFFFFF;
		border-radius: 20upx;
		font-size: 24upx;
		font-weight: 600;
		color:#8A8D99;
		text-align: center;
		line-height: 40upx;
	}
	.tag-has-vip{
		width: 160upx;
		height: 40upx;
		background: linear-gradient(180deg, #333333 0%, #000000 100%);
		border-radius: 20upx;
    .vip-level-icon{
      width: 36upx;
      height: 36upx;
    }
    .vip-level-means{
      font-size: 24upx;
      margin-left: 14upx;
      margin-top: 4upx;
      font-weight: 500;
      background: linear-gradient(180deg, #F2DCA9 0%, #C79556 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
	}
  .vip-expired-text {
    flex: 1;
    display: block;
    font-size: 28upx;
    font-weight: 600;
  }
}
.user-data-container {
  padding: 32upx;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  .data-item {
    flex: 1;
  }
  .data-text {
    line-height: 80upx;
    color: #999;
  }
  .data-value {
    font-size: 44upx;
  }
}
.user-data-button {
  display: flex;
  padding-bottom: 32upx;
}
.user-data-button-group {
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
  .data-btn {
    width: 200upx;
    height: 70upx;
    line-height: 70upx;
    font-size: 32upx;
    &.tx-btn {
      background: #fff !important;
      color: rgb(0, 198, 87) !important;
      border: 1px solid rgb(0, 198, 87);
    }
  }
}
.vip-qrcode-tag{
  width: 80upx;
  height: 80upx;
  border-radius: 40upx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32upx;
  margin-left: 40upx;
}
</style>
