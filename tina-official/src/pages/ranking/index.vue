<template>
  <PageContent title="榜单">
    <view class="jiangqie-rank">
      <view class="jiangqie-rank-cover" v-if="background">
        <image mode="aspectFill" :src="background"></image>
      </view>
    </view>
    <view class="jiangqie-rank">
      <view class="jiangqie-rank-tab">
        <view
          :class="[cur_sort == item.sort ? 'active' : '']"
          @click="clickTab(index)"
          v-for="(item, index) in tabs"
          :key="index"
          >{{ item.name }}</view
        >
      </view>
    </view>
    <view class="jiangqie-rank-list">
      <view
        class="jiangqie-rank-list-block"
        @click="clickPost(index)"
        v-for="(item, index) in posts"
        :key="index"
      >
        <view class="jiangqie-rank-list-cover">
          <text>{{ index + 1 }}</text>
          <image mode="aspectFill" :src="item.thumbnail"></image>
        </view>
        <view class="jiangqie-rank-list-text">
          <view class="jiangqie-rank-list-title">{{ item.title }}</view>
          <view class="jiangqie-rank-list-info">
            <text v-if="cur_sort == 'view'">{{ '浏览 ' + item.views }}</text>
            <template v-else>
              <text v-if="cur_sort == 'like'">{{ '点赞 ' + item.likes }}</text>
              <template v-else>
                <text v-if="cur_sort == 'favorite'">{{ '收藏 ' + item.favorites }}</text>
                <text v-else>{{ '评论 ' + item.comment_count }}</text>
              </template>
            </template>
            <text>{{ item.time }}</text>
          </view>
        </view>
      </view>
    </view>
  </PageContent>
</template>

<script lang="ts" setup>
import PageContent from '@/components/pageWrapper/content.vue'

import postData from '../../../mock/rankPost.json'

defineOptions({
  name: 'Ranking'
})


const setting = {
  background:
    'https://zs.jiangqie.com/wp-content/uploads/2022/05/StockSnap_TNK87N7464-940x529-1.jpg'
}
const background = ref(setting.background)
const cur_sort = ref('view')
const clickTab = (index: number) => {}
const tabs = [
  {
    sort: 'view',
    name: '浏览数'
  },
  {
    sort: 'like',
    name: '点赞数'
  },
  {
    sort: 'favorite',
    name: '收藏数'
  },
  {
    sort: 'comment',
    name: '评论数'
  }
]

const clickPost = (index: number) => {}
const posts = postData as any[]
</script>

<style lang="scss" scoped>
.jiangqie-rank {
  background: #fff;
  border-radius: 12rpx;
  margin: 20rpx;
}

.jiangqie-rank-cover {
  height: 360rpx;
  width: 100%;

  image {
    border-radius: 12rpx;
    height: 100%;
    width: 100%;
  }
}

.jiangqie-rank-list {
  padding: 0 20rpx 80rpx;
}

.jiangqie-rank-tab {
  align-items: center;
  display: flex;
  padding: 20rpx;

  view {
    background: #f2f2f2;
    border-radius: 80rpx;
    font-size: 28rpx;
    font-weight: 400;
    height: 72rpx;
    line-height: 72rpx;
    margin-right: 2%;
    text-align: center;
    width: 23.5%;

    &:last-of-type {
      margin-right: 0;
    }

    &.active {
      background: #363b51;
      color: #fff;
      font-weight: 500;
    }
  }
}

.jiangqie-rank-list-block {
  align-items: center;
  background: #fff;
  border-radius: 12rpx;
  display: flex;
  margin: 20rpx 0;
  padding: 20rpx;

  &:nth-child(1) {
    .jiangqie-rank-list-cover {
      text {
        background: #48b785;
      }
    }
  }

  &:nth-child(2) {
    .jiangqie-rank-list-cover {
      text {
        background: #ff9e2b;
      }
    }
  }

  &:nth-child(3) {
    .jiangqie-rank-list-cover {
      text {
        background: #2c70db;
      }
    }
  }
}

.jiangqie-rank-list-cover {
  flex: 0 0 220rpx;
  height: 160rpx;
  position: relative;
  width: 220rpx;

  image {
    border-radius: 6rpx;
    height: 100%;
    width: 100%;
  }

  text {
    background: #363b51;
    border-radius: 0 0 6rpx 6rpx;
    color: #fff;
    font-size: 20rpx;
    font-weight: 500;
    left: 20rpx;
    padding: 6rpx 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 48rpx;
  }
}

.jiangqie-rank-list-text {
  overflow: hidden;
  padding-left: 20rpx;
  width: 100%;
}

.jiangqie-rank-list-title {
  font-size: 30rpx;
  font-weight: 500;
  height: 1em;
  line-height: 1em;
  margin-bottom: 30rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
}

.jiangqie-rank-list-info {
  align-items: center;
  display: flex;

  text {
    background: #f5f5f5;
    border-radius: 4rpx;
    color: #666;
    font-size: 20rpx;
    font-weight: 400;
    margin-right: 8rpx;
    padding: 4rpx 12rpx;
  }
}
</style>
