<template>
  <view class="creator-list-item">
    <view class="creator-info">
      <tn-avatar
        shape="circle"
        size="140upx"
        :shadow="true"
        :border="true"
        borderColor="rgba(255, 255, 255, 1)"
        :borderSize="3"
        style="border: 6upx solid #fff;"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F14%2F20190214175912_Ue24j.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666166444&t=7e3204a5924bbe05c9e9669ae409aea0"></tn-avatar>
      <view class="creator-info-content">
        <view class="creator-name">一颗草莓</view>
        <view class="creator-desc">不想做厨师的设计师不是一个好吃货。</view>
      </view>
    </view>
    <view class="creator-images">
      <view class="creator-image-item" v-for="(item, index) in lists" :key="index">
        <image :src="item.url" mode="scaleToFill" />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

defineOptions({
  name: ''
})

const lists = ref([
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F08%2F20171008190604_8Wnrt.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666166579&t=e114b74f41e1263c1c3a1425f17f64bb'
  },
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201606%2F05%2F20160605135105_2RitP.thumb.400_0.png&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666166579&t=3fda18ba4638401fe7b135225691cec1'
  } ,
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F31%2F20200331122332_orzoj.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666166579&t=f5d394e29d0e8f2033dcda4d60952e48'
  } ,
  {
    url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201710%2F08%2F20171008190604_8Wnrt.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666166579&t=e114b74f41e1263c1c3a1425f17f64bb'
  } 
])

</script>

<style lang="scss" scoped>
.creator-list-item {
  box-shadow: 0px 30upx 60upx 0px rgba(19,104,158,0.1), 0px -10px 30px 0px rgba(19,104,158,0.1);
  border-radius: 20upx;
  padding: 30upx;
  .creator-info {
    display: flex;
    flex-wrap: nowrap;
    &-content {
      padding-top: 14upx;
      margin-left: 24upx;
    }
    .creator-name {
      font-size: 34upx;
      font-family: PingFang;
      font-weight: 500;
      color: #666666;
    }
    .creator-desc {
      margin-top: 20upx;
      font-size: 24upx;
      font-family: PingFang;
      font-weight: 500;
      color: #999999;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .creator-images {
    margin-top: 30upx;
    display: flex;
    flex-wrap: nowrap;
    .creator-image-item {
      flex: 1;
      margin-left: 24upx;
      max-width: 25%;
      width: 140upx;
      height: 98upx;
      overflow: hidden;
      border-radius: 12upx;
      image {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
