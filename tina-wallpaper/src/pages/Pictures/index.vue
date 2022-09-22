<template>
  <PageWrapper>
    <view class="container">
      <z-paging
        ref="paging"
        v-model="list"
        :default-page-size="9"
        :lower-threshold="100"
        loading-more-default-text="点击加载更多"
        loading-more-loading-text="正在加载..."
        loading-more-no-more-text="没有更多了"
        loading-more-fail-text="加载失败，点击重新加载"
        :paging-style="{
          top: '100upx'
        }"
        @query="queryList"
      >
        <view slot="top">
          <tn-tabs :list="scrollList" :current="current" backgroundColor="#FFFFFF" :barStyle="barStyle" @change="tabChange"></tn-tabs>
          <SectionTitle v-if="false" title="热门推荐" :hasRight="false" />
        </view>
        <!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
        <view class="picture-list-container container">
          <Item class="item" v-for="(item, index) in list" :key="index"/>
        </view>

        <template #refresher="{refresherStatus}">
          <CustomRefresher :status="refresherStatus"></CustomRefresher>
        </template>
        <template #loadingMoreNoMore>
          <CustomNomore></CustomNomore>
        </template>
      </z-paging>
    </view>
  </PageWrapper>
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/pageWrapper/index.vue';
import { ref, reactive } from 'vue';
import SectionTitle from '@/components/sectionTitle/index.vue';
import Item from '@/components/picture/item.vue';
import { ZPagingComponent } from '@/components/z-paging/types';
import CustomRefresher from '../../components/z-paging/custom-refresher/custom-refresher.vue';
import CustomNomore from '@/components/z-paging/custom-nomore/custom-nomore.vue';

defineOptions({
  name: 'PictureList'
})

const list = ref([])
const current = ref(0)
const activeItemStyle = {  borderTop: '1rpx solid #E6E6E6'}
const barStyle = { boxShadow: `0 0 8upx #01BEFF`}
const scrollList = reactive([
  {name: '美女'},
  {name: '帅哥'},
  {name: '风景'},
  {name: '明星'},
  {name: '动漫'},
  {name: '游戏'},
  {name: '海景'},
  {name: '萌宠'},
  {name: '街景'}
])
const tabChange = (index: number) => {
  current.value = index
}

const paging = ref<ZPagingComponent | null>(null)
function fetchData() {
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
      {title: '', image: '', like: 233, download: 234},
    ])
  })
}

function queryList(pageNo: number, pageSize: number) {
  fetchData().then(res => {
    paging.value?.complete(res)
  }).catch(() => {
    paging.value?.complete(false)
  })
}

</script>

<style lang="scss" scoped>
.picture-list-container {
  display: flex;
  flex-wrap: wrap;
  .picture-item, .item {
    margin-right: 30upx;
    &:nth-of-type(3n) {
      margin-right: 0upx;
    }
  }
}
</style>
