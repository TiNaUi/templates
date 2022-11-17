<template>
  <view class="container" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
    <CustomerNavBarNormal title="每日壁纸推荐"></CustomerNavBarNormal>
    <view class="title">每日壁纸推荐</view>
    <List v-model="hotList" style="margin-top: 30upx;"/>
    <view class="tn-margin-top" style="font-size: 24upx; color: #888;">返回首页更多精彩壁纸等你来取！</view>
  </view>
  <NavIndexButton />
</template>

<script lang="ts" setup>
import CustomerNavBarNormal from '@/components/customer-navbar/normal.vue';
import { useNabbar } from '@/hooks';
import List from '@/components/picture/list.vue';
import { ref } from 'vue';
import { ContentApi } from '@/apis';
import { wallpaperListHandler } from '../../utils/resource';
import { onLoad } from '@dcloudio/uni-app';
import NavIndexButton from '@/components/common/nav-index-button.vue';

const { vuex_custom_bar_height } = useNabbar()

defineOptions({
  name: 'Recommend'
})

const hotList = ref<any[]>([])

function queryList(id: number) {
  ContentApi.wallpaperInfo({ rid: id, userId: -1 }).then(res => {
    if (res.data.success) {
      hotList.value = wallpaperListHandler([res.data.data], true)
    }
  })
}

onLoad((res) => {
  const id = +(res?.id || 0)
  queryList(id)
})

</script>

<style lang="scss" scoped>
.title {
  margin: 30upx 0;
  text-align: center;
}
</style>
