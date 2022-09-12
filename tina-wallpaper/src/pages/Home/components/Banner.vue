<template>
  <view class="home-banner-container">
    <tn-swiper :list="list" indicatorPosition="bottomRight"></tn-swiper>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
  name: 'HomeBanner'
})

const list = ref([
  {image: 'https://lhsk.demo.hongcd.com/uploads/20220727/ea3838d155328fa2583f5a538b66ae59.jpg'},
  {image: 'https://lhsk.demo.hongcd.com/uploads/20210304/e522390a2607d8f7a92c7196f0fe2d9b.jpg'},
  {image: 'https://lhsk.demo.hongcd.com/uploads/20220727/74f418b81146eb2d22540d2d95efd0f7.jpg'}
])

</script>

<style lang="scss" scoped>

</style>
