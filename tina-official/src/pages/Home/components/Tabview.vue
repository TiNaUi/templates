<template>
  <view class="tab-view-con" :style="'top:'+topNavHeight+'px'+';'">
    <scroll-view
      class="tab-view"
      :scrollLeft="scrollleft"
      scrollWithAnimation
      scrollX
    >
      <view
        :class="['tab-bar-item '+(currentTab===index?'active':'') ]"
        @click="swichNav(index)"
        data-inx="{{index}}"
        v-for="(item, index) in catNav"
        :key="index"
      >
        <text class="tab-bar-title">{{ item.name }}</text>
      </view>
    </scroll-view>
    <view
      class="tab-more"
      @click="typeClickAction"
    >
      <image mode="aspectFill" src="/static/images/tabmore.png"></image>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app';
import { ref, onMounted, computed } from 'vue';
import { useAppStore } from '../../../store/modules/app';

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

const scrollleft = ref(0)
const currentTab = ref(-1)
const swichNav = (index: number) => {}
const typeClickAction = () => {}

onMounted(() => {
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
.tab-view.data-v-4bb376a2 {
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
</style>
