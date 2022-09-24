<template>
  <CustomerNavBarNormal title="投稿记录"></CustomerNavBarNormal>
  <view class="" :style="{paddingTop: vuex_custom_bar_height + 'px'}">
    <block v-for="(item, index) in content" :key="index">
      <view class="article-shadow tn-margin">
        <view class="tn-flex" style="position: relative;">
          <view class="image-pic tn-margin-sm" :style="'background-image:url(' + item.userAvatar + ')'">
            <view class="image-article">
            </view>
          </view>
          <view class="tn-margin-sm tn-padding-top-xs" style="width: 100%;">
            <view class="tn-text-lg tn-text-bold clamp-text-1">
              {{ item.title }}
            </view>
            <view class="tn-padding-top-xs" style="min-height: 100rpx;">
              <text class=" tn-text-sm tn-color-gray clamp-text-2">
                {{ item.desc }}
              </text>
            </view>
            <view class="tn-flex tn-flex-row-between tn-flex-col-between">
              <view v-for="(label_item,label_index) in item.label" :key="label_index"
                class="justify-content-item tn-tag-content__item tn-margin-right tn-round tn-text-sm tn-text-bold" :class="[`tn-bg-${item.color}--light tn-color-${item.color}`]">
                <text class="tn-tag-content__item--prefix">#</text> {{ label_item }}
              </view>
              <view class="justify-content-item tn-color-gray tn-text-center tn-color-gray--disabled" style="padding-top: 5rpx;">
                共 3 张图
              </view>
            </view>
          </view>
          <view
            :class="['status-block', statusClass(item.status)]"
          >{{ item.statusText }}</view>
        </view>
      </view>
    </block>
  </view>
  <view class="tn-padding-xl"></view>
  <NavIndexButton />
</template>

<script lang="ts" setup>
import CustomerNavBarNormal from '@/components/customer-navbar/normal.vue';
import { useNabbar } from '@/hooks';
import NavIndexButton from '@/components/common/nav-index-button.vue';

defineOptions({
  name: 'CreatorApolyLog'
})

const { vuex_custom_bar_height } = useNabbar()
const content = [{
  userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'red',
  label: ['小程序'],
  title: '全新出发，新版本已上线，欢迎三连',
  desc: '小程序前端源码，免费开源，欢迎白嫖嗷嗷，可以的话，插件市场三连支持一下',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype2.jpg',
  status: 1,
  statusText: '待审',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 567
  },
  collectionCount: 543,
  commentCount: 543,
  likeCount: 206
},
{
  userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/blogger_beibei.jpg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'cyan',
  label: ['模型'],
  title: '3D模型了解一下？',
  desc: '一个拥有大量3D模型的网站',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/prototype1.jpg',
  status: 2,
  statusText: '通过',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 987
  },
  collectionCount: 567,
  commentCount: 69,
  likeCount: 65
},
{
  userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'blue',
  label: ['UI设计'],
  title: '为什么资讯不显示时间',
  desc: '你确定你经常更新文章吗？',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/computer2.jpg',
  status: 3,
  statusText: '未过 ',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 321
  },
  collectionCount: 654,
  commentCount: 232,
  likeCount: 543
},
{
  userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'green',
  label: ['创意'],
  title: '创意一点点',
  desc: '创意灵感从这里开始',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase1.jpg',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 230
  },
  status: 2,
  statusText: '通过',
  collectionCount: 987,
  commentCount: 236,
  likeCount: 342
},
{
  userAvatar: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'orange',
  label: ['UI设计'],
  title: '语雀素材地址资源',
  desc: '图鸟UI素材免费可商用',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/phonecase2.jpg',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 106
  },
  status: 2,
  statusText: '通过',
  collectionCount: 765,
  commentCount: 32,
  likeCount: 91
},
{
  userAvatar: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'purplered',
  label: ['神器'],
  title: '最强的视频转GIF工具',
  desc: '神器推荐',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/watch1.jpg',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 232
  },
  status: 2,
  statusText: '通过',
  collectionCount: 776,
  commentCount: 48,
  likeCount: 86
},
{
  userAvatar: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'purple',
  label: ['粒子'],
  title: '小程序粒子效果',
  desc: '酷炫的小程序粒子效果一览',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/sticker.jpg',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 456
  },
  status: 2,
  statusText: '通过',
  collectionCount: 342,
  commentCount: 42,
  likeCount: 76
},
{
  userAvatar: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
  userName: '可我会像',
  date: '2021年12月20日',
  color: 'brown',
  label: ['工具'],
  title: '小程序任意页面生成二维码',
  desc: '二维码生成器',
  mainImage: 'https://tnuiimage.tnkjapp.com/shop/card.jpg',
  viewUser: {
    latestUserAvatar: [{
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
      },
      {
        src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
      },
    ],
    viewUserCount: 129
  },
  status: 2,
  statusText: '通过',
  collectionCount: 265,
  commentCount: 22,
  likeCount: 62
}
]
const statusClass = (status: number) => {
  const clsMap:Record<number, string> = {
    1: 'status-no',
    2: 'status-success',
    3: 'status-error'
  }
  return clsMap[status] || ''
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
