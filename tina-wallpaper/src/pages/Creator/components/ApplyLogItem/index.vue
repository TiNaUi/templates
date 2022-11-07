<template>
  <view class="article-shadow tn-margin">
    <view class="tn-flex" style="position: relative;">
      <view class="image-pic tn-margin-sm"
        :style="'background-image:url(' + imghost + '/' + item.resources.thumb_url + ')'">
        <view class="image-article">
        </view>
      </view>
      <view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
        <view class="tn-text-lg tn-text-bold clamp-text-1"> {{ item.resources.name }} </view>
        <view class="tn-padding-top-xs" style="min-height: 100rpx;">
          <text class=" tn-text-sm tn-color-gray clamp-text-2"> {{ item.resources.info }} </text>
        </view>
        <view class="tn-flex tn-flex-row-between tn-flex-col-between">
          <view v-for="(label_item,label_index) in item.resources.tags" :key="label_index"
            class="justify-content-item tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold"
            :class="[`tn-bg-${getColor()}--light tn-color-${getColor()}`]">
            <text class="tn-tag-content__item--prefix">#</text> {{ label_item.tag_name }}
          </view>
          <view class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled"
            style="padding-top: 5rpx;"> 共 {{ item.resources.url.length }} 张图 </view>
          <view class="action-wrapper">
            <view class="action-item" @click="toTop()" v-if="item.resources.status === 2">{{ item.resources.is_top ? '已置顶' : '置顶' }}</view>
          </view>
        </view>
      </view>
      <view :class="['status-block',statusClass(item.resources.status)]">{{ item.resources.status === 1 ? '未审' :
          item.resources.status === 2 ? '通过' : '被驳'
      }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { Contribution } from '@/apis';
import { useFileStore } from '@/store';
import { contributionEmitter, random } from '@/utils';
import { message } from '@tina-ui/ui';
import { computed } from 'vue';
import { UserApi } from '../../../../apis/modules/user';

const fileStore = useFileStore()

defineOptions({
  name: 'ApplyLogItem'
})

const { item, index } = defineProps<{
  item: Contribution.Item,
  index: number
}>()

const imghost = computed(() => fileStore.imgHost)
const statusClass = (status: number) => {
  const clsMap: Record<number,string> = {
    1: 'status-no',
    2: 'status-success',
    3: 'status-error'
  }
  return clsMap[status] || ''
}

const colors = ['cyan','red','blue','green','orange','purplered','purple','brown']
const getColor = () => {
  return colors[random(0,colors.length - 1)]
}

function toTop() {
  const isTop = item.resources.is_top ? 0 : 1
  UserApi.contributionToTop(item.id, isTop).then(res => {
    message.toast((item.resources.is_top ? '取消' : '') + ('置顶成功'))
    item.resources.is_top = isTop
    contributionEmitter.emit('changeItem', { index, item: {...item, resources: {...item.resources, is_top: isTop}} })
  })
}

</script>

<style lang="scss" scoped>
/* 资讯主图 start*/
.image-article {
  border-radius: 8rpx;
  border: 1rpx solid #F8F7F8;
  width: 200rpx;
  height: 200rpx;
  position: relative;
}

.image-pic {
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment:fixed;
  background-position: top;
  border-radius: 10rpx;
}

.article-shadow {
  border-radius: 15rpx;
  box-shadow: 0rpx 0rpx 50rpx 0rpx rgba(0, 0, 0, 0.07);
}

/* 文字截取*/
.clamp-text-1 {
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.clamp-text-2 {
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 标签内容 start*/
.tn-tag-content {
  &__item {
    display: inline-block;
    line-height: 35rpx;
    padding: 5rpx 25rpx;

    &--prefix {
      padding-right: 10rpx;
    }
  }
}

.action-wrapper {
  .action-item {

  }
}

.status-no {
  background-color: $tn-main-orange;
}

.status-success {
  background-color: $tn-color-green;
}

.status-error {
  background-color: $tn-color-red;
}

.status-block {
  position: absolute;
  top: 0;
  right: 0;
  padding: 4upx 16upx;
  font-size: 24upx;
  color: #fff;
  border-radius: 0 0 0 16upx;
}

/* 标签内容 end*/
</style>
