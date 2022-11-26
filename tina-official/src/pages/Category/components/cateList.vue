<template>
  <view class='nav-list'>
    <block v-for="(content_item, content_index) in lists" :key="content_index">
      <navigator
        open-type="navigate"
        hover-class='none'
        :url="'/pages/Pictures/index?cateId=' + content_item.id + '&cateName=' + content_item.name"
        class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-between"
        :style="{ 'background-image': `url(http://img.zukmb.cn/${content_item.cover})`}"
      >
        <view class="content-container">
          <!-- <view class="icon">
            <view :class="['tn-icon-' + content_item.icon]"></view>
          </view> -->
          <view class="nav-link">
            <view class='title'>{{ content_item.name }}</view>
          </view>
        </view>
      </navigator>
    </block>
    
  </view>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import color from '@tina-ui/ui/libs/function/color'
import { ContentApi, Category } from '@/apis';

defineOptions({
  name: 'CateList'
})

const lists = ref<Category.Item[]>([])

function getRandomCoolBg() {
  return color.getRandomCoolBgClass()
}

function getCateList() {
  ContentApi.categoriesList({}).then(res => {
    if (res.data.success) {
      lists.value = res.data.data
    }
  })
}

onMounted(() => {
  getCateList()
})

</script>

<style lang="scss" scoped>
/* 组件导航列表 start*/
.nav-list {
  display: flex;
  flex-wrap: wrap;
  padding: 0rpx 12rpx 0rpx;
  justify-content: space-between;
  margin-top: 30upx;
  
  .navigator-wrap {
    width: 48%;
    .content-container {
    }
  }
  /* 列表元素 start */
  ::v-deep {
    .nav-list-item {
      padding: 20rpx 10rpx;
      border-radius: 12rpx;
      margin: 0 10rpx 40rpx 0;
      background-size: cover;
      background-position: center;
      position: relative;
      z-index: 99;
      height: 180upx;
      background-size: 100% 100%;
      width: 46%;
      background-position: left top;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      
      /* 元素标题 start */
      .nav-link {
        font-size: 32rpx;
        text-transform: capitalize;
        padding: 0 0 10rpx 0;
        position: relative;
        
        .title {
          color: #FFFFFF;
          margin-top: 20rpx;
          text-align: center;
          text-shadow: 2px 2px 2px #333333;
        }
      }
      /* 元素标题 end */
      
      /* 元素图标 start */
      .icon {
        font-variant: small-caps;
        width: 90rpx;
        height: 90rpx;
        line-height: 90rpx;
        margin: 0;
        padding: 0;
        display: inline-flex;
        text-align: center;
        justify-content: center;
        vertical-align: middle;
        font-size: 50rpx;
        color: #FFFFFF;
        white-space: nowrap;
        opacity: 0.9;
        background-color: rgba(0, 0, 0, 0.05);
        background-size: cover;
        background-position: 50%;
        border-radius: 5000rpx;
      }
      /* 元素图标 end */
    }
    /* 列表元素 end */
  }
  /* 组件导航列表 end*/
}
</style>
