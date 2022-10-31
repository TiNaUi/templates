<template insert>
  <view class="creator-container">
    <template v-if="isCreattor">
      <view class="creator-header">
        <!-- 头像用户信息 -->
        <view class="user-info__container tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-center">
          <view class="user-info__avatar tn-flex tn-flex-col-center tn-flex-row-center">
            <view class="tn-shadow-blur"
              v-if="userInfo"
              :style="'background-image:url(' + userInfo?.profile.avatar +');width: 170rpx;height: 170rpx;background-size: cover;'">
            </view>
          </view>
          <view class="user-info__nick-name">{{ userInfo?.profile.nickname }}</view>
          <view class="user-info__nick-desc">{{ userInfo?.creator.remark || '什么都没没有留下！' }} <text class="tn-icon-write" @click="showUpdate()"></text></view>
        </view>
        <view class="header-bg"></view>
      </view>
      <view class="header-notice" v-if="userInfo?.creator.status !== 2">
        <tn-notice-bar  backgroundColor="tn-main-gradient-indigo" :list="['您提交的星荐官申请正在审核中，请耐心等候~']"></tn-notice-bar>
      </view>
      <view class="container">
        <!-- 数据信息 -->
        <view class="tn-info__container tn-flex tn-flex-wrap tn-flex-col-center tn-flex-row-between">
          <block v-for="(item, index) in tuniaoData" :key="index">
            <view class="tn-info__item tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-between about-shadow"
              @click="navigator(item.url)">
              <view class="tn-info__item__left tn-flex tn-flex-direction-row tn-flex-col-center tn-flex-row-left">
                <view class="tn-info__item__left--icon tn-flex tn-flex-col-center tn-flex-row-center"
                  :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
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
        <!-- <SectionTitle title="我的投稿" class="mt-30" :hasRight="false" />
        <List :lists="list" style="margin-top: 30upx;" /> -->
        <view class="start-apply tn-main-gradient-indigo tn-shadow-indigo" @click="goApply()">立 即 开 始 投 稿</view>
      </view>
    </template>
    <NotCreator v-else @doCreator="doCreator" @applySuccess="applySuccess" />
    <UpdateDialog v-model="updateVsisble" @success="updateSucess" />
  </view>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import NotCreator from './components/NotCreator/index.vue'
import UpdateDialog from './components/UpdateDialog/index.vue'
// import List from '@/components/picture/list.vue';
// import SectionTitle from '@/components/sectionTitle/index.vue';
import { useUserStore } from '@/store';
import { message } from '@tina-ui/ui';

defineOptions({
  name: 'Creator'
})
const props = defineProps({
  hidden:  Boolean
}) 
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const isCreattor = computed(() => userInfo.value?.creator)
const updateVsisble = ref(false)
function showUpdate() {
  updateVsisble.value = true
}
function updateSucess() {
  userStore.updateUserInfo()
}

const loginModel = ref<null | any>(null)
function loginAct() {
  if (loginModel) {
    loginModel.value.show()
  }
}

const hidden = computed(() => props.hidden)

watch(hidden, (val) => {
  if (!val) {
    userStore.updateUserInfo()
  }
}, { immediate: true })


const goApply = () => {
  if (!userInfo || userInfo.value?.creator.status !== 2) {
    message.toast('请耐心等候审核结果!')
    return
  }
  uni.navigateTo({
    url: '/pages/Creator/apply'
  })
}

const applySuccess = () => {
}

const doCreator = (isRegister: boolean) => {
  if (isRegister) {
    loginAct()
    return
  }
}

const navigator = (url: string) => {
  uni.navigateTo({
    url
  })
}

const tuniaoData = [
  {
    title: '我的投稿',
    icon: 'medical',
    color: 'indigo',
    value: 0,
    url: '/pages/Creator/applyLog'
  },
  {
    title: '收获点赞',
    icon: 'praise',
    color: 'orange',
    value: '0',
    url: '/pages/Creator/applyLog'
  },
  {
    title: '收获积分',
    icon: 'topics',
    color: 'purplered',
    value: '0',
    url: '/pages/Creator/applyLog'
  },
  {
    title: '总下载量',
    icon: 'fire',
    color: 'green',
    value: '0',
    url: '/pages/Creator/applyLog'
  }
]

</script>

<style lang="scss" scoped>
/** 背景图 */
.creator-header {
  background-image: url('#{$tnt-img-host}/bg/adn4.jpg');
  background-repeat: no-repeat;
  position: relative;
  height: 460upx;
  overflow: hidden;
  .header-bg {
    background-image: url('#{$tnt-img-host}/cool_bg_image/1.png');
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
    padding-top: 80upx;
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
        background-image: url(#{$tnt-img-host}/cool_bg_image/6.png);
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
          background-image: url(#{$tnt-img-host}/cool_bg_image/icon_bg5.png);
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

.start-apply {
  height: 88upx;
  line-height: 88upx;
  text-align: center;
  width: 80%;
  margin: 80upx auto 0 auto;
  border-radius: 16upx;
}
</style>
