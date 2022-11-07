<template>
  <view class="search-container">
    <CustomerNavBarCapsule />
    <image class="bimg" mode="aspectFill" :src="imageStore.bg"></image>
    <image class="banner" mode="widthFix" :src="imageStore.bigIcon"></image>
    <view class="search flex ac">
      <image class="searchIco" mode="widthFix" :src="imageStore.search"></image>
      <input @confirm="goSearch" v-model="searchValue" class="searchValue" confirmType="search" placeholder="请输入星荐官口令"
        placeholderStyle="color:#000000;font-size:18px;" type="text" />
      <view bindtap="goSearch" class="submit">对口令</view>
    </view>
    <view class="flex jc">
      <image class="author-tip-img" mode="widthFix" :src="imageStore.title">
      </image>
    </view>
    <!-- <scroll-view scrollX class="scrollX">
        <view class="framerList flex ac">
          <view bindtap="goisfp" class="framer-item flex fc" data-index="{{index}}" v-for="(item, index) in indexAuthorList" :key="index">
            <image class="itemImg" mode="aspectFill" src="{{item.avatar}}"></image>
          </view>
        </view>
      </scroll-view> -->
    <!-- <ad adTheme="black" adType="video" unitId="adunit-9fe411dedbdb637a"></ad> -->
    <!-- <view class="recommend">
        <view bindtap="goPage" class="list-item" data-id="{{item.photo_id}}" wx:for="{{recommendList}}" wx:key="key">
          <image lazyLoad="{{true}}" mode="aspectFill" src="{{item.url}}"></image>
          <view class="image-loading-view" style="position: absolute;top:0;width:100%;height: 100%;">
            <imgloading show="{{true}}" zIndex="0"></imgloading>
          </view>
        </view>
      </view> -->
  </view>
</template>

<script lang="ts" setup>
import { useFileStore } from '@/store';
import { computed, ref } from 'vue';
import CustomerNavBarCapsule from '@/components/customer-navbar/capsule.vue'

defineOptions({
  name: 'CreatorSearch'
})

const fileStore = useFileStore()
const imgHost = computed(() => fileStore.imgHost)

const imageStore = computed(() => ({
  // http://img.zukmb.cn/icons/creator/big_icon.png
  bg: imgHost.value + '/icons/creator/whole_bg.jpg',
  title: imgHost.value + '/icons/creator/creator_title.png',
  search: imgHost.value + '/icons/creator/icon_search.png',
  bigIcon: imgHost.value + '/icons/creator/big_icon.png',
}))

const searchValue = ref('')
const indexAuthorList = ref([
  {
    
  }
])

const goSearch = () => {}

</script>

<style lang="scss" scoped>
.search-container {
  background: #000;
  height: 100%;
  width: 100%;
}
.bimg {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 0;
}

.banner {
  height: 378upx;
  margin: 190upx 30upx 0;
  position: relative;
  width: calc(100% - 60upx);
}

.search {
  position: relative;
  width: calc(100% - 60upx);
  background: #fadd9b;
  border: 4upx solid #fadd9b;
  border-radius: 30upx;
  height: 120upx;
  margin: 52upx 30upx 0;
  overflow: hidden;
}

.searchIco {
  height: 32upx;
  margin: 0 30upx;
  width: 32upx;
}

.searchValue {
  color: #000;
  flex: 1;
  font-size: 36upx;
  height: 100%;
  line-height: 120upx;
}

.submit {
  background-color: #000;
  border-radius: 50upx;
  color: #fadd9b;
  font-size: 30upx;
  font-weight: 700;
  height: 88upx;
  line-height: 88upx;
  margin-right: 16upx;
  text-align: center;
  width: 160upx;
}

.author-tip-img {
  height: 38upx;
  margin-top: 80upx;
  width: 424upx;
  z-index: 2;
}

.scrollX {
  margin: 46upx 16upx;
  width: calc(100% - 32upx);
}

.framerList {
  height: 100%;
  width: 100%;
}

.framer-item {
  flex-shrink: 0;
  height: 100%;
  width: 20%;
}

.itemImg {
  border: 6upx solid #f5f5f5;
  border-radius: 50%;
  display: block;
  height: 120upx;
  margin: auto;
  width: 120upx;
}

.recommend {
  margin: 100upx 16upx 0;
  width: calc(100% - 32upx);

  .list-item {
    display: inline-flex;
    margin-bottom: 32upx;
    position: relative;
    width: 32%;

    &:nth-child(3n-1) {
      margin: 0 2%;
    }

    image {
      border: 2upx solid #fff;
      border-radius: 16upx;
      height: 360upx;
      position: relative;
      width: 100%;
      z-index: 1;
    }
  }
}
</style>
