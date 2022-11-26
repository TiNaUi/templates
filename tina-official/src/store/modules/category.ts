import { defineStore } from 'pinia';
import { Category, ContentApi } from '@/apis';

/**
 * 用户信息
 */
export const useCategoryStore = defineStore('category', {
  state() {
    return {
      cateList: [] as Category.Item[]
    }
  },
  actions: {
    updateTagList() {
      ContentApi.categoriesList({}).then(res => {
        if (res.data.success) {
          this.cateList = res.data.data
        }
      })
    }
  },
  persist: {
    enabled: true
  }
})