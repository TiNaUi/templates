<template>
<view class="center-container" :style="'margin-top:'+customerNavBarHeight + 'px;color: #999;'">
  <CustomerNavBarCapsule />
  <image class="bimg" mode="widthFix" :src="imageStore.bg"></image>
  <view class="page">
    <view class="index " style="padding-top: {{menuInfo.top+menuInfo.height}}px">
      <view class="userInfoCon flex ac jb pad">
        <view class="userInfo flex ac ">
          <image class="userImg" mode="aspectFill" :src="userInfo?.profile.avatar"></image>
          <view class="userCon flex fc jc">
            <view class="userName txt">{{ userInfo?.profile.nickname }}</view>
          </view>
        </view>
        <view class="show-list flex ac jc" v-if="dateShow && !empty">
          <view @click="dateShowChange" :class="['image-item', 'flex', 'jc', 'ac', isDateShow?'':'active']">
            <image mode="widthFix" :src="isDateShow ? imageStore.iconList : imageStore.iconListDefault "></image>
            <text class="show-list-txt">默认排序</text>
          </view>
          <view @click="dateShowChange" :class="['image-item', 'flex', 'jc', 'ac', isDateShow?'active':'']">
            <image mode="widthFix" :src="isDateShow ? imageStore.dateIconDefault : imageStore.dateIcon">
            </image>
            <text class="show-list-txt">日期排序</text>
          </view>
        </view>
      </view>
      <view class="signature">所有作品均在下方，请仔细查找，超清无水印原图下载为原画超清，感谢支持!</view>
      <view class="tab">
        <view class="parameterList flex ac">
          <view class="list-item flex ac jc">
            <view @click="parameterListChange(0)"
              :class="['parameterListItem', parameterListIndex==0?'parameterListItems':'']" data-index="0"> 作品({{ totalPhoto
              }})</view>
            <view @click="parameterListChange(1)"
              :class="['parameterListItem', parameterListIndex==1?'parameterListItems':'']" data-index="1"> 专辑({{ totalAlbum
              }})</view>
          </view>
          <view style="flex:1;"></view>
          <view class="userInfoBtnCon flex ac ">
            <button class="shareBtn flex ac jc" openType="share">
              <image class="shareIco" mode="widthFix"
                src="https://img.yugew.com/image/dbc7742e2dec1e824053fbd9515fa6b0.png"></image>
            </button>
            <image bindtap="announce" class="tip" mode="widthFix"
              src="https://img.yugew.com/image/855942d49bf7f98c1fbd9fda1c59c8e1.png"></image>
          </view>
        </view>

        <view class="resource-list container">
          <view class="resource-list-item">
            <view bindtap="goDetail" class="goodItem" data-action="3" data-id="{{item.id}}" data-type="{{item.file_type}}"
              v-for="(item, index) in itemlist" :key="item.id">
              <view class="goodItem-view">
                <image class="goodImg goodType{{item.classify_id}}" :data-index="index" mode="aspectFill" :src="imgHost + '/' + item.resources.thumb_url"></image>
                <image class="videoIco" mode="widthFix" src="https://img.yugew.com/image/2a5fd032afabaaecb44a1317fb4a4016.png"
                  v-if="item.resources.type=='video'"></image>
                <image class="voiceIco" mode="widthFix" src="https://img.yugew.com/image/9d6d3d251129374e96fcc3b6240e8f14.png"
                  v-if="item.resources.type=='voice'"></image>
                <view class="imgTop" v-if="item.resources.is_top">置顶</view>
              </view>
              <view class="image-loading-view" style="position: absolute;top:0;width:100%;height: 100%;">
                <Loading :show="true" zIndex="0" :fixed="false"></Loading>
              </view>
            </view>
          </view>
        </view>
        <view class="error-view" wx:if="{{albumList.length==0&&empty}}">
          <!-- <image class="errorImg" mode="widthFix" src="/image/icon_empty.png"></image> -->
        </view>
      </view>
    </view>
  </view>
</view>
</template>

<script lang="ts" setup>
import { useAppStore, useFileStore } from '@/store';
import { computed, onMounted, ref } from 'vue';
import CustomerNavBarCapsule from '@/components/customer-navbar/capsule.vue'
import { useUserStore } from '../../store/modules/user';
import { Contribution, UserApi } from '@/apis';
import Loading from '@/components/loading/index.vue'

defineOptions({
  name: 'CreatorCenter'
})
const appStore = useAppStore()
const fileStore = useFileStore()
const userStore = useUserStore()

const imgHost = computed(() => fileStore.imgHost)
const customerNavBarHeight = computed(() => appStore.vuex_custom_bar_height)
const userInfo = computed(() => userStore.userInfo)

const imageStore = computed(() => ({
  // http://img.zukmb.cn/icons/creator/big_icon.png
  bg: imgHost.value + '/icons/creator/whole_bg.jpg',
  iconListDefault: imgHost.value + '/icons/creator/icon_list_default.png',
  iconList: imgHost.value + '/icons/creator/icon_list.png',
  dateIconDefault: imgHost.value + '/icons/creator/icon_date_list_default.png',
  dateIcon: imgHost.value + '/icons/creator/icon_date_list.png',
}))

