<template>
  <CustomerNavBarNormal title="图荐官"></CustomerNavBarNormal>
  <view class="page-container container" :style="{paddingTop: (vuex_custom_bar_height + 20) + 'px'}">
    <CreatorListItem />
    <CreatorListItem style="margin-top: 30upx;"/>
    <CreatorListItem style="margin-top: 30upx;"/>
    <CreatorListItem style="margin-top: 30upx;"/>
  </view>
  <NavIndexButton />
</template>

<script lang="ts" setup>
import CreatorListItem from '@/components/creatorListItem/index.vue';
import NavIndexButton from '@/components/common/nav-index-button.vue'
import CustomerNavBarNormal from '@/components/customer-navbar/normal.vue';
import { useNabbar } from '@/hooks';

defineOptions({
  name: 'CreatorList'
})
const { vuex_custom_bar_height } = useNabbar()

</script>

<style lang="scss" scoped>

</style>
