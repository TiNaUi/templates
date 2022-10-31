import { defineStore } from 'pinia';
import { ContentApi, Tag } from '@/apis';

/**
 * 用户信息
 */
export const useTagsStore = defineStore('tag', {
  state() {
    return {
      tagList: [] as Tag.Item[]
    }
  },
  actions: {
    updateTagList() {
      ContentApi.tagList().then(res => {
        if (res.data.success) {
          this.tagList = res.data.data
        }
      })
    }
  },
  persist: {
    enabled: true
  }
})