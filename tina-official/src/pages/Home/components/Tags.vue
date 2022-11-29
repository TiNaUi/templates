<template>
  <view class="jiangqie-tags-box" v-if="tags.length>0">
    <view class="jiangqie-tags-header">
      <text class="navigator" @click="tagsMoreClick">查看更多</text>{{''+tagsTitle+''}}
    </view>
    <view class="jiangqie-tags-list-box">
      <view class="jiangqie-tags-list" :style="'width:'+tagsWidth+'rpx'">
        <view @click="tagClickAction(item.id, item.name)" v-for="(item, index) in tags" :key="index">
          <text class="data-v-4bb376a2" v-if="item.badge">{{item.badge}}</text>
          {{'#'+item.name+''}}
        </view>
      </view>
    </view>
</view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'HomeTag'
})

const {tags = [], tagsTitle = '', tagsWidth} = defineProps<{
  tagsTitle: string;
  tagsWidth: number
  tags?: Array<{
    id: number
    name: string
    badge: string
  }>
}>()
const tagsMoreClick = () => {}
const tagClickAction = (id: number, name: string) => {}
</script>

<style lang="scss" scoped>
.jiangqie-tags-box {
  background: #fff;
  border-radius: 12rpx;
  margin: 20rpx;
  padding: 20rpx 0 30rpx;
}
.jiangqie-tags-list {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  padding-left: 30rpx;
  &-box {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  view {
    background: #f3f3f3;
    border-radius: 60rpx;
    color: #555;
    font-size: 24rpx;
    font-weight: 500;
    margin-right: 20rpx;
    margin-top: 24rpx;
    padding: 20rpx 30rpx;
    position: relative;
    text {
      background: #363b51;
      border-radius: 18rpx 18rpx 18rpx 0;
      color: #fff;
      font-size: 18rpx;
      font-weight: 300;
      height: 36rpx;
      line-height: 36rpx;
      padding: 0 12rpx;
      position: absolute;
      right: -20rpx;
      top: -18rpx;
      z-index: 6;
    }
  }
}

</style>
