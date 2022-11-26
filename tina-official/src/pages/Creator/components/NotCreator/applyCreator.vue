<template>
  <tn-modal
    v-model="visible"
    width="84%"
    :radius="12"
    :fontSize="0"
    title="登录即可体验完整功能"
    :showCloseBtn="true"
    :maskCloseable="true"
    :zoom="true"
    :custom="true"
    :button="buttonConfig"
    @click=""
  >
    <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
      <view class="content__title"></view>
      <view class="content__data tn-flex-1">
        <tn-input
          v-model="formData.code"
          type="text"
          :border="true"
          placeholder="请输入星荐官口令"
        ></tn-input>
      </view>
    </view>
    <view class="content tn-flex tn-flex-direction-row tn-flex-col-center">
      <view class="content__title"></view>
      <view class="content__data tn-flex-1">
        <tn-input
          v-model="formData.remark"
          type="textarea"
          :border="true"
          placeholder="请输入您的星荐官描述"
        ></tn-input>
      </view>
    </view>
    <view class="code-btn" @click="doApply">立即加入星荐官阵营</view>
  </tn-modal>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { UserApi } from '@/apis';
import { useUserStore } from '@/store';
import { message } from '@tina-ui/ui';

defineOptions({
  name: 'ApplyCreator'
})

const emits = defineEmits(['update:modelValue', 'success'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const visible = computed({
  get() {
    return props.modelValue
  },
  set(val: boolean) {
    emits('update:modelValue', val)
  }
})
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)

const buttonConfig = [
  {
    shadow: true,
    width: '100%',
    height: '100rpx',
    backgroundColor: '#01BEFF',
    fontColor: '#fff',
    margin: '10rpx 0',
    text: '取消'
  },
  {
    shadow: true,
    width: '100%',
    height: '100rpx',
    backgroundColor: '#01BEFF',
    fontColor: '#fff',
    margin: '10rpx 0',
    text: '确定'
  }
]
const formData = reactive({
  remark: '',
  code: ''
})

function doApply() {
  UserApi.applyCreator({ ...formData, user_id: userInfo.value!.id }).then(res => {
    if (res.data.success) {
      visible.value = false
      message.toast('申请成功,等待审核哦！')
      emits('success')
    } else {
      message.toast(res.data.message)
    }
  }).catch(e => {
    message.toast('申请失败，请重试')
  })
}

</script>

<style lang="scss" scoped>
.content {
  margin-top: 30upx;
}
.code-btn {
  width: 80%;
  margin: 30upx auto 0 auto;
  height: 70upx;
  line-height: 70upx;
  text-align: center;
  background: #ff9e01;
  color: #fff;
  border-radius: 32upx;
}
</style>
