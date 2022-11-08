<template>
  <view class="page-container">
    <view class="iphone-container">
      <view class="iphone-header">
        <view class="iphone-date">9月20日周二·壬寅年八月二十五</view>
        <view class="iphone-time">10:02</view>
      </view>
      <view class="iphone-footer" v-show="!navBarState">上滑屏幕以解锁</view>
      <tn-swiper
        :list="list"
        indicatorPosition="bottomRight"
        :effect3d="false"
        :current="currentIndex"
        mode="none"
        :radius="0"
        :autoplay="false"
        :height="windowHeight"
        class="page-swiper"
        @change="swiperChange"
        @click="changeNavbarState"
        style="height:100vh;width:100vw;"
        ref="swiper"
      ></tn-swiper>
    </view>
    <scroll-view
    v-if="list.length > 1"
    :scroll-x="true"
    :scroll-with-animation="true"
    :scroll-left="scrollLeft"
    class="swiper-indicator"
    :class="[ navBarState ? 'active' : 'hidden']">
      <view class="swiper-indicator-container" :style="{ width: swiperWidth + 'px' }">
        <view class="swiper-indicator-item" :class="{ active: index === currentIndex }" v-for="(image, index) in list" :key="index" @click="itemClick(index)">
          <image :src="image.image" mode="aspectFill" />
        </view>
      </view>
    </scroll-view>
    <view class="action-bar" :class="[ navBarState ? 'openCss' : 'closeCss']">
      <view class="action-bar-item" @click="back()">
        <view class="action-bar-icon icon-back"></view>
        <view class="action-bar-text">返回</view>
      </view>
      <view class="action-bar-item" @click="doCollect()">
        <view class="action-bar-icon" :class="[info?.isCollection ? 'icon-collection-active' : 'icon-collection']"></view>
        <view class="action-bar-text">{{ info?.isCollection ? '已' : '' }}收藏</view>
      </view>
      <view class="action-bar-item" @click="saveImageToLocal()">
        <view class="action-bar-icon icon-download"></view>
        <view class="action-bar-text">下载</view>
      </view>
      <view class="action-bar-item" @click="doLike()">
        <view class="action-bar-icon" :class="[info?.isLike ? 'icon-zan-active' : 'icon-zan']"></view>
        <view class="action-bar-text">{{ info?.isLike ? '已' : '' }}点赞</view>
      </view>
      <view class="action-bar-item">
        <view class="action-bar-icon icon-share"></view>
        <view class="action-bar-text">分享</view>
      </view>
      <view class="action-bar-item">
        <image :src="creatorInfo ? creatorInfo.user.profile.avatar : useImagePath('/logo.jpg')" mode="aspectFill" />
      </view>
    </view>
    <view class="likes-people" :class="[ navBarState ? 'openCss' : 'closeCss']">
      <view class="tn-margin-sm tn-flex tn-flex-center" style="align-items: center;">
        <tn-avatar-group :lists="groupList"></tn-avatar-group>
        <view class="like-text">等{{ random(12, 1000) }}人喜欢了这张图</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, computed, getCurrentInstance, onMounted, watch, nextTick } from 'vue';
import { useGetCompnentRectByInstance } from '@tina-ui/ui/hooks/ComponentRect'
import { onLoad } from '@dcloudio/uni-app';
import { ContentApi, Resource, User, UserApi } from '@/apis';
import { wallpaperListHandler, random } from '@/utils'
import { useUserStore } from '@/store';
import { message } from '@tina-ui/ui';
import { useImagePath } from '@/hooks'

 // #ifdef H5
import { h5DownLoadImage } from '@/utils/file';
// #endif

defineOptions({
  name: 'PictureDetail'
})
const instance = getCurrentInstance()
const { windowHeight } = uni.getSystemInfoSync()
const userStore = useUserStore()

const list = ref<Array<{ image: string }>>([
  // { image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp231769778.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666232798&t=a76ffafbc1c51c717aacc215f29f5fe1' },
  // { image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F31%2F20200331122332_orzoj.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666232798&t=af64a3e60aa227febd3a418f0ee51855' },
  // { image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201803%2F09%2F20180309133928_MFX3c.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666232798&t=99fcd1eb2e743de7220480901f4828ec' },
  // { image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.doubanio.com%2Fview%2Frichtext%2Flarge%2Fpublic%2Fp231769778.jpg&refer=http%3A%2F%2Fimg1.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666232798&t=a76ffafbc1c51c717aacc215f29f5fe1' },
  // { image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F31%2F20200331122332_orzoj.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666232798&t=af64a3e60aa227febd3a418f0ee51855' },
])
const info = ref<Resource.Item>()

