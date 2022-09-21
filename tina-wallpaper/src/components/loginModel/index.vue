<template name="loginModel">
  <!-- 模态框 -->
  <tn-modal
    v-model="visible"
    width="84%"
    :radius="12"
    :fontSize="0"
    :content="content"
    title="登录即可体验完整功能"
    :showCloseBtn="true"
    :maskCloseable="true"
    :zoom="true"
    :custom="false"
    :button="buttonConfig"
    @click="doLogin"
  >
  </tn-modal>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';
import { reactive, ref } from 'vue';

defineOptions({
  name: 'LoginModel'
})
const userStore = useUserStore()

const visible = ref(false)

const content = "点击按钮一键登录"

const buttonConfig = [
  {
    shadow: true,
    width: '100%',
    height: '100rpx',
    backgroundColor: '#01BEFF',
    fontColor: '#fff',
    margin: '10rpx 0',
    text: '微信用户一键登录'
  }
]

const state = reactive({
  wechatCode: ''
})

function show() {
  visible.value = true
}

defineExpose({
  show
})

function doLogin() {
  console.log('ssssss')
  uni.login({
    provider: 'weixin',
    success: (loginRes) => {
      console.log("🚀 ~ file: index.vue ~ line 57 ~ doLogin ~ loginRes", loginRes)
      if (loginRes.errMsg.indexOf('ok') > -1) {
        state.wechatCode = loginRes.code
        getUserProfile()
      }
    },
    fail(err) {
      console.log("🚀 ~ file: index.vue ~ line 62 ~ fail ~ err", err)
    }
  })
}

function getUserProfile() {
  uni.showModal({
    title: '登录提醒',
    content: '亲，授权微信登录后才能正常使用小程序功能',
    success(actionRes) {
      if (actionRes.confirm) {
        uni.getUserProfile({
          desc: '获取您的昵称、头像、地区及性别',
          success(userRes) {
            console.log("🚀 ~ file: index.vue ~ line 72 ~ success ~ userRes", userRes)
            let sessionKey = '' // 远程获取
            userStore.setUserInfo({
              username: userRes.userInfo.nickName,
              avatar: userRes.userInfo.avatarUrl,
              openId: userRes.userInfo.openId
            })
            visible.value = false
          },
          fail: res => {
            console.log('fail', res);
            //拒绝授权
            uni.showToast({
              title: '您拒绝了请求,不能正常使用小程序!',
              icon: 'none',
              duration: 2000
            });
            return;
          }
        })
      } else {
        uni.showToast({
          title: '您拒绝了请求,不能正常使用小程序',
          icon: 'error',
          duration: 2000
        });
        uni.switchTab({
          url: "/pages/index/index"
        });
        return;
      }
    }
  })
}

</script>

<style lang="scss" scoped>

</style>
