<script setup lang="ts">
import { onLaunch, onShow, onHide, onLoad } from '@dcloudio/uni-app';
import updateCustomBarInfo from '@tina-ui/ui/libs/function/updateCustomBarInfo'
import { useAppStore, useCategoryStore, useTagsStore, useUserStore } from '@/store'
import { shareUserIdField } from './config'

const appStore = useAppStore()
const tagStore = useTagsStore()
const cateStore = useCategoryStore()
const userStore = useUserStore()

onLoad((res) => {
  if (res && Object.prototype.hasOwnProperty.call(res, shareUserIdField)) {
    userStore.setShareUserId(res[shareUserIdField] as string)
  }
  // 获取设备的状态栏信息和自定义顶栏信息
  updateCustomBarInfo().then((res) => {
    console.log('系统信息', res)
    appStore.updateStore({
      name: 'vuex_status_bar_height',
      value: res.statusBarHeight
    })
    appStore.updateStore({
      name: 'vuex_custom_bar_height',
      value: res.customBarHeight
    })
  }).catch(e => {
    console.error(e)
  })
})

onLaunch(() => {
  console.log('App Launch')
  // 获取设备的状态栏信息和自定义顶栏信息
  updateCustomBarInfo().then((res) => {
    console.log('系统信息', res)
    appStore.updateStore({
      name: 'vuex_status_bar_height',
      value: res.statusBarHeight
    })
    appStore.updateStore({
      name: 'vuex_custom_bar_height',
      value: res.customBarHeight
    })
  }).catch(e => {
    console.error(e)
  })

  tagStore.updateTagList()
  cateStore.updateTagList()

  // #ifdef MP-WEIXIN
  //更新检测
  if (wx.canIUse('getUpdateManager')) {
    const updateManager = wx.getUpdateManager();
    updateManager && updateManager.onCheckForUpdate((res) => {
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          uni.showModal({
            title: '更新提示',
            content: '新版本已经准备就绪，是否需要重新启动应用？',
            success: (res) => {
              if (res.confirm) {
                uni.clearStorageSync() // 更新完成后刷新storage的数据
                updateManager.applyUpdate()
              }
            }
          })
        })
  
        updateManager.onUpdateFailed(() => {
          uni.showModal({
            title: '已有新版本上线',
            content: '小程序自动更新失败，请删除该小程序后重新搜索打开哟~~~',
            showCancel: false
          })
        })
      } else {
        //没有更新
      }
    })
  } else {
    uni.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请更新到最新的微信后再重试。',
      showCancel: false
    })
  }
  // #endif
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import '@tina-ui/ui/iconfont.css';
@import '@tina-ui/ui/index.scss';

.jiangqie-column-header,.jiangqie-recom-header,.jiangqie-tags-header {
    clear: both;
    color: #000;
    font-size: 36rpx;
    font-weight: 600;
    margin: 10rpx 30rpx;
}

.jiangqie-column-header {
    margin: 30rpx;
}
.jiangqie-column-header .navigator,.jiangqie-recom-header .navigator,.jiangqie-tags-header .navigator {
    color: #333;
    float: right;
    font-size: 24rpx;
    font-weight: 400;
    margin-top: 8rpx;
}
</style>