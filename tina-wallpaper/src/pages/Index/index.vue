<template>
  <view class="page">
    <Home v-if="tabberPageLoadFlag[0]" :style="{display: currentIndex === 0 ? '' : 'none'}"/>
    <Category v-if="tabberPageLoadFlag[1]" :style="{display: currentIndex === 1 ? '' : 'none'}"/>
    <Creator v-if="tabberPageLoadFlag[2]" :style="{display: currentIndex === 2 ? '' : 'none'}"/>
    <UserCenter v-if="tabberPageLoadFlag[3]" :style="{display: currentIndex === 3 ? '' : 'none'}"/>
  </view>
  <tn-tabbar
    v-model="currentIndex"
    :list="tabbarList"
    activeColor="#838383"
    inactiveColor="#AAAAAA"
    activeIconColor="tn-cool-bg-color-7"
    :animation="true"
    :safeAreaInsetBottom="true"
    @change="switchTabbar"
  ></tn-tabbar>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import Home from '../Home/index.vue';
import Category from '../Category/index.vue';
import Creator from '../Creator/index.vue';
import UserCenter from '../UserCenter/index.vue';
import Tabbar from './components/tabbar/index.vue';
import { onLoad } from '@dcloudio/uni-app';

defineOptions({
  name: 'IndexPage'
})

const currentIndex = ref(0)
const tabberPageLoadFlag = ref<boolean[]>([])

const tabbarList = reactive([
  {
    title: '首页',
    activeIcon: '/static/tabbar/home_tnnew.png',
    inactiveIcon: '/static/tabbar/home_tn.png'
  },
  {
    title: '分类',
    activeIcon: '/static/tabbar/cate_tncur.png',
    inactiveIcon: '/static/tabbar/cate_tn.png'
  },
  {
    title: '推荐官',
    activeIcon: '/static/tabbar/information_tncur.png',
    inactiveIcon: '/static/tabbar/information_tn.png'
  },
  {
    title: '我的',
    activeIcon: '/static/tabbar/my_tnnew.png',
    inactiveIcon: '/static/tabbar/my_tn.png'
  }
])

onLoad((options) => {
  const index = Number(options.index || 0)
  tabberPageLoadFlag.value = tabbarList.map((item, tabbarIndex) => {
    return index === tabbarIndex
  })
  switchTabbar(index)
})


const switchTabbar = (index: number) => {
  const selectPageFlag = tabberPageLoadFlag.value[index]
  if (selectPageFlag === undefined) {
    return
  }
  if (selectPageFlag === false) {
    tabberPageLoadFlag.value[index] = true
  }
  currentIndex.value = index
  // 切换完，返回顶部
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 0
  })
}

</script>

<style lang="scss" scoped>

</style>
