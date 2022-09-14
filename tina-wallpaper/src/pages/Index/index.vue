<template>
  <view class="page">
    <Home :style="{display: currentIndex === 0 ? '' : 'none'}"/>
    <Category :style="{display: currentIndex === 1 ? '' : 'none'}"/>
    <Creator :style="{display: currentIndex === 2 ? '' : 'none'}"/>
    <UserCenter :style="{display: currentIndex === 3 ? '' : 'none'}"/>
  </view>
  <Tabbar />
</template>

<script lang="ts" setup>
import Home from '../Home/index.vue';
import Category from '../Category/index.vue';
import Creator from '../Creator/index.vue';
import UserCenter from '../UserCenter/index.vue';
import Tabbar from './components/tabbar/index.vue';
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage'
})

const currentIndex = ref(0)

</script>

<style lang="scss" scoped>

</style>
