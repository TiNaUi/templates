<template>
  <view
    class="jiangqie-list-view jiangqie-list-float-l"
    v-if="recommend.length>0"
  >
    <view class="jiangqie-cmt-title">
      <text>猜你喜欢</text>
    </view>
    <view
      class="jiangqie-list-block jiangqie-list-float"
      @click="recPostClickAction(item)"
      v-for="(item, index) in recommend"
      :key="index"
    >
      <view class="jiangqie-list-image">
        <image-loader
          defaultImage="/static/images/placeholder800x400.png"
          lazyLoad
          mode="aspectFill"
          :originalImage="item.thumbnail"
        ></image-loader>
      </view>
      <view class="jiangqie-list-title">{{ item.title }}</view>
      <view class="jiangqie-list-info">
        <view class="jiangqie-list-cmt">{{ '浏览 ' + item.views + '' }}</view>
        <view class="jiangqie-list-cmt">{{ '点赞 ' + item.likes + '' }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import ImageLoader from '@/components/imageLoader/index.vue';

defineOptions({
  name: 'ViewRecommend'
})

type PostItem = {
  thumbnail: string
  id: number
  title: string
  badge: string
  stick: boolean
  excerpt: string
  views: number
  likes: number
  time: string
  require_score: number
  thumbnails: string[]
}

const { recommend = [] } = defineProps<{
  recommend: Array<Partial<PostItem>>
}>()
const recPostClickAction = (item: PostItem) => {}
</script>
