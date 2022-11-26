<template>
  <view class="resource-list-item">
    <view @click="goDetail" class="goodItem">
      <view class="goodItem-view">
        <image class="goodImg goodType{{item.classify_id}}" :data-index="index" mode="aspectFill"
          :src="imgHost + '/' + item.resources.thumb_url"></image>
        <image class="videoIco" mode="widthFix" src="https://img.yugew.com/image/2a5fd032afabaaecb44a1317fb4a4016.png"
          v-if="item.resources.type == 'video'"></image>
        <image class="voiceIco" mode="widthFix" src="https://img.yugew.com/image/9d6d3d251129374e96fcc3b6240e8f14.png"
          v-if="item.resources.type == 'voice'"></image>
        <view class="imgTop" v-if="item.resources.is_top">置顶</view>
      </view>
      <view class="image-loading-view" style="position: absolute;top:0;width:100%;height: 100%;">
        <Loading :show="true" zIndex="0" :fixed="false"></Loading>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { Contribution } from '@/apis';
import Loading from '@/components/loading/index.vue'
import { useFileStore } from '@/store';
import { computed } from 'vue';

defineOptions({
  name: 'CenterCell'
})

const emit = defineEmits(['click'])

const { item,index,id } = defineProps<{
  item: Contribution.Item,
  index: number,
  id?: number
}>()

const fileStore = useFileStore()
const imgHost = computed(() => fileStore.imgHost)

function goDetail() {
  console.log(id)
  emit('click', { item, index })
}
</script>

