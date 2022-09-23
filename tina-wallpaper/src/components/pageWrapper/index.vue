<template>
  <view class="page-container tn-safe-area-inset-bottom">
    <CustomerNavbar />
    <view class="page-main" :style="{ paddingTop: (appStore.vuex_custom_bar_height + 10) + 'px' }">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app';
import CustomerNavbar from '../customer-navbar/index.vue';

defineOptions({
  name: 'PageWrapper'
})

const appStore = useAppStore()
</script>

<style scoped lang="scss">

</style>