<template>
  <view class="content" id="default" :style="tStyle">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { CSSProperties } from 'vue';


defineOptions({
  name: 'PageContent'
})

const { tStyle = {} } = defineProps<{
  tStyle?: CSSProperties
}>()

</script>

<style lang="scss" scoped>
.content {
  background: #f5f5f5;
  font: normal 14px Arial,Microsoft YaHei,WenQuanYi Micro Hei,Verdana,Tahoma,sans-serif;
  padding-bottom: 20upx;
}
</style>
