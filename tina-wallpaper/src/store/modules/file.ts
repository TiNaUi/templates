import { defineStore } from 'pinia';
import { CommonApi, ContentApi, Tag } from '@/apis';

/**
 * 用户信息
 */
export const useFileStore = defineStore('file', {
  state() {
    return {
      token: null as null | string,
      imgHost: 'http://img.zukmb.cn',
      uploadUrl: 'https://up-z2.qiniup.com',
      uploadPath: {
        wallpaper: 'resource/wallpaper/'
      }
    }
  },
  actions: {
    updateToken() {
      CommonApi.qiniuToken().then(res => {
        if (res.data.success) {
          this.token = res.data.data
        }
      })
    }
  },
  persist: {
    enabled: true
  }
})