const totalPhoto = ref(0)
const totalAlbum = ref(0)

const parameterListIndex = ref(0)
function parameterListChange(index: number) {
  parameterListIndex.value = index
}

const dateShow = ref(true)
const isDateShow = ref(false)

function dateShowChange() {
  isDateShow.value = !isDateShow.value
}

const itemlist = ref<Contribution.Item[]>([])
const empty = ref(false)

function getContributeList() {
  const params = {
    user_id: userInfo.value?.id!,
    pageNum: 1,
    pageSize: 10
  }

  UserApi.contributionList(params).then(res => {
    console.log(res)
    itemlist.value.push(...res.data.data.rows)
  })
}

onMounted(() => {
  getContributeList()
})

</script>

<style lang="scss" scoped>
.page,
page {
  background: #0f0f0f;
}

.bimg,
.page,
page {
  height: 100%;
  width: 100%;
}

.bimg {
  left: 0;
  position: fixed;
  top: 0;
  z-index: 0;
}

image {
  display: block;
}

.index {
  height: max-content;
  position: relative;
  width: 750rpx;
}

.userInfoCon {
  margin: 32rpx 18rpx 0;
  width: calc(100% - 36rpx);
}

.userInfo {
  width: 460rpx;
}

.userImg {
  border: 4rpx solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  height: 100rpx;
  padding: 2rpx;
  width: 100rpx;
}

.userCon {
  width: 200rpx;
}

.userName {
  color: #fff;
  font-size: 32rpx;
  font-weight: 700;
  margin-left: 20rpx;
  width: 100%;
}

.userId {
  color: #000;
  font-size: 24rpx;
  height: 24rpx;
  line-height: 24rpx;
  margin-top: 14rpx;
  width: 100%;
}

.signature {
  color: #ccc;
  font-size: 24rpx;
  margin: 16rpx 32rpx 0;
  text-align: justify;
  width: calc(100% - 64rpx);
}

.tip {
  height: 38rpx;
  margin-left: 48rpx;
  transform: translateY(-4rpx);
  width: 100rpx;
}

.shareIco {
  height: 40rpx;
  width: 38rpx;
}

.shareBtn {
  background-color: initial;
  flex-shrink: 0;
  height: max-content;
  margin: 0;
  padding: 0;
  width: 38rpx;

  &::after {
    background-color: none;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 0;
    content: "";
    display: none;
    padding: 0;
    transform: scale(0);
    height: 100%;
    width: 100%;
  }
}

.tab {
  height: 100%;
  width: 100%;
}

.parameterList {
  border-bottom: 2rpx solid hsla(0, 0%, 94%, 0.11);
  height: 94rpx;
  margin: 20rpx 0 0;
  padding: 0 36rpx;
  width: 100%;

  .list-item {
    background: #000;
    border-radius: 32rpx;
    width: 400rpx;
  }
}

.show-list {
  background: #000;
  border-radius: 32rpx;
  height: 60rpx;
  width: 340rpx;

  .image-item {
    border-radius: 100rpx;
    height: 52rpx;
    width: 170rpx;

    &.active {
      background-color: #fadd9b;
    }
  }

  image {
    height: 32rpx;
    width: 32rpx;
  }

  .show-list-txt {
    color: #fff;
    font-size: 24rpx;
    padding-left: 8rpx;
  }

  .image-item.active .show-list-txt {
    color: #333;
    font-size: 24rpx;
    padding-left: 8rpx;
  }
}

.parameterListItem {
  color: #fff;
  flex-shrink: 0;
  font-size: 28rpx;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  width: 200rpx;
}

.parameterListItems {
  background-color: #fadd9b;
  border-radius: 32rpx;
  color: #333;
  position: relative;
}

.tabListCon {
  height: 80rpx;
  padding: 0 20rpx;
  width: 100%;
}

.navbar {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 70rpx;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
}

.nav-item {
  color: #aaaaad;
  display: inline-block;
  font-size: 28rpx;
  height: 70rpx;
  line-height: 70rpx;
  padding-left: 20rpx;
  padding-right: 20rpx;
}

.scrollX {
  height: 70rpx;
  width: 100%;
}

.tabList {
  height: 70rpx;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.tabListItem {
  align-items: center;
  display: flex;
  color: #aaaaad;
  font-size: 28rpx;
  height: 100%;
}

.tabListItems {
  color: #fff;
  font-weight: 700;
  position: relative;

  &::after {
    background: #5938ff;
    border-radius: 2rpx;
    bottom: 6rpx;
    content: "";
    display: block;
    height: 4rpx;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 40rpx;
  }
}

.albumList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30rpx;
  padding: 0 24rpx;
  width: 100%;
}

.albumListCon {
  height: max-content;
  width: 228rpx;
}

