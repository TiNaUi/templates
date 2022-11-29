<template>
  <view class="jiangqie-scroll-icon" v-if="iconNav&&iconNav.length>0">
    <scroll-view scrollX="true">
      <view class="jiangqie-iconbox" @click="iconNavItemClick(item.link)" v-for="(item, index) in iconNav" :key="index">
        <image class="jiangqie-iconimg" mode="aspectFill" :src="item.icon"></image>
        <text>{{item.title}}</text>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'HomeScrollIcon'
})
defineProps<{
  iconNav: Array<{
    title: string;
    link: string
    icon: string
  }>
}>()

const iconNavItemClick = (link: string) => {}

</script>

<style lang="scss" scoped>
.jiangqie-scroll-icon {
  padding: 0rpx 0 30rpx;
  white-space: nowrap;
  .jiangqie-iconbox {
    display: inline-block;
    text-align: center;
    width: 22%;
    image {
      margin: 0 auto 20rpx;
    }
  }
}
.jiangqie-icon,.jiangqie-iconbox {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.jiangqie-iconbox {
  flex-direction: column;
  width: 20%;
  text {
    color: #555;
    font-size: 26rpx;
    line-height: 46rpx;
  }
}
.jiangqie-iconimg {
  display: block;
  height: 116rpx;
  margin-bottom: 20rpx;
  width: 116rpx;
}

</style>