const isLogin = computed(() => userStore.isLogin)
const userInfo = computed(() => userStore.userInfo)

const loginModel = ref<null | any>(null)
function loginAct() {
  if (loginModel) {
    loginModel.value.show()
  }
}

const creatorInfo = ref<User.Creator>()
function getCreatorInfo(cid: number) {
  UserApi.creatorInfo(cid).then(res => {
    if (res.data.success) {
      creatorInfo.value = res.data.data
    }
  })
}

function doLike() {
  if (!isLogin.value) return loginAct()
  if (info.value && userInfo.value) {
    ContentApi.like({ rid: info.value.id,userId: userInfo.value.id }).then(res => {
      if (res.data.success) {

      } else {
        message.toast(res.data.message)
      }
    })
  }
}

function doCollect() {
  if (!isLogin.value) return loginAct()
  if (info.value && userInfo.value) {
    ContentApi.collection({ rid: info.value.id,userId: userInfo.value.id }).then(res => {
      if (res.data.success) {

      } else {
        message.toast(res.data.message)
      }
    })
  }
}

const swiper = ref()

onLoad((res) => {
  const rid = +(res.rid || 0)
  const uid = +(res.uid || 0)
  const index = +(res.index || 0)
  getCreatorInfo(uid)
  ContentApi.wallpaperInfo({ rid: rid, userId: userInfo.value!.id }).then(res => {
    if (res.data.success) {
      info.value = res.data.data
      const infoList = wallpaperListHandler([res.data.data], { w: 375, q: 100 })
      list.value = infoList.map(item => {
        return {
          image: item.url
        }
      })
      getScrollWidth()
    }
  })
})

const swiperWidth = computed(() => {
  return uni.upx2px(list.value.length * 150 + 10)
})
const currentIndex = ref(0)
const swiperChange = (index: number) => {
  currentIndex.value = index
  console.log('=======', index)
}
const navBarState = ref(true)
const contentScrollW = ref(0)
const scrollLeft = ref(0)
const allArr = ref<Array<{ left: number; width: number; }>>([])
const getScrollWidth = () => {
  nextTick(() => {
    useGetCompnentRectByInstance('.swiper-indicator',false,instance!).then(res => {
      if (res) {
        contentScrollW.value = res.width || 0
      }
    })

    // useGetCompnentRectByInstance('.swiper-indicator-item', true, instance!).then(rect => {
    //   if(rect) {
    //     const data = rect as unknown as UniApp.NodeInfo[]
    //     for (let i = 0; i < data.length; i++) {
    //       allArr.value[i] = {left: 0, width: 0}
    //       allArr.value[i].left = data[i].left!
    //       allArr.value[i].width = 64
    //     }
    //     console.log(allArr)
    //   }
    // })
    for (let i = 0; i < list.value.length; i++) {
      allArr.value[i] = { left: 0,width: 0 }
      allArr.value[i].left = uni.upx2px((10 + 140 * 0.9 + 10)) * i
      allArr.value[i].width = 64
    }
    console.log(allArr)
  })
}
const itemClick = (index: number) => {
  currentIndex.value = index
}
const changeNavbarState = () => {
  navBarState.value = !navBarState.value
}

onMounted(() => {
  getScrollWidth()
})

watch(currentIndex, (index) => {
  console.log(1)
  // 当前点击子元素距离左边栏的距离 - scroll-view 宽度的一半  + 当前点击子元素一半的宽度 实现居中展示
  scrollLeft.value = index === 0 ? 0 : index === list.value.length ? swiperWidth.value : allArr.value[index].left - contentScrollW.value / 2 + allArr.value[index].width / 2
})

const groupList = ref([
  {src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F09%2F20210709142454_dc8dc.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664616146&t=2e0a07d8c53874e78beb135e5dc93389'},
  {src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202012%2F05%2F20201205222744_c0b59.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664616146&t=b98d61d78e321e1c8934d5ef0718465d'},
  {text: 'TN'},
  {icon: 'logo-tina'},
  {src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F02%2F20200502185802_FuFU2.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664616146&t=4e346679c6159914d373447ca5ef4605'},
  {src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202010%2F23%2F20201023204811_87c9c.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664616146&t=18a17e1a9593da931f0eedb47ecbf329'}
])

function back() {
  uni.navigateBack({})
}

function logDownload() {
  ContentApi.download({
    userId: userInfo.value!.id,
    rid: info.value!.id
  }).then(() => {
    message.toast('下载成功')
  })
}

function saveImageToLocal() {
  if (!isLogin.value) return loginAct()
  const imageUrl = list.value[currentIndex.value]
  // #ifndef H5
  uni.downloadFile({
    url: imageUrl.image,
    success(result) {
        const tempUrl = result.tempFilePath
        uni.saveImageToPhotosAlbum({
          filePath: tempUrl,
          success() {
            logDownload()
          },
          fail() {}
        })
    },
  })
  // #endif
  // #ifdef H5
  h5DownLoadImage(imageUrl.image)
  logDownload()
  // #endif

}

</script>

<style lang="scss" scoped>
.iphone {
  &-container {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }
  &-header {
    position: absolute;
    width: 100%;
    top: 12vh;
    text-align: center;
    color: #fff;
    z-index: 1;
  }
  &-date {
    width: 100%;
    font-size: 36upx;
  }
  &-time {
    margin-top: 30upx;
    font-size: 160upx;
    font-weight: bold;
  }
  &-footer {
    position: absolute;
    bottom: 3vh;
    width: 100%;
    color: #fff;
    text-align: center;
    z-index: 1;
  }
}
.action-bar {
  position: fixed;
  left: 4%;
  right: 0;
  width: 92%;
  height: 52px;
  box-shadow: 0 0 8px rgba(0,0,0,.06);
  background: rgba(0,0,0,.94);
  border-radius: 49px;
  z-index: 10;
  opacity: .8;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  &-item {
    flex: 1;
    color: #fff;
    height: 52px;
    font-size: 12px;
    color: #d8d8d8;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-icon {
    width: 48upx;
    height: 48upx;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .icon-back {
    background-image: url('#{$tnt-img-host}/picture/back.png');
  }
  .icon-collection {
    background-image: url('#{$tnt-img-host}/picture/coll.png');
  }
  .icon-collection-active {
    background-image: url('#{$tnt-img-host}/picture/coll_art.png');
  }
  .icon-download {
    background-image: url('#{$tnt-img-host}/picture/duihuan.png');
  }
  .icon-share {
    background-image: url('#{$tnt-img-host}/picture/shares.png');
  }
  .icon-zan {
    background-image: url('#{$tnt-img-host}/picture/zan.png');
  }
  .icon-zan-active {
    background-image: url('#{$tnt-img-host}/picture/zan-active.png');
  }
}
.openCss {
  animation-name: openLinear;
  animation-duration: .8s;
  animation-iteration-count: 1;
  bottom: 10%;
}

@keyframes openLinear {
  0% {
    transform: translateY(92px);
  }

  100% {
    transform: translateY(0);
  }
}

.closeCss {
  animation-name: closeLinear;
  animation-duration: .8s;
  animation-iteration-count: 1;
  bottom: -52px;
}

@keyframes closeLinear {
  0% {
    transform: translateY(-92px);
  }

  100% {
    transform: translateY(0);
  }
}
.page-swiper {
  height: 100vh !important;
  ::v-deep {
    .tn-swiper {
      height: 100vh !important;
    }
  }
}
.swiper-indicator {
  position: absolute;
  bottom: 20vh;
  left: 50%;
  width: 375upx;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10upx;
  border-radius: 16upx 0 0 16upx;
  &-item {
    display: inline-block;
    width: 140upx;
    height: 140upx;
    overflow: hidden;
    margin-right: 10upx;
    border-radius: 16upx;
    transform: scale(0.9);
    transition: all 0.3s linear;
    image {
      width: 100%;
      height: 100%;
    }
    &.active {
      transform: scale(1);
      border: 2px solid $tn-main-color;
    }
  }
  &.active {
    animation-name: showIndector;
    animation-duration: .8s;
    animation-iteration-count: 1;
    opacity: 1;
  }
  &.hidden {
    animation-name: hiddenIndector;
    animation-duration: .8s;
    animation-iteration-count: 1;
    opacity: 0;
  }
}

@keyframes hiddenIndector {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes showIndector {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.likes-people {
  position: fixed;
  left: 4%;
  right: 0;
  width: 92%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &.openCss {
    bottom: 20upx;
  }
}
</style>
