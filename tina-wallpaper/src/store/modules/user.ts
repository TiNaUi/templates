import { UserModel } from '@/types';
import { defineStore } from 'pinia';

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
    }
  },
  persist: {
    enabled: true
  }
})