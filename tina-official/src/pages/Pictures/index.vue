<template>
<view class="container">
  <z-paging
    ref="paging"
    v-model="list"
    :default-page-size="9"
    loading-more-default-text="点击加载更多"
    loading-more-loading-text="正在加载..."
    loading-more-no-more-text="没有更多了"
    loading-more-fail-text="加载失败，点击重新加载"
    @query="queryList"
  >
    <template #top>
      <CustomerNavbar :fixed="false" />
      <view  v-if="subtitle" style="margin-left: 30rpx">
        <SectionTitle :title="subtitle" :hasRight="false" />
      </view>
      <tn-tabs v-else :list="categoryList" :current="current" backgroundColor="#FFFFFF" :barStyle="barStyle" @change="tabChange"></tn-tabs>
    </template>
    <!-- 如果希望其他view跟着页面滚动，可以放在z-paging标签内 -->
    <view class="picture-list-container container">
      <Item class="item" v-for="(item, index) in list" :data="item" :key="index" />
    </view>

    <template #refresher="{refresherStatus}">
      <CustomRefresher :status="refresherStatus"></CustomRefresher>
    </template>
    <template #loadingMoreNoMore>
      <CustomNomore></CustomNomore>
    </template>
  </z-paging>
  <NavIndexButton />
</view>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import SectionTitle from '@/components/sectionTitle/index.vue';
import Item from '@/components/picture/item.vue';
import { ZPagingComponent } from '@/components/z-paging/types';
import CustomRefresher from '../../components/z-paging/custom-refresher/custom-refresher.vue';
import CustomNomore from '@/components/z-paging/custom-nomore/custom-nomore.vue';
import CustomerNavbar from '@/components/customer-navbar/index.vue';
import NavIndexButton from '../../components/common/nav-index-button.vue';
import { onLoad } from '@dcloudio/uni-app';
import { Category, ContentApi, Resource } from '@/apis';
import { wallpaperListHandler } from '@/utils';

defineOptions({
  name: 'PictureList'
})

const list = ref([])
const current = ref(0)
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

const query = ref<Resource.ReqGetParams>({
  tagId: 0,
  categoryId: 0,
  isHot: false,
  isRecommend: false,
  search: ''
})

const tagName = ref('')
const search = ref('')

const subtitle = computed(() => {
  if (query.value.isHot) return '热门壁纸'
  if (query.value.isRecommend) return '精选壁纸'
  if (query.value.search) return `关于“${query.value.search}”的壁纸`
  if (query.value.tagId) return `#${tagName.value}`
  return null
})

const categoryList = ref<Category.Item[]>([])

function getCateList() {
  ContentApi.categoriesList({}).then(res => {
    if (res.data.success) {
      categoryList.value = [{ id: 0, name: '全部 ' } as any, ...res.data.data]
      const cateId = query.value.categoryId || 0
      current.value = categoryList.value.findIndex(item => item.id === cateId)
      console.log(cateId, current.value)
    }
  })
}

function getResourceList({ pageNum = 1, pageSize = 10 }: { pageSize: number; pageNum: number }) {
  query.value.pageNum = pageNum
  query.value.pageSize = pageSize
  return ContentApi.wallpaper(query.value)
}

onLoad((res) => {
  if (res.tagId) {
    query.value.tagId = +res.tagId
    tagName.value = res.tagName || ''
  }
  if (res.cateId) {
    query.value.categoryId = +res.cateId
  }
  if (res.isHot) {
    query.value.isHot = res.isHot === 'true' ? true : false
  }
  if (res.isRecommend) {
    query.value.isRecommend = res.isRecommend === 'true' ? true : false
  }
  getCateList()
})

// =========================== zpagin ================================
const paging = ref<ZPagingComponent | null>(null)

const tabChange = (index: number) => {
  current.value = index
  const currentCate = categoryList.value[index]
  query.value.categoryId = currentCate.id
  paging.value?.reload(true)
}

function queryList(pageNo: number, pageSize: number) {
  getResourceList({
    pageNum: pageNo,
    pageSize
  }).then(res => {
    if (res.data.success) {
      paging.value?.complete(wallpaperListHandler(res.data.data.rows))
    }
  }).catch(e => {
    paging.value?.complete(false)
  })
}

</script>

<style lang="scss" scoped>
.picture-list-container {
  display: flex;
  flex-wrap: wrap;
  .picture-item, .item {
    margin-right: 15upx;
    &:nth-of-type(3n) {
      margin-right: 0upx;
    }
  }
}
</style>
