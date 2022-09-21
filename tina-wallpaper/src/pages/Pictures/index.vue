<template>
  <PageWrapper>
    <view class="container">
      <tn-tabs :list="scrollList" :current="current" backgroundColor="#FFFFFF" :barStyle="barStyle" @change="tabChange"></tn-tabs>
      <SectionTitle v-if="false" title="热门推荐" :hasRight="false" />
      <!-- <PictureList :lists="list" class="tn-margin-top" /> -->
    </view>
  </PageWrapper>
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/pageWrapper/index.vue';
import { ref, reactive } from 'vue';
import SectionTitle from '@/components/sectionTitle/index.vue';
import PictureList from '@/components/picture/list.vue';

defineOptions({
  name: 'PictureList'
})

const list = ref([
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
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

</script>

<style lang="scss" scoped>

</style>
