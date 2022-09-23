<template>
  <PageWrapper>
    <view class="tn-margin-top-sm">
      <view class="tn-flex tn-flex-row-between tn-color-white tnt-bg-main-color tn-round tn-padding-xs tn-margin">
        <view class="justify-content-item tn-text-center tn-flex" style="padding:25rpx 30rpx;">
          <tn-avatar-group class="data-v-6ea9e2f9" :lists="latestUserAvatar" size="sm"></tn-avatar-group>
          <text class="tn-padding-xs">629位</text>
        </view>
        <view class="justify-content-item tn-text-right tn-padding-top-xs">
          <view class="tn-text-bold">图鉴官·星图部落</view>
          <view class="tn-text-xs tn-color-white tn-padding-top-xs">大佬作品集，一起干巴爹叭</view>
        </view>
        <view class="justify-content-item tn-text-right tn-margin-right tn-padding-top-lg">
          <text class="tn-icon-right tn-color-white"></text>
        </view>
      </view>
    </view>
    <view class="tn-flex tn-flex-row-between tn-margin-top">
      <view class="justify-content-item tn-margin tn-text-bold tn-text-xl">精选图鉴官</view>
      <view class="justify-content-item tn-margin tn-text-bold tn-text-xl">
          <text class="tn-padding-right-xs">更多</text>
          <text class="tn-icon-right"></text>
      </view>
    </view>
    <view class="tn-strip-bottom">
      <view class="tn-flex tn-flex-wrap tn-margin-bottom">
        <view style="width:33.3%;" v-for="(item, index) in bloggerList" :key="index">
          <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center ">
            <view class="tn-radius tn-padding-sm">
              <view class="image-pic" :style="'background-image:url('+item.url+')'">
                <view class="image-circle"></view>
                <view class="rank-index" v-if="index < 3" :style="'background-image: url('+ useImagePath('/rank/rank-'+ (index + 1) +'.png') +')'"></view>
              </view>
              <view class="tn-text-center tn-text-bold tn-padding-top-xs">{{item.name}}</view>
              <view class="tn-text-center tn-text-xs tn-color-gray--dark tn-padding-top-xs">{{item.text}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="filter-tabbar tnt-shadow">
      <view class="filter-tabbar-item" :class="{active: currentFilterIndex === 0}" @click="itemFilter(0)">点赞排行</view>
      <view class="filter-tabbar-item" :class="{active: currentFilterIndex === 1}" @click="itemFilter(1)">下载排行</view>
      <view class="filter-bar" :style="{ left: `${filterBarLeft}%` }"></view>
    </view>
    <view class="container">
      <List ref="paging" v-model="list" :load-more="true" :queryList="queryList" style="margin-top: 30upx;"/>
    </view>
  </PageWrapper>
  <NavIndexButton />
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/pageWrapper/index.vue';
import { IPictureList } from '@/components/picture/types';
import { useImagePath } from '@/hooks';
import { onPageScroll, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';
import { computed, ref } from 'vue';
import List from '@/components/picture/list.vue'
import NavIndexButton from '../../components/common/nav-index-button.vue'

defineOptions({
  name: 'Rank'
})

const currentFilterIndex = ref(0)
const filterBarLeft = ref(5)
const itemFilter = (index: number) => {
  currentFilterIndex.value = index
  if (index === 0) {
    filterBarLeft.value = 5
  } else {
    filterBarLeft.value = 55
  }
}

const latestUserAvatar = [
  {
    src: "https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"
  },
  {
    src: "https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"
  },
  {
    src: "https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"
  },
  {
    src: "https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"
  }
]

const bloggerList = [
  {
    id: 0,
    type: "image",
    name: "北北博主",
    text: "629人关注",
    url: "https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg"
  },
  {
    id: 1,
    type: "image",
    name: "摄影博主",
    text: "688人关注",
    url: "https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg"
  },
  {
    id: 2,
    type: "image",
    name: "校园博主",
    text: "552人关注",
    url: "https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg"
  },
  {
    id: 3,
    type: "image",
    name: "户外博主",
    text: "105人关注",
    url: "https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg"
  },
  {
    id: 4,
    type: "image",
    name: "电影博主",
    text: "387人关注",
    url: "https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg"
  },
  {
    id: 5,
    type: "image",
    name: "动漫博主",
    text: "643人关注",
    url: "https://tnuiimage.tnkjapp.com/blogger/content_1.jpeg"
} ]

const list = ref<any[]>([])
const paging = ref<IPictureList>()

const queryList = (params: { pageNo: number; pageSize: number; }):Promise<any[]> => {
  console.log(111)
  return new Promise((resolve, reject) => {
    resolve([ 
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234},
      {title: '', image: '', like: 233, download: 234}
    ])
  })
}

// ========================= zpaging ====================
const isPagingRefNotFound = computed(() => {
  if (paging.value) {
    return !paging.value.paging || paging.value.paging === undefined
  }
  return true
})

onPullDownRefresh(() => {
  if (isPagingRefNotFound.value) return
  paging.value?.reload()
})

onPageScroll((e) => {
  if (isPagingRefNotFound.value) return
  paging.value!.updatePageScrollTop(e.scrollTop)
  if (e.scrollTop < 10) {
    paging.value?.doChatRecordLoadMore();
  }
})

onReachBottom(() => {
  if (isPagingRefNotFound.value) return
  paging.value?.pageReachBottom()
})
</script>

<style lang="scss" scoped>
.image-pic {
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10rpx;
  position: relative;
  .rank-index {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 48upx 48upx;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 58upx;
    height: 58upx;
    background-color: #fff;
    border-radius: 50%;
    padding: 10upx;
  }
}
.image-circle {
  font-size: 40rpx;
  font-weight: 300;
  height: 190rpx;
  position: relative;
  width: 190rpx;
}
.filter-tabbar {
  height: 100upx;
  line-height: 100upx;
  display: flex;
  flex-wrap: nowrap;
  width: 90%;
  margin: 0 auto;
  position: relative;
  &-item {
    flex: 1;
    position: relative;
    text-align: center;
    width: 50%;
    &:first-child {
      &::before {
        position: absolute;
        content: '';
        width: 1px;
        height: 50%;
        background: #dedede;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    &.active {
      color: #fff;
    }
  }
  .filter-bar {
    background-color: $tnt-main-color;
    content: '';
    width: 40%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translate3d(0, -50%, 0);
    border-radius: 20upx;
    z-index: -1;
    transition: all 0.3s linear;
  }
}
</style>
