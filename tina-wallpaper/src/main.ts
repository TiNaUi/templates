import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import '../mock'
import piniaPersist from './store/plugins/persist'
import LoginModel from '@/components/loginModel/index.vue';

// eslint-disable-next-line import/prefer-default-export
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(piniaPersist)
  app.use(pinia)
  app.component('LoginModel', LoginModel)
  return {
    app
  }
}
