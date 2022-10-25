<template>
  <view class="hot-tag-container">
    <SectionTitle title="热门标签" v-if="hasTitle" :has-right="titleProps.hasRight" />
    <view class="">
      <view class="tn-plan-content tn-text-justify">
        <view
          v-for="(item, index) in tags"
          :class="['tn-plan-content__item','tn-margin-right','tn-round','tn-text-sm','tn-text-bold','tn-bg-'+item.color+'--light tn-color-'+ item.color]"
          :key="index"
          @click="itemClick(item)"
        >
          <text class="tn-plan-content__item--prefix ">#</text>{{''+item.tag_name+''}}</view>
      </view>
  </view>
  </view>
</template>

<script lang="ts" setup>
import { ContentApi, Tag } from '@/apis';
import SectionTitle from '@/components/sectionTitle/index.vue';
import { random } from '@/utils';
import { ref, onMounted } from 'vue';

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
const colors = ['red','cyan','blue','green','orange','purplered','purple','brown','grey', 'yellowgreen']
const tags = ref<Array<Tag.Item & { color: string }>>([])

function getColors() {
  return colors[random(0, colors.length - 1)]
}
function getTagList() {
  ContentApi.tagList().then(res => {
    tags.value = res.data.data.map(item => ({
      ...item,
      color: getColors()
    }))
  })
}

onMounted(() => {
  getTagList()
})

function itemClick(tag: Tag.Item) {
  uni.navigateTo({
    url: '/pages/Pictures/index?tagId=' + tag.id + '&tagName=' + tag.tag_name
  })
}

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
