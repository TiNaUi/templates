<template>
  <view class="content" id="default">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'PageContent'
})

</script>

<style lang="scss" scoped>
.content {
  background: #f5f5f5;
  font: normal 14px Arial,Microsoft YaHei,WenQuanYi Micro Hei,Verdana,Tahoma,sans-serif;
  padding-bottom: 20upx;
}
</style>
