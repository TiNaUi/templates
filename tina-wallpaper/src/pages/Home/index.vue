<template>
  <PageWrapper>
    <Banner position="HomeTop"/>
    <view class="container">
      <HomeNav />
      <HotTag class="tn-margin-top" />
      <view class="create-banner">
        <image class="create-banner-image" :src="useImagePath('/banner/create.png')" mode='widthFix'></image>
      </view>
      <SectionTitle class="tn-margin-top" title="今日壁纸精选" />
      <List v-model="hotList" style="margin-top: 30upx;"/>
      <SectionTitle title="热门推荐" />
      <List ref="paging" :isHidden="isHidden" v-model="list" :load-more="true" :queryList="queryList" style="margin-top: 30upx;"/>
    </view>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import Banner from './components/Banner.vue';
import HomeNav from './components/HomeNav.vue';
import List from '@/components/picture/list.vue';
import HotTag from '@/components/hotTag/index.vue';
import SectionTitle from '@/components/sectionTitle/index.vue';
import PageWrapper from '@/components/pageWrapper/index.vue';
import { useImagePath } from '@/hooks';
import { onPageScroll, onPullDownRefresh, onReachBottom, onHide, onShow } from '@dcloudio/uni-app';
import { IPictureList } from '@/components/picture/types';
import { ContentApi, getResourceList, Resource } from '@/apis';
import { wallpaperListHandler } from '@/utils';

const hotList = ref<any[]>([])
const list = ref<any[]>([])
const paging = ref<IPictureList>()

const props = defineProps({
  hidden: Boolean
})

const isHidden = computed(() => props.hidden)

onMounted(() => {
  ContentApi.wallpaper({ pageNum: 1, pageSize: 3, isHot: true }).then((res) => {
    if (res.data.success) {
      hotList.value = wallpaperListHandler(res.data.data.rows || []).slice(0, 3)
    }
  })
})

const queryList = (params: { pageNo: number; pageSize: number; }):Promise<any[]> => {
  console.log(isHidden.value)
  return new Promise((resolve, reject) => {
    ContentApi.wallpaper({ pageNum: params.pageNo, pageSize: params.pageSize }).then(res => {
      if (res.data.success) {
        resolve(wallpaperListHandler(res.data.data.rows))
      } else {
        resolve([])
      }
    }).catch(e => {
      reject(e)
    })
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

<style scoped lang="scss">
/* 自定义导航栏内容 start */
.custom-nav {
  height: 100%;
  
  &__back {
    margin: auto 5rpx;
    font-size: 40rpx;
    margin-right: 10rpx;
    margin-left: 30rpx;
    flex-basis: 5%;
  }
  
  &__search {
    flex-basis: 60%;
    width: 100%;
    height: 100%;
    
    &__box {
      width: 100%;
      height: 70%;
      padding: 10rpx 0;
      margin: 0 30rpx;
      border-radius: 60rpx 60rpx 0 60rpx;
      font-size: 24rpx;
      background-color: rgba(255,255,255,0.2);
    }
    
    &__icon {
      padding-right: 10rpx;
      margin-left: 20rpx;
      font-size: 30rpx;
    }
    
    &__text {
    }
  }
}
/* 自定义导航栏内容 end */

/*logo start */
.logo-image{
  width: 65rpx;
  height: 65rpx;
  position: relative;
}
.logo-pic{
  background-size: cover;
  background-repeat:no-repeat;
  // background-attachment:fixed;
  background-position:top;
  border-radius: 50%;
}

.create-banner {
  width: 100%;
  &-image {
    width: 100%;
  }
}
</style>