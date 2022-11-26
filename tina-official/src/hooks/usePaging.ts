/**
 * zpaging 配置
 */

import { onPageScroll, onPullDownRefresh, onReachBottom } from "@dcloudio/uni-app"
import ZPaging from '@/components/z-paging/components/z-paging/z-paging.vue';
import { computed, Ref } from 'vue';

export const useZpaging = (paging: Ref<typeof ZPaging | null>) => {
  if (paging.value) {
    const isPagingRefNotFound = computed(() => paging.value!.paging || paging.value!.paging === undefined)
    onPullDownRefresh(() => {
      if (isPagingRefNotFound) return
      paging.value!.reload()
    })
    
    onPageScroll((e) => {
      if (isPagingRefNotFound) return
      paging.value!.updatePageScrollTop(e.scrollTop)
      if (e.scrollTop < 10) {
        paging.value!.doChatRecordLoadMore();
      }
    })

    onReachBottom(() => {
      if (isPagingRefNotFound) return
      console.log('==================11111111111111111')
      paging.value!.pageReachBottom()
    })
  }
}