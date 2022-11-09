<template>
  <ZPaging
    ref="paging"
    use-virtual-list
    use-compatibility-mode
    :extra-data="{ id: 'creatorList'}"
    @query="queryList"
  >
  <template #top>
    <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
      <CustomerNavBarNormal title="图荐官"></CustomerNavBarNormal>
    </view>
  </template>
</ZPaging>
<NavIndexButton />
</template>

<script lang="ts" setup>
import NavIndexButton from '@/components/common/nav-index-button.vue'
import CustomerNavBarNormal from '@/components/customer-navbar/normal.vue'
import { useNabbar } from '@/hooks'
import { UserApi } from '@/apis'
import ZPaging from '@/components/z-paging/components/z-paging/z-paging.vue'
import { ref } from 'vue'

defineOptions({
  name: 'CreatorList'
})
const { vuex_custom_bar_height } = useNabbar()
const paging = ref<typeof ZPaging | null>(null)

function queryList(pageNum: number, pageSize: number) {
  const params = {
    pageNum,
    pageSize
  }

  UserApi.creatorList(params).then(res => {
    if (res.data.success) {
      paging.value!.complete(res.data.data.rows)
    } else {
      paging.value!.complete();
    }
  }).catch(() => {
    paging.value!.complete(false);
  })
}

</script>

<style lang="scss" scoped>

</style>
