<template>
  <view class="home-banner-container">
    <tn-swiper :list="list" indicatorPosition="bottomRight" :effect3d="true" mode="round"></tn-swiper>
  </view>
</template>

<script lang="ts" setup>
import { Banner, BannerApi } from '@/apis';
import { onMounted, ref } from 'vue';

defineOptions({
  name: 'HomeBanner'
})

const { position = 'HomeTop' } = defineProps<{
  position: string
}>()

const list = ref<{image: string}[]>([])

const getBanner = () => {
  BannerApi.getList(position).then(res => {
    list.value = res.data.map(item => ({ image: item.cover }))
  })
}
onMounted(() => {
  getBanner()
})
</script>

<style lang="scss" scoped>

</style>
