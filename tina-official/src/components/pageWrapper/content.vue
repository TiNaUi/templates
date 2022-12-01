<template>
  <view class="content" id="default" :style="pageStyle">
    <tn-nav-bar v-if="title" :bottomShadow="false" :fixed="true">{{ title }}</tn-nav-bar>
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store';
import { computed, CSSProperties } from 'vue';

defineOptions({
  name: 'PageContent'
})

const { tStyle = {}, title } = defineProps<{
  tStyle?: CSSProperties
  title?: string
}>()

const appStore = useAppStore()
const navbarHeight = computed(() => appStore.vuex_custom_bar_height + 10)
const pageStyle = computed(() => {
  return {
    paddingTop: title ? navbarHeight.value + 'px' : 0,
    ...tStyle
  }
})



</script>

<style lang="scss" scoped>
.content {
  background: #f5f5f5;
  font: normal 14px Arial,Microsoft YaHei,WenQuanYi Micro Hei,Verdana,Tahoma,sans-serif;
  padding-bottom: 20upx;
}
</style>
