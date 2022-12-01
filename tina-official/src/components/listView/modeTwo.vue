import ImageLoader from '@/components/imageLoader/index.vue';
<template>
  <view class="jiangqie-list-view">
    <view class="jiangqie-list-float-l">
      <view
        class="jiangqie-list-block jiangqie-list-float"
        @click="clickPost(index)"
      >
        <view class="jiangqie-list-image">
          <text  v-if="item.badge">{{ item.badge }}</text>
          <ImageLoader
            defaultImage="/static/images/placeholder800x400.png"
            lazyLoad
            mode="aspectFill"
            :originalImage="item.thumbnails[0]"
          ></ImageLoader>
        </view>
        <view class="jiangqie-list-title">
          <text class="jiangqie-list-top" v-if="item.stick">置顶</text>{{ '' + item.title + '' }}</view
        >
        <view class="jiangqie-list-info">
          <view class="jiangqie-list-cmt">{{ '浏览 ' + item.views + '' }}</view>
          <view class="jiangqie-list-cmt">{{ '点赞 ' + item.likes + '' }}</view>
          <view class="jiangqie-list-time">{{ item.time }}</view>
        </view>
        <view
          class="jiangqie-list-prix jiangqie-list-prix-big"
          v-if="item.require_score"
        >
          <text >{{ item.require_score }}</text>积分</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import ImageLoader from '@/components/imageLoader/index.vue'

defineOptions({
  name: 'ListViewModeOne'
})

const emit = defineEmits<{
  (event: 'itemClick', params: { item: any, index: number }): void
}>()

const { item, show_excerpt, index } = defineProps<{
  show_excerpt: boolean
  index: number
  item: {
    badge: string
    stick: boolean
    title: string
    excerpt: string
    views: number
    likes: number
    time: string
    require_score: number
    thumbnails: string[]
  }
}>()

const clickPost = (index: number) => {
  emit('itemClick', { item, index })
}
</script>
