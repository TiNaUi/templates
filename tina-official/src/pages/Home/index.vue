<template>
  <PageContent :t-style="pageStyle">
    <HomeNavBar :hot-search="home.hot_search" :alpha="navBarAlpha"/>
    <NewHeader :title="home.home_title" :hot-search="home.hot_search" />
    <ScrollIcon :icon-nav="home.icon_nav" />
    <Banner />
    <HomeTags :tags-title="home.tags_title" :tags-width="home.tags_width" :tags="home.tags" />
    <ColumnData :active-title="home.active_title" :active="home.active" />
    <Tabview :cat-nav="home.top_nav" />
    <template v-for="(item, index) in listViewData" :key="index">
      <HomeHot v-if="Number(home.hot_index) === index" :hot-title="home.hot_title" :hot="home.hot" />
      <HomeList
        :item="item"
        :index="index"
        :list-mode="home.list_mode"
        :show_excerpt="home.show_excerpt"
      />
    </template>
  </PageContent>
</template>

<script lang="ts" setup>
import { computed, reactive, CSSProperties, onMounted, ref, onUnmounted } from 'vue';
import PageContent from '@/components/pageWrapper/content.vue'
import NewHeader from './components/Header.vue'
import ScrollIcon from './components/ScrollIcon.vue'
import Banner from './components/Banner.vue'
import HomeTags from './components/Tags.vue'
import ColumnData from './components/ColumnData.vue'
import Tabview from './components/Tabview.vue'
import HomeList from './components/HomeList.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNavBar from './components/HomeNavBar.vue'
import { useAppStore } from '@/store'

import data from '../../../mock/listview.json'
import { appEvent } from '../../utils/events/appEvent';

const listViewData = data.data

const appStore = useAppStore()
const navbarHeight = computed(() => appStore.vuex_custom_bar_height + 10)
const pageStyle = computed(() => {
  return {
    paddingTop: navbarHeight.value + 'px'
  }
})
const navBarAlpha = ref(true)

