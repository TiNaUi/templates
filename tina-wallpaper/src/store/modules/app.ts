import { defineStore } from 'pinia'

let lifeData = {}

// 尝试获取本地是否存在lifeData变量，第一次启动时不存在
try {
  lifeData = uni.getStorageSync('lifeData')
} catch(e) {
  
}

// 标记需要永久存储的变量，在每次启动时取出，在state中的变量名
let saveStateKeys = ['vuex_user']

// 保存变量到本地存储
const saveLifeData = function(key: string, value: any) {
  // 判断变量是否在存储数组中
  if (saveStateKeys.indexOf(key) != -1) {
    // 获取本地存储的lifeData对象，将变量添加到对象中
    let tmpLifeData = uni.getStorageSync('lifeData')
    // 第一次启动时不存在，则放一个空对象
    tmpLifeData = tmpLifeData ? tmpLifeData : {},
    tmpLifeData[key] = value
    // 将变量再次放回本地存储中
    uni.setStorageSync('lifeData', tmpLifeData)
  }
}

export interface AppStore {
  // 是否使用自定义导航栏
  vuex_custom_nav_bar: boolean
  // 状态栏高度
  vuex_status_bar_height: number
  // 自定义导航栏的高度
  vuex_custom_bar_height: number
}

export const useAppStore = defineStore('app', {
  state: () => ({
    // 是否使用自定义导航栏
    vuex_custom_nav_bar: true,
    // 状态栏高度
    vuex_status_bar_height: 0,
    // 自定义导航栏的高度
    vuex_custom_bar_height: 0
  }),
  actions: {
    updateStore(payload: any) {
      // 判断是否多层调用，state中为对象存在的情况，例如user.info.score = 1
      let nameArr: string[] = payload.name.split('.')
      let saveKey = ''
      let len = nameArr.length
      if (len >= 2) {
        let obj = (this as any)[nameArr[0]] as any
        for (let i= 1; i < len - 1; i++) {
          obj = obj[nameArr[i]]
        }
        obj[nameArr[len - 1]] = payload.value
        saveKey = nameArr[0]
      } else {
        // 单层级变量
        (this as any)[payload.name] = payload.value
        saveKey = payload.name
      }
      
      // 保存变量到本地中
      saveLifeData(saveKey, (this as any)[saveKey])
    }
  }
})