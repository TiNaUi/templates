<template>
  <view class="tab-view-con" :style="'top:' + topNavHeight + 'px' + ';'">
    <scroll-view class="tab-view" :scrollLeft="scrollleft" scrollWithAnimation scrollX>
      <view
        :class="['tab-bar-item ' + (currentTab === index ? 'active' : '')]"
        @click="swichNav(index)"
        data-inx="{{index}}"
        v-for="(item, index) in navs"
        :key="index"
      >
        <text class="tab-bar-title">{{ item.name }}</text>
      </view>
    </scroll-view>
    <view class="tab-more" @click="typeClickAction">
      <image mode="aspectFill" src="/static/images/tabmore.png"></image>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref, onMounted, computed } from 'vue'
import { useAppStore } from '@/store'
import { rpx2px } from '../../../utils/element';

defineOptions({
  name: 'TabView'
})

const { catNav = [] } = defineProps<{
  catNav?: Array<{
    name: string
  }>
}>()
const appStore = useAppStore()
const menuRect = uni.getMenuButtonBoundingClientRect()
const vuex_status_bar_height = computed(() => appStore.vuex_status_bar_height)
const topNavHeight = computed(() => vuex_status_bar_height.value + menuRect.height)

const typeClickAction = () => {}
const navs = computed(() => [{id: 0,name: "近期"}].concat(catNav))

const catLength = ref<number[]>([])
const calculateCatLength = function() {
  for (let i = 0; i < navs.value.length; i++) {
    var a = navs.value[i];
   catLength.value.push(rpx2px(28 * a.name.length + 56));
  }
}

const scrollleft = ref(0)
const currentTab = ref(0)
const swichNav = (index: number) => {
  const screenWidth = rpx2px(750)
  console.log(screenWidth, index)
  if (index !== currentTab.value) {
    let width = 0
    for (let n = 0; n < index; n++) {
      width += catLength.value[n]
    }
    let i = 0
    console.log(screenWidth, index, width)
    if (width > screenWidth / 2) {
      i = width - screenWidth / 2
    }
    currentTab.value = index
    scrollleft.value = i + 50
    // 加载文章
  }
}

onMounted(() => {
  calculateCatLength()
  console.log(topNavHeight)
})
</script>

<style lang="scss" scoped>
.tab-view-con {
  background-color: #fff;
  border-radius: 12rpx;
  display: flex;
  margin: 20rpx;
  padding-bottom: 1rpx;
  position: sticky;
  top: 120rpx;
  z-index: 9999;
}
.tab-view-con-fix {
  top: 159rpx;
}
.tab-view {
  box-sizing: border-box;
  height: 100upx;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  z-index: 99;
}
.tab-view {
  border: none;
  width: 651rpx;
}
.tab-more {
  height: 99rpx;
  width: 99rpx;
}
.tab-more image {
  height: 96rpx;
  margin: 3rpx 3rpx 0 0;
  width: 96rpx;
}
.tab-bar-item,
.tab-bar-title {
  height: 100rpx;
  line-height: 100rpx;
}

.tab-bar-title {
  color: #666;
  font-size: 30rpx;
  font-weight: 400;
  letter-spacing: -2rpx;
}
.active .tab-bar-title {
  color: #000 !important;
  font-size: 36rpx;
  font-weight: 600;
}
.tab-bar-item {
  box-sizing: border-box;
  display: inline-block;
  margin: 0 28rpx;
  padding: 0;
  text-align: center;
}
</style>
