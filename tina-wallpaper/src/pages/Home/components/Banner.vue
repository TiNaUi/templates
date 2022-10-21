<template>
  <view class="home-banner-container">
    <tn-swiper :list="list" indicatorPosition="bottomRight" :effect3d="true" mode="round"></tn-swiper>
  </view>
</template>

<script lang="ts" setup>
import { Banner, ContentApi } from '@/apis';
import { onMounted, ref } from 'vue';

defineOptions({
  name: 'HomeBanner'
})

const { position = 'HomeTop' } = defineProps<{
  position: string
}>()

const list = ref<{image: string}[]>([])

const getBanner = () => {
  ContentApi.bannerList(position).then(res => {
    list.value = res.data.data.map(item => ({ image: 'http://img.zukmb.cn/' + item.cover }))
  })
}
onMounted(() => {
  getBanner()
})
</script>

<style lang="scss" scoped>

</style>
