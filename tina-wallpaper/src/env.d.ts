/// <reference types="vite/client" />
/// <reference types="@dcloudio/types" />
/// <reference types="@types/weixin-app" />
/// <reference types="unplugin-vue-define-options/macros-global" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface AppDataItem {
  title: string
  key: string
  label: string
  value: string
  desc: string
}

declare interface Dict {
  appData: Record<string, AppDataItem>
}