<template>
  <PageContent>
    <NewHeader :title="home.home_title" :hot-search="home.hot_search" />
    <ScrollIcon :icon-nav="home.icon_nav" />
    <Banner />
    <HomeTags :tags-title="home.tags_title" :tags-width="home.tags_width" :tags="home.tags" />
    <ColumnData :active-title="home.active_title" :active="home.active"/>
    <Tabview />
  </PageContent>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import PageContent from '@/components/pageWrapper/content.vue'
import NewHeader from './components/Header.vue'
import ScrollIcon from './components/ScrollIcon.vue'
import Banner from './components/Banner.vue'
import HomeTags from './components/Tags.vue'
import ColumnData from './components/ColumnData.vue'
import Tabview from './components/Tabview.vue'
import { onLoad } from '@dcloudio/uni-app'

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
  top_nav: [{ id: 26,name: "小功能演示" },{ id: 25,name: "WordPress教程" },{ id: 27,name: "追格动态" },{ id: 18,name: "小程序" }]
})

</script>

<style scoped lang="scss"></style>
