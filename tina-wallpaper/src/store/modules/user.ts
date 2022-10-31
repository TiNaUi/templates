import { UserModel } from '@/types';
import { defineStore } from 'pinia';
import { UserApi } from '@/apis';

/**
 * 用户信息
 */
export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: null as UserModel | null,
      isLogin: false
    }
  },
  actions: {
    setUserInfo(userInfo: UserModel) {
      this.userInfo = userInfo
      this.isLogin = true
    },
    updateUserInfo() {
      if (!this.userInfo) return
      UserApi.info(this.userInfo.id).then(res => {
        if (res.data.success) {
          this.setUserInfo(res.data.data)
        }
      })
    }
  },
  persist: {
    enabled: true
  }
})