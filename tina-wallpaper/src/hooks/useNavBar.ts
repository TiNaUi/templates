import { useAppStore } from "@/store"
import { reactive } from 'vue';

export const useNabbar = () => {
  const appStore = useAppStore()

  return reactive({
    vuex_custom_nav_bar: appStore.vuex_custom_nav_bar,
    vuex_custom_bar_height: appStore.vuex_custom_bar_height,
    vuex_status_bar_height: appStore.vuex_status_bar_height
  })
}