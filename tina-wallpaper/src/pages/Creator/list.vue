<template>
  <view class="page-container container">
    <CreatorListItem />
    <CreatorListItem style="margin-top: 30upx;"/>
    <CreatorListItem style="margin-top: 30upx;"/>
    <CreatorListItem style="margin-top: 30upx;"/>
  </view>
</template>

<script lang="ts" setup>
import CreatorListItem from '@/components/creatorListItem/index.vue';

defineOptions({
  name: 'CreatorList'
})

</script>

<style lang="scss" scoped>

</style>