.albumItem {
  background-color: #333;
  box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);
  margin-bottom: 20rpx;
}

.albumCon,
.albumItem {
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.albumCon {
  height: max-content;
  z-index: 1;
}

.albumTit {
  background: rgba(0, 0, 0, 0.46);
  bottom: 0;
  color: #fff;
  font-size: 28rpx;
  font-weight: 700;
  height: 50rpx;
  left: 0;
  line-height: 50rpx;
  padding: 0 18rpx;
  position: absolute;
  width: 100%;
}

.albumImg {
  height: 100%;
  max-height: 400rpx;
  min-height: 160rpx;
  width: 100%;
}

.goodList {
  display: flex;
  margin-left: 16rpx;
  margin-right: 16rpx;
  margin-top: 30rpx;
  width: 718rpx;
}

.resource-list-item {
  width: 32%;
}

.resource-list .resource-list-item:nth-child(3n-1) {
  margin: 0 2%;
}

.goodItem-view {
  border: 2rpx solid #fff;
  border-radius: 16rpx;
  height: 100%;
  max-height: 400rpx;
  z-index: 1;
}

.goodItem,
.goodItem-view {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.goodItem {
  background-color: #333;
  border-radius: 16rpx;
  margin-bottom: 16rpx;
}

.goodType1,
.goodType5 {
  height: 360rpx;
  width: 230rpx;
}

.goodType0,
.goodType2,
.goodType3,
.goodType4,
.goodType6 {
  height: 230rpx;
  width: 230rpx;
}

.videoIco {
  height: 76rpx;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 76rpx;
}

.voiceIco {
  bottom: 16rpx;
  height: 40rpx;
  width: 40rpx;
}

.imgTop,
.voiceIco {
  left: 16rpx;
  position: absolute;
}

.imgTop {
  background: #4739f4;
  border-radius: 8rpx;
  color: #fff;
  font-size: 22rpx;
  height: 36rpx;
  line-height: 36rpx;
  text-align: center;
  top: 16rpx;
  width: 68rpx;
}

.atabListCon {
  height: 120rpx;
  margin: 30rpx 0;
  padding: 0 20rpx;
  width: 100%;
}

.aleftIco {
  margin-right: 10rpx;
  width: 50rpx;
  flex-shrink: 0;
  height: 120rpx;
}

.ascrollX {
  flex-shrink: 0;
  height: 120rpx;
  overflow: hidden;
  width: calc(100% - 60rpx);
}

.atabList {
  align-items: center;
  display: flex;
  height: 120rpx;
  width: max-content;
}

.atabListItem {
  flex-shrink: 0;
  margin-right: 16rpx;
  overflow: hidden;
  position: relative;
  border-radius: 16rpx;
  height: 120rpx;
  width: 120rpx;
}

.atabListItemImg {
  border-radius: 16rpx;
  height: 120rpx;
  width: 120rpx;
}

.atabListItems::after {
  background: rgba(216, 38, 38, 0.46);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.atabListItemTit {
  background: rgba(0, 0, 0, 0.46);
  bottom: 0;
  color: #fff;
  font-size: 20rpx;
  height: 40rpx;
  left: 0;
  line-height: 40rpx;
  padding: 0;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 2;
}

.goodListDate {
  margin: 0 0 0 20rpx;
  position: relative;
  width: calc(100% - 20rpx);
}

.dategoodList-item {
  padding: 0 16rpx;
  width: 100%;
}

.goodListDate {
  .time {
    color: #000;
    font-size: 30rpx;
    height: 40rpx;
    line-height: 40rpx;
    margin: 20rpx 0 20rpx -16rpx;
    position: relative;
    width: 100%;
  }

  .bar {
    background: #4739f4;
    height: calc(100% - 54rpx);
    left: 0;
    position: absolute;
    top: 34rpx;
    width: 1px;
  }

  .timeIco {
    background-color: #fafafa;
    border: 2rpx solid #4739f4;
    border-radius: 50%;
    height: 20rpx;
    left: -10rpx;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20rpx;
  }

  .timeIcoSon {
    background: #4739f4;
    border-radius: 50%;
    box-sizing: initial;
    height: 6rpx;
    width: 6rpx;
  }
}

.dategoodItem {
  background-color: #333;
  border-radius: 16rpx;
  display: inline-flex;
  margin-bottom: 32rpx;
  max-height: 400rpx;
  overflow: hidden;
  position: relative;
  width: 32%;
}

.goodListDate .dategoodItem:nth-child(3n-1) {
  margin: 0 12rpx;
}

.dategoodItem-view {
  border: 2rpx solid #fff;
  border-radius: 16rpx;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.isDateShowImg {
  bottom: 100rpx;
  height: 96rpx;
  position: fixed;
  right: 44rpx;
  width: 96rpx;
  z-index: 99;
}

.error-view {
  margin-top: 100rpx;
}

.date-txt {
  color: #fff;
  font-size: 32rpx;
  margin-left: 16rpx;
  padding-left: 16rpx;
}
</style>
