<template>
  <image
    class="image-class"
    :mode="mode"
    :src="defaultImage"
    :style="(width?'width:'+width:'')+';'+(height?'height:'+height:'')"
    v-if="!finishLoadFlag"
  ></image>
  <image
    :class="[finishLoadFlag?'':'before-load']"
    @load="finishLoad"
    :mode="mode"
    :src="originalImage"
    :style="(finishLoadFlag&&width?'width:'+width:'')+';'+(finishLoadFlag&&height?'height:'+height:'')"
  ></image>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
  name: 'ImageLoader'
})

const { defaultImage, originalImage, width, height, mode = 'aspectFill' } = defineProps<{
  defaultImage: string,
  originalImage: string,
  width?: string,
  height?: string,
  mode?: string
}>()

const finishLoadFlag = ref(false)
const finishLoad = () => finishLoadFlag.value = true
</script>

<style lang="scss">
.before-load {
  height: 0;
  opacity: 0;
  width: 0;
}

image-loader image {
  border-radius: 16rpx;
  height: 100%;
  width: 100%;
}
</style>
