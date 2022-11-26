import ZPaging from '@/components/z-paging/components/z-paging/z-paging.vue';
import { Ref } from 'vue';
export interface IPictureList {
  paging: Ref<typeof ZPaging | null>
  reload: () => void
  updatePageScrollTop: (scrollTop: number) => void
  doChatRecordLoadMore: () => void
  pageReachBottom: () => void
}