const home = reactive({
  home_title: 'News.',
  hot_search: ['追格资讯小程序', 'WordPress', '主题', '插件', '小程序', '小功能'],
  icon_nav: [
    {
      icon: 'https://zs.jiangqie.com/wp-content/uploads/2022/05/11.png',
      title: '追格圈子',
      link: 'appid:wxe501b4f59afa1e19',
      enable: 'yes'
    },
    {
      icon: 'https://zs.jiangqie.com/wp-content/uploads/2022/05/333.png',
      title: '积分商城',
      link: '/pages/store/store',
      enable: 'yes'
    },
    {
      icon: 'https://zs.jiangqie.com/wp-content/uploads/2022/05/111.png',
      title: '认证',
      link: '/pages/certification/certification',
      enable: 'yes'
    },
    {
      icon: 'https://zs.jiangqie.com/wp-content/uploads/2022/05/999.png',
      title: '小功能',
      link: '/pages/list/list?cat_id=26',
      enable: 'yes'
    },
    {
      icon: 'https://zs.jiangqie.com/wp-content/uploads/2022/05/222.png',
      title: '积分任务',
      link: '/pages/integral/integral',
      enable: 'yes'
    },
    {
      icon: 'https://zs.jiangqie.com/wp-content/uploads/2022/05/768.png',
      title: '官网小程序',
      link: 'appid:wx589dff586a7c9b4f',
      enable: 'yes'
    }
  ],
  tags_title: '热门标签',
  tags_width: 1400,
  tags: [
    { id: 8, name: 'WordPress', badge: '教程' },
    { id: 15, name: '小程序', badge: '' },
    { id: 48, name: '小功能', badge: '看一看' },
    { id: 12, name: '插件', badge: '' },
    { id: 44, name: '追格', badge: '小程序' },
    { id: 43, name: '追格资讯小程序', badge: '' },
    { id: 45, name: '追格小程序', badge: '' },
    { id: 13, name: '主题', badge: 'hot' },
    { id: 36, name: 'WordPress主题', badge: '追格' },
    { id: 32, name: '酱茄cms', badge: '' },
    { id: 16, name: '酱茄', badge: '' },
    { id: 34, name: 'WordPress教程', badge: 'Study' },
    { id: 37, name: 'WordPress模板', badge: '' }
  ],
  active_title: '广泰产品',
  active: [
    {
      cover:
        'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_IPXQTD44G8-940x529-1.jpg',
      title: '追格圈子小程序',
      link: 'appid:wxe501b4f59afa1e19',
      enable: 'yes'
    },
    {
      cover: 'https://zs.jiangqie.com/wp-content/uploads/2022/01/61d048b38345a.jpg',
      title: '企业官网小程序',
      link: 'appid:wx589dff586a7c9b4f',
      enable: 'yes'
    },
    {
      cover: 'https://zs.jiangqie.com/wp-content/uploads/2022/01/0k.jpg',
      title: '知识付费小程序',
      link: 'appid:wx330d4c92336035d2',
      enable: 'yes'
    },
    {
      cover:
        'https://bbs.zhuige.com/wp-content/uploads/2021/12/manny-moreno-Wxq7U4jaPfM-unsplash-350x250-1.jpg',
      title: '轻社区+商城版',
      link: 'appid:wx0684ec4f84ff2207',
      enable: 'yes'
    },
    {
      cover:
        'https://bbs.zhuige.com/wp-content/uploads/2021/12/velizar-ivanov-9bFLTsaP_xo-unsplash-350x250-1.jpg',
      title: '酱茄wp主题 →',
      link: 'https://pro.jiangqie.com/',
      enable: 'yes'
    },
    {
      cover: 'https://bbs.zhuige.com/wp-content/uploads/2021/12/03330.png',
      title: '追格官网',
      link: 'https://www.zhuige.com',
      enable: 'yes'
    }
  ],
  top_nav: [
    { id: 26, name: '小功能演示' },
    { id: 25, name: 'WordPress教程' },
    { id: 27, name: '追格动态' },
    { id: 18, name: '小程序' }
  ],
  list_mode: 4,
  show_excerpt: false,
  hot_index: 1,
  hot_title: '编辑精选',
  hot: [
    {
      id: 2278,
      title: '看广告后“复制下载”链接',
      thumbnail:
        'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_X4AAF4SU9Q-940x529-1.jpg',
      direct_link_switch: 0,
      direct_link: ''
    },
    {
      id: 2254,
      title: '看广告阅读全文',
      thumbnail:
        'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_FLU1A9EK7E-940x529-1.jpg',
      direct_link_switch: 0,
      direct_link: ''
    },
    {
      id: 2242,
      title: '积分阅读全文',
      thumbnail:
        'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_DGYLV0KMUY-940x529-1.jpg',
      direct_link_switch: 0,
      direct_link: ''
    },
    {
      id: 2102,
      title: '文章列表打开“视频号/视频”',
      thumbnail:
        'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_76X7PJUIMF-940x529-1.jpg',
      direct_link_switch: 1,
      direct_link:
        'finder:sphwkm4cNAFnRLs;feedId:export/UzFfAgtgekIEAQAAAAAAf2s4-m4BPwAAAAstQy6ubaLX4KHWvLEZgBPEtqEwCEFiS9n9zNPgMJq1dCiQ4AyT_DIh_GcF76bA'
    },
    {
      id: 2274,
      title: '看广告后“网盘下载”资源',
      thumbnail:
        'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_YO8TBBW2RV-940x529-1.jpg',
      direct_link_switch: 0,
      direct_link: ''
    },
    {
      id: 2259,
      title: '短代码/内容种草功能演示',
      thumbnail:
        'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_IPXQTD44G8-940x529-1.jpg',
      direct_link_switch: 0,
      direct_link: ''
    }
  ]
})

onMounted(() => {
  appEvent.on('pageScroll', (data) => {
    if (data.page === 'Index') {
      navBarAlpha.value = data.scrollTop > 100 ? false :true
    }
  })
})

onUnmounted(() => {
  appEvent.off('pageScroll')
})
</script>

<style scoped lang="scss"></style>
