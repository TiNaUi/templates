<template>
  <PageContent title="最新文章">
    <view class="jiangqie-list-header" v-if="cat">
        <view class="jiangqie-list-group-info">
            <view class="jiangqie-list-cover">
                <img mode="aspectFill" :src="cat.cover" />
            </view>
            <view class="jiangqie-list-text">
                <view>{{cat.name}}</view>
                <view>{{'总计 '+cat.count+' 篇文章'}}</view>
            </view>
        </view>
        <view class="jiangqie-list-cover-bg">
            <view class="jiangqie-list-cover-mask"></view>
            <img class="jiangqie-list-bg" mode="aspectFill" :src="cat.cover" />
        </view>
    </view>
    <view :class="[cat?'jiangqie-list-view-cat':'']">
      <template v-if="posts.length>0">
        <ListView
          v-for="(item, index) in posts" :key="index"
          :item="item"
          :index="index"
          :list-mode="Number(cateData.list_mode)"
          :show_excerpt="Boolean(cateData.show_excerpt)"
        />
      </template>
    </view>
  </PageContent>
  <NavIndexButton />
</template>

<script lang="ts" setup>
import PageContent from '@/components/pageWrapper/content.vue';
import ListView from '@/components/listView/index.vue'
import NavIndexButton from '@/components/common/nav-index-button.vue'
import { ref } from 'vue';

import postData from '../../../mock/listview.json'

defineOptions({
  name: 'PageList'
})

const cateData = {ad:{"id_banner":"adunit-67b954be988fa487",switch_video:"yes",id_video:"adunit-d948089681256c40",frequency_banner:"6",switch_banner:"no"},list_mode:"4",show_excerpt:0,cat:{"name":"WordPress教程","count":10,"cover":"https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_TNK87N7464-940x529-1.jpg"}}


const cat = ref(cateData.cat)
const posts = ref(postData.data)

</script>

<style lang="scss" scoped>
.jiangqie-list-view-cat {
  margin-top: -80rpx;
  ::v-deep{
    .jiangqie-list-view {
      position: relative;
      z-index: 3;
    }
  }
}
.jiangqie-list-header {
  height: 460rpx;
  margin-bottom: 20rpx;
  width: 100%;
  position: relative;
  margin-top: -60rpx;
}
.jiangqie-list-bg {
  height: 100%;
  width: 100%;
}
.jiangqie-list-group-info {
  align-items: center;
  display: flex;
  left: 30rpx;
  position: absolute;
  top: 200rpx;
  z-index: 9;
}
.jiangqie-list-cover {
  flex: 0 0 120rpx;
  height: 120rpx;
  margin-right: 20rpx;
  width: 120rpx;
  image {
    border-radius: 8rpx;
    height: 100%;
    width: 100%;
  }
}
.jiangqie-list-cover-bg {
  height: 440rpx;
  overflow: hidden;
  position: relative;
  image {
    filter: blur(7px);
    height: 500rpx;
    margin-left: -2%;
    margin-top: -40rpx;
    width: 106%;
  }
}
.jiangqie-list-cover-mask {
  backdrop-filter: blur(7px);
  height: 440rpx;
  position: absolute;
  width: 100%;
  z-index: -1;
}
@supports (-webkit-overflow-scrolling:touch) {
  .jiangqie-list-cover-mask {
    z-index: 2;
  }

  .jiangqie-list-cover-bg image {
    filter: none;
  }
}
.jiangqie-list-text {
  width: 100%;
  view {
    color: #fff;
    font-size: 24rpx;
    font-weight: 300;
    &:nth-child(1) {
      font-size: 36rpx;
      font-weight: 600;
      margin-bottom: 10rpx;
    }
  }
}

</style>
