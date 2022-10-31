<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import updateCustomBarInfo from '@tina-ui/ui/libs/function/updateCustomBarInfo'
import { useAppStore, useTagsStore } from '@/store'

const appStore = useAppStore()
const tagStore = useTagsStore()

onLaunch(() => {
  console.log('App Launch')
  // 获取设备的状态栏信息和自定义顶栏信息
  updateCustomBarInfo().then((res) => {
    appStore.updateStore({
      name: 'vuex_status_bar_height',
      value: res.statusBarHeight
    })
    appStore.updateStore({
      name: 'vuex_custom_bar_height',
      value: res.customBarHeight
    })
  })

  tagStore.updateTagList()

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
</style>