import { useAppStore } from "@/store"
import { computed } from 'vue';

export const useNabbar = () => {

  const appStore = useAppStore()

  return {
    vuex_custom_nav_bar: computed(() => appStore.vuex_custom_nav_bar),
    vuex_custom_bar_height: computed(() => appStore.vuex_custom_bar_height),
    vuex_status_bar_height: computed(() => appStore.vuex_status_bar_height)
  }
}