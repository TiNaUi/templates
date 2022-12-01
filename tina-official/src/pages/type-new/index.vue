<template>
  <PageContent title="分类">
    <ColumnData
      activeTitle="分类推荐"
      :active="top_cats"
      :t-style="{ background: 'transparent' }"
      @itemClick="cateItemClick"
    />
    <view class="jiangqie-new-type" v-for="(item, index) in sort_cats" :key="index">
      <view
        class="jiangqie-new-type-group"
        @click="clickCat(index)"
        >{{ item.name }}</view
      >
      <view
        class="jiangqie-new-type-block"
        @click="clickCat(index, cate.id)"
        v-for="(cate, indexCat) in item.cats"
        :key="indexCat"
      >
        <view class="jiangqie-new-type-side">
          <view class="jiangqie-new-type-img">
            <image mode="aspectFill" :src="cate.cover"></image>
          </view>
          <view class="jiangqie-new-type-info">
            <view>{{ cate.name }}</view>
            <view>{{ cate.description }}</view>
          </view>
        </view>
        <view class="jiangqie-new-type-btn">{{ '总计 ' + cate.count + ' 篇' }}</view>
      </view>
    </view>
  </PageContent>
</template>

<script lang="ts" setup>
import PageContent from '@/components/pageWrapper/content.vue';
import ColumnData from '@/components/columnData/index.vue'

import cateData from '../../../mock/cateData.json'
import { navigatorTo } from '../../utils/common';


defineOptions({
  name: 'TypeNew'
})

const top_cats = cateData.top_cats
const sort_cats = cateData.sort_cats

const clickCat = (index: number, id?: number) => {}
const cateItemClick = ({ item, index }: { item: typeof top_cats[0], index: number }) => {
  navigatorTo({
    url: '/pages/list/index',
    query: {
      id: item.id
    }
  })
}
</script>

<style lang="scss" scoped>
.jiangqie-new-type {
  background: #fff;
  border-radius: 12rpx;
  margin: 20rpx;
  padding: 0 30rpx;
  &-block {
    align-items: center;
    border-bottom: 1rpx solid #eee;
    display: flex;
    flex-wrap: nowrap;
    padding: 30rpx 0;
    &:last-child {
      border: none;
    }
  }
  &-side {
    align-items: center;
    display: flex;
    overflow: hidden;
    width: 78%;
  }
  &-img {
    flex: 0 0 64px;
    height: 64px;
    width: 64px;
    image {
      border-radius: 6rpx;
      height: 100%;
      width: 100%;
    }
  }
  &-info {
    overflow: hidden;
    padding-left: 20rpx;
    view {
      &:nth-child(1) {
        color: #333;
        font-size: 30rpx;
        font-weight: 600;
        height: 1.2em;
        line-height: 1.2em;
        margin-bottom: 20rpx;
      }
      :nth-child(2) {
        color: #999;
        font-size: 24rpx;
        font-weight: 400;
        height: 1.2em;
        line-height: 1.2em;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
      }
    }
  }
  &-btn {
    background: #ffefee;
    border-radius: 40rpx;
    color: #ff6d56;
    font-size: 22rpx;
    font-weight: 400;
    height: 40rpx;
    line-height: 40rpx;
    text-align: center;
    width: 22%;
  }
  &-group {
    font-size: 36rpx;
    font-weight: 600;
    padding: 30rpx 0 10rpx;
  }
}
</style>
