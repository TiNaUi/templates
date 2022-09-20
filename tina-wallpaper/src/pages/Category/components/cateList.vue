<template>
  <view class='nav-list'>
    <block v-for="(content_item, content_index) in lists" :key="content_index">
      <navigator
        open-type="navigate"
        hover-class='none'
        :url="content_item.url"
        class="nav-list-item tn-shadow-blur tn-cool-bg-image tn-flex tn-flex-direction-column tn-flex-col-center tn-flex-row-between"
        :style="{ 'background-image': `url(${content_item.background})`}"
      >
        <view class="content-container">
          <!-- <view class="icon">
            <view :class="['tn-icon-' + content_item.icon]"></view>
          </view> -->
          <view class="nav-link">
            <view class='title'>{{ content_item.title }}</view>
          </view>
        </view>
      </navigator>
    </block>
    
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import color from '@tina-ui/ui/libs/function/color'

defineOptions({
  name: 'CateList'
})

const lists = ref([
  {
    title: '美女',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F041914135038%2F140419135038-3-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715861&t=a2c0dd091f95ebdb5f60b3e1256ee2d6'
  },
  {
    title: '风景',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-04-19%2F5cb972785fa64.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715906&t=efd0f50130800ed2621d572361207604'
  },
  {
    title: '明星',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F74%2F51149%2Fe72e5cf533957691.jpg&refer=http%3A%2F%2Fdik.img.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715946&t=32a3bb146fc87381810419a28c6cde1a'
  },
  {
    title: '动漫',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F041914135038%2F140419135038-3-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715861&t=a2c0dd091f95ebdb5f60b3e1256ee2d6'
  },
  {
    title: '游戏',
    url: '//pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-04-19%2F5cb972785fa64.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715906&t=efd0f50130800ed2621d572361207604'
  },
  {
    title: '星空',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F74%2F51149%2Fe72e5cf533957691.jpg&refer=http%3A%2F%2Fdik.img.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715946&t=32a3bb146fc87381810419a28c6cde1a'
  },
  {
    title: '海景',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F74%2F51149%2Fe72e5cf533957691.jpg&refer=http%3A%2F%2Fdik.img.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715946&t=32a3bb146fc87381810419a28c6cde1a'
  },
  {
    title: '静物',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F74%2F51149%2Fe72e5cf533957691.jpg&refer=http%3A%2F%2Fdik.img.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715946&t=32a3bb146fc87381810419a28c6cde1a'
  },
  {
    title: '萌宠',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F74%2F51149%2Fe72e5cf533957691.jpg&refer=http%3A%2F%2Fdik.img.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715946&t=32a3bb146fc87381810419a28c6cde1a'
  },
  {
    title: '街景',
    url: '/pages/Pictures/index',
    background: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdik.img.kttpdq.com%2Fpic%2F74%2F51149%2Fe72e5cf533957691.jpg&refer=http%3A%2F%2Fdik.img.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665715946&t=32a3bb146fc87381810419a28c6cde1a'
  }
])

function getRandomCoolBg() {
  return color.getRandomCoolBgClass()
}

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
      width: 100%;
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
