<template>
  <view class="list-container">
    <view class="picture-list-container" v-if="!loadMore">
      <Item class="item" v-for="(item, index) in dataLists" :data="item" :key="index"/>
    </view>
    <z-paging
      v-else
      ref="paging"
      v-model="dataLists"
      :default-page-size="9"
      :inside-more="true"
      :lower-threshold="100"
      :refresher-enabled="false"
      use-page-scroll
      loading-more-default-text="点击加载更多"
      loading-more-loading-text="正在加载..."
      loading-more-no-more-text="没有更多了"
      loading-more-fail-text="加载失败，点击重新加载"
      @query="queryList"
    >
      <view class="picture-list-container">
        <Item class="item" v-for="(item, index) in dataLists" :data="item" :key="index"/>
      </view>
    </z-paging>
  </view>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from 'vue'
import Item from './item.vue'
import ZPaging from '@/components/z-paging/components/z-paging/z-paging.vue'

defineOptions({
  name: 'PictureList'
})

const props = defineProps({
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => ([])
  },
  queryList: {
    type: Function as PropType<(params: { pageNo: number; pageSize: number; }) => Promise<Array<any>>>,
    default: () => Promise.resolve([])
  },
  loadMore: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])
const dataLists = computed({
  get() {
    return props.modelValue
  },
  set(value: any[]) {
    emit('update:modelValue', value)
  }
})
const paging = ref<typeof ZPaging | null>(null)

function queryList(pageNo: number, pageSize: number) {
  const params = {
    pageNo: pageNo,
    pageSize: pageSize,
  }
  console.log(params, '=================')
  props.queryList(params).then(res => {
    console.log(params, res)
    paging.value?.complete(res)
  }).catch((err) => {
    console.log(err)
    paging.value?.complete(false)
  })
}

function reload() {
  paging.value!.reload()
}

function updatePageScrollTop(scrollTop: number) {
  paging.value!.updatePageScrollTop(scrollTop);
}

function doChatRecordLoadMore() {
  paging.value!.doChatRecordLoadMore();
}

function pageReachBottom() {
  paging.value!.pageReachBottom();
}

defineExpose({
  paging,
  reload,
  updatePageScrollTop,
  doChatRecordLoadMore,
  pageReachBottom
})
</script>

<style lang="scss" scoped>
.list-container {
  min-height: 400upx;
}
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
