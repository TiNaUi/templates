<template>
  <view class="page-container">
    <tn-custom bg-color="bg-white">
      <block slot="left">
        <navigator class='padding-left-xs' url="/pagesA/about/about" hover-class="none">
          <view class="cu-avatar round shadow " :style="'background-image:url();'"></view>
        </navigator>
      </block>
      <block slot="content">
        <text class="text-xxl text-black" :style="'opacity:' +  (1 - titleOpacity) + ';'">图鸟官网</text>
      </block>
      <block slot="right">
        <view :style="'opacity:' +  titleOpacity + ';'">
          <navigator url="/pagesA/search/search" hover-class="none">
            <view class='search-form search-round search-index'>
              <text class="cuIcon-search text-bold text-lg"></text>
              <input class="" disabled type="text" placeholder="搜点什么" confirm-type="search" placeholder-style="color:#000" />
            </view>
          </navigator>
        </view>
      </block>
    </tn-custom>
    <Banner />
    <view class="container">
      <HomeNav />
      <List :lists="list" style="margin-top: 30upx;"/>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Banner from './components/Banner.vue';
import HomeNav from './components/HomeNav.vue';
import List from '@/components/picture/list.vue';
import TnCustom from '@/components/TnCustom/index.vue'

const titleOpacity = 1

const list = ref([
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234},
  {title: '', image: '', like: 233, download: 234}
])
</script>

<style scoped></style>