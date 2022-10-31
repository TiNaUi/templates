<template>
  <tn-modal
    v-model="visible"
    width="84%"
    :radius="12"
    :fontSize="0"
    :showCloseBtn="true"
    :maskCloseable="true"
    :zoom="true"
    :custom="true"
    @click=""
  >
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
    <view class="code-btn" @click="doApply()">更 新</view>
  </tn-modal>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue';
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

const formData = reactive({
  remark: userInfo.value?.creator.remark
})

function doApply() {
  UserApi.updateCreator(userInfo.value?.creator.id, { ...formData }).then(res => {
    if (res.data.success) {
      visible.value = false
      message.toast('更新成功')
      emits('success')
    } else {
      message.toast(res.data.message)
    }
  }).catch(e => {
    message.toast('更新失败')
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
