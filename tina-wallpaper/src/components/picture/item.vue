<template>
  <view class="picture-item" @click="itemClick">
    <view class="item-image">
      <image
        :src="data.url"
        mode="scaleToFill"
      />
    </view>
    <view class="item-content">
      <!-- <view class="item-title">炫动直播APP闪屏设计页面xxxxssdaa</view> -->
      <view class="item-info">
        <view class="item-info-icon">
          <text class="tn-icon-like"></text>
          <text class="info-value">{{ number.formatNumberAddPriceUnit(data.like) }}</text>
        </view>
        <view class="item-info-icon">
          <text class="tn-icon-download"></text>
          <text class="info-value">{{ number.formatNumberAddPriceUnit(data.download) }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { number } from '@tina-ui/ui'
defineOptions({
  name: 'PictureItem'
})

const props = defineProps<{
  data: any
}>()
const itemClick = () => {
  uni.navigateTo({
    url: '/pages/Pictures/detail?rid=' + props.data.id
  })
}

</script>

<style lang="scss" scoped>
.picture-item {
  width: 215rpx;
  height: 450upx;
  margin-bottom: 30upx;
  box-shadow: 0upx 30upx 60upx 0upx rgba(19,104,158,0.1), 0px 30upx 60upx 0upx rgba(19,104,158,0.1);
  border-radius: 20upx;
  overflow: hidden;
  padding-bottom: 14upx;
  position: relative;
  .item-image {
    height: 450upx;
    width: 100%;
    overflow: hidden;
    image {
      object-fit: scale-down;
      width: 100%;
      min-height: 100%;
    }
  }
  .item-content {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 4upx;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .item-title {
    margin: 15upx 14upx;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 22upx;
  }
  .item-info {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    color: #CED8E1;
    font-size: 20upx;
    padding: 0 6upx 4upx 6upx;
    &-icon {
      font-size: 22upx;
      flex: 1;
      &:last-child {
        text-align: right;
      }
    }
  }
}
</style>
