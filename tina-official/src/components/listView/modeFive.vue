<template>
  <view class="jiangqie-list-view">
    <view class="jiangqie-list-float-r">
      <view
        class="jiangqie-list-block"
        @click="clickPost(index)"
        v-if="item.thumbnails.length === 0"
      >
        <view class="jiangqie-list-title">
          <text class="jiangqie-list-top" v-if="item.stick">置顶</text>
          {{ '' + item.title + '' }}
        </view>
        <view class="jiangqie-list-describe" v-if="show_excerpt">{{ item.excerpt }}</view>
        <view class="jiangqie-list-info">
          <view class="jiangqie-list-cmt">{{ '浏览 ' + item.views + '' }}</view>
          <view class="jiangqie-list-cmt">{{ '点赞 ' + item.likes + '' }}</view>
          <view class="jiangqie-list-time">{{ item.time }}</view>
        </view>
        <view class="jiangqie-list-prix jiangqie-list-prix-big" v-if="item.require_score">
          <text>{{ item.require_score }}</text>
          积分
        </view>
      </view>
      <template v-else>
        <template v-if="item.thumbnails.length<3">
          <view
            class="jiangqie-list-block jiangqie-list-float"
            @click="clickPost(index)"
            v-if="index%5!=4"
          >
            <view class="jiangqie-list-image">
              <text v-if="item.badge">{{ item.badge }}</text>
              <ImageLoader
                defaultImage="/static/images/placeholder800x400.png"
                lazyLoad
                mode="aspectFill"
                :originalImage="item.thumbnails[0]"
              ></ImageLoader>
            </view>
            <view class="jiangqie-list-title">
              <text class="jiangqie-list-top" v-if="item.stick">置顶</text>
              {{ '' + item.title + '' }}
            </view>
            <view class="jiangqie-list-info">
              <view class="jiangqie-list-cmt">{{ '浏览 ' + item.views + '' }}</view>
              <view class="jiangqie-list-cmt">{{ '点赞 ' + item.likes + '' }}</view>
              <view class="jiangqie-list-time">{{ item.time }}</view>
            </view>
            <view class="jiangqie-list-prix jiangqie-list-prix-big" v-if="item.require_score">
              <text>{{ item.require_score }}</text>
              积分
            </view>
          </view>
          <view
            class="jiangqie-list-block img-max"
            @click="clickPost(index)"
            v-else
          >
            <view class="jiangqie-list-title">
              <text class="jiangqie-list-top" v-if="item.stick">置顶</text>
              {{ '' + item.title + '' }}
            </view>
            <view class="jiangqie-list-image">
              <text v-if="item.badge">{{ item.badge }}</text>
              <ImageLoader
                defaultImage="/static/images/placeholder800x400.png"
                lazyLoad
                mode="aspectFill"
                :originalImage="item.thumbnails[0]"
              ></ImageLoader>
            </view>
            <view class="jiangqie-list-info">
              <view class="jiangqie-list-cmt">{{ '浏览 ' + item.views + '' }}</view>
              <view class="jiangqie-list-cmt">{{ '点赞 ' + item.likes + '' }}</view>
              <view class="jiangqie-list-time">{{ item.time }}</view>
            </view>
            <view class="jiangqie-list-prix jiangqie-list-prix-big" v-if="item.require_score">
              <text>{{ item.require_score }}</text>
              积分
            </view>
          </view>
        </template>
        <template v-else>
          <view
            @click="clickPost(index)"
            class="jiangqie-list-block img-max"
            v-if="item.thumbnails.length>=3"
          >
            <view class="jiangqie-list-title">
              <text class="jiangqie-list-top" v-if="item.stick">置顶</text>
              {{ '' + item.title + '' }}
            </view>
            <view class="jiangqie-list-image jiangqie-list-image-treble">
              <text v-if="item.badge">{{ item.badge }}</text>
              <ImageLoader
                defaultImage="/static/images/placeholder800x400.png"
                lazyLoad
                mode="aspectFill"
                v-for="(img, index) in item.thumbnails.slice(0, 2)"
                :originalImage="img"
                :key="index"
              ></ImageLoader>
            </view>
            <view class="jiangqie-list-info">
              <view class="jiangqie-list-cmt">{{ '浏览 ' + item.views + '' }}</view>
              <view class="jiangqie-list-cmt">{{ '点赞 ' + item.likes + '' }}</view>
              <view class="jiangqie-list-time">{{ item.time }}</view>
            </view>
            <view class="jiangqie-list-prix jiangqie-list-prix-big" wx:if="{{item.require_score}}">
              <text>{{ item.require_score }}</text>
              积分
            </view>
          </view>
        </template>
      </template>
    </view>
  </view>
</template>

<script lang="ts" setup>
import ImageLoader from '@/components/imageLoader/index.vue'

defineOptions({
  name: 'ListViewModeOne'
})

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

const clickPost = (index: number) => {}
</script>
