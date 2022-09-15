<template>
  <view class="hot-tag-container">
    <SectionTitle title="热门标签" v-if="hasTitle" v-bind="titleProps" />
    <view class="">
      <view class="tn-plan-content tn-text-justify">
        <view v-for="(item, index) in tags" :class="['tn-plan-content__item','tn-margin-right','tn-round','tn-text-sm','tn-text-bold','tn-bg-'+item.color+'--light tn-color-'+ item.color]">
          <text class="tn-plan-content__item--prefix ">#</text>{{''+item.name+''}}</view>
      </view>
  </view>
  </view>
</template>

<script lang="ts" setup>
import SectionTitle from '@/components/sectionTitle/index.vue';
import { ref } from 'vue';

defineOptions({
  name: 'HotTag'
})

defineProps({
  hasTitle: {
    type: Boolean,
    default: true
  },
  titleProps: {
    type: Object,
    default: () => ({})
  }
})

const tags = ref([
  {
      name: "小清新",
      color: "red"
  }, {
      name: "动漫",
      color: "cyan"
  }, {
      name: "沙雕",
      color: "blue"
  }, {
      name: "搞笑",
      color: "green"
  }, {
      name: "王者荣耀",
      color: "orange"
  }, {
      name: "明星",
      color: "purplered"
  }, {
      name: "日系动漫",
      color: "purple"
  }, {
      name: "和平精英",
      color: "brown"
  }, {
      name: "泰国",
      color: "yellowgreen"
  }, {
      name: "风景",
      color: "grey"
  } ])

</script>

<style lang="scss" scoped>
.hot-tag-container {
  margin-bottom: 30upx;
  .tn-plan-content__item {
    display: inline-block;
    line-height: 45rpx;
    margin: 20rpx 20rpx 5rpx 0rpx;
    padding: 10rpx 30rpx;
    &--prefix {
      padding-right: 10rpx;
    }
  }
}
</style>
