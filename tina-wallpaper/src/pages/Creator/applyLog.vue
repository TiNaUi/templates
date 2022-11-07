<template>
  <ZPaging
    ref="paging"
    use-virtual-list
    use-compatibility-mode
    v-model="dataList"
    :extra-data="{ id: 'applyLogItem'}"
    @query="queryList"
  >
    <template #top>
      <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
        <CustomerNavBarNormal title="投稿记录"></CustomerNavBarNormal>
      </view>
    </template>
  </ZPaging>
  <view class="tn-padding-xl"></view>
  <NavIndexButton />
</template>

<script lang="ts" setup>
import CustomerNavBarNormal from '@/components/customer-navbar/normal.vue';
import { useNabbar } from '@/hooks';
import NavIndexButton from '@/components/common/nav-index-button.vue';
import { Contribution, UserApi } from '@/apis';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useUserStore } from '@/store';
import ZPaging from '@/components/z-paging/components/z-paging/z-paging.vue'
import { contributionEmitter } from '@/utils';

defineOptions({
  name: 'CreatorApolyLog'
})
const useStore = useUserStore()
const { vuex_custom_bar_height } = useNabbar()
const userInfo = computed(() => useStore.userInfo)

const paging = ref<typeof ZPaging | null>(null)

const dataList = ref<Contribution.Item[]>([])

watch(dataList, () => {
  console.log(dataList)
})

function queryList(pageNo: number, pageSize: number) {
  const params = {
    pageNum: pageNo,
    pageSize,
    user_id: userInfo.value?.id!
  }
  UserApi.contributionList(params).then(res => {
    if (res.data.success) {
      paging.value!.complete(res.data.data.rows)
    } else {
      paging.value!.complete();
    }
  }).catch(() => {
    paging.value!.complete(false);
  })
}

onMounted(() => {
  // 处理事件中线
  contributionEmitter.on('changeItem', (item) => {
    dataList.value[item.index] = item.item
  })
})

onUnmounted(() => {
  contributionEmitter.off('changeItem')
})

</script>

<style lang="scss" scoped>

</style>
