<template>
  <view class="section-title">
    <view class="section-title-left">
      <text class="section-title-text">
        <slot name="title">{{ title }}</slot>
      </text>
    </view>
    <view class="section-title-right" v-if="hasRight">
      <slot name="right"><view class="section-title-right-content" @click="navigator()">{{ rightText }} <text class="tn-icon-right"></text> </view></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>

defineOptions({
  name: 'SectionTitle'
})

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  hasRight: {
    type: Boolean,
    default: true
  },
  rightText: {
    type: String,
    default: '查看更多'
  },
  url: {
    type: String,
    default: '/pages/Pictures/index'
  }
})

const navigator = () => {
  uni.navigateTo({
    url: props.url
  })
}

</script>

<style lang="scss" scoped>
.section-title {
  margin-bottom: 30upx;
  display: flex;
  flex-wrap: nowrap;
  .section-title-left {
    flex: 1;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 6upx;
      border-radius: 16upx;
      height: 28upx;
      background: $tnt-main-color;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .section-title-text {
      margin-left: 12upx;
      font-size: 28upx;
      font-weight: 600;
    }
  }
  .section-title-right {
    color: $tnt-main-color;
  }
}
</style>
