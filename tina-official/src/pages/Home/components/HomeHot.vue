<template>
  <view class="jiangqie-list-view" v-if="hot.length>0">
    <view class="jiangqie-recom">
      <view class="jiangqie-recom-header">
        <text class="navigator">滑动查看</text>{{ '' + hotTitle + '' }}</view
      >
      <view class="jiangqie-scroll-wide-box">
        <scroll-view class="jiangqie-scroll-x-box" scrollX="{{true}}">
          <view
            class="jiangqie-scroll-box"
            v-for="(itemHot, indexHot) in hot"
            :key="itemHot.id"
            @click="clickPost(itemHot.id)"
          >
            <image-loader
              defaultImage="/static/images/placeholder800x400.png"
              lazyLoad
              mode="aspectFill"
              :originalImage="itemHot.thumbnail"
            ></image-loader>
            <view>{{ itemHot.title }}</view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'HomeHot'
})

const { hotTitle } = defineProps<{
  hotTitle: string,
  hot: Array<{
    id: number;
    title: string
    thumbnail: string
  }>
}>()

const clickPost = (id: string | number) => {}
</script>

<style lang="scss" scoped>
.jiangqie-recom-header {
  margin: 0 30upx 30upx;
}
.jiangqie-recom {
  padding: 0rpx;
}
.jiangqie-scroll-wide-box {
  margin: 0 30rpx;
  overflow: hidden;
}
.jiangqie-scroll-x-box {
  height: 210rpx;
  white-space: nowrap;
}
.jiangqie-scroll-box {
    display: inline-block;
    height: 200rpx;
    margin-right: 1.4%;
    position: relative;
    width: 32.2%;
}

.jiangqie-scroll-box image,.jiangqie-scroll-box image-loader {
    border-radius: 8rpx;
    height: 200rpx;
    width: 100%;
}

.jiangqie-scroll-box view {
    background: linear-gradient(180deg,hsla(0,0%,100%,0),rgba(0,0,0,.6));
    border-radius: 0 0 8rpx 8rpx;
    bottom: 0;
    color: #fff;
    font-size: 26rpx;
    font-weight: 400;
    height: 90rpx;
    line-height: 100rpx;
    overflow: hidden;
    position: absolute;
    text-indent: 20rpx;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
}

.jiangqie-scroll-box text {
    color: #ff9914;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 36rpx;
}
</style>
