<template>
  <view class="jiangqie-column" v-if="active.length > 0">
    <view class="jiangqie-column-header">
      <text class="navigator">滑动查看</text>{{ '' + activeTitle + '' }}</view>
    <scroll-view class="jiangqie-column-scroll-x-box" :scrollX="true">
      <view class="jiangqie-column-list">
        <view
          class="jiangqie-column-list-box"
          @click="activeItemClick(item.link)"
          v-for="(item, index) in active"
          :key="index"
        >
          <ImageLoader
            defaultImage="/static/images/placeholder800x400.png"
            :lazyLoad="true"
            mode="aspectFill"
            :originalImage="item.cover"
          />
          <view :class="['color'+index%6+1]">{{ item.title }}</view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import ImageLoader from '@/components/imageLoader/index.vue'

defineOptions({
  name: 'ColumnData'
})

const { active = [] } = defineProps<{
  activeTitle: string
  active?: Array<{
    link: string
    cover: string
    title: string
  }>
}>()
const activeItemClick = (link: string) => {}
</script>

<style lang="scss" scoped>
.jiangqie-column {
  background: #fff;
  border-radius: 12rpx;
  margin: 20rpx;
  padding: 20rpx 0 36rpx;
  &-header {
    margin: 0 30rpx 30rpx;
  }
  &-list {
    height: 240rpx;
    padding: 0 20rpx;
    white-space: nowrap;
    &-box {
      display: inline-block;
      height: 240rpx;
      margin-right: 10rpx;
      overflow: hidden;
      position: relative;
      width: 320rpx;
      &:last-child {
        margin-right: 0rpx;
      }
      view {
        background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), rgba(0, 0, 0, 0.6));
        border-radius: 0 0 16rpx 16rpx;
        color: #fff;
        font-size: 28rpx;
        font-weight: 400;
        height: 120rpx;
        line-height: 160rpx;
        margin-right: -3rpx;
        margin-top: -126rpx;
        overflow: hidden;
        padding: 0 21rpx;
        position: absolute;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 280rpx;
      }
    }
  }
  &-scroll {
    height: 240rpx;
  }
}
.jiangqie-column-list-box image,
.jiangqie-column-list-box image-loader {
  border-radius: 16rpx;
  height: 240rpx;
  width: 320rpx;
}
</style>
