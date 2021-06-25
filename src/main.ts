import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as drts from '@/directives'

const drtsDefault = drts.default
const newApp = createApp(App)
Object.keys(drtsDefault).forEach(key => {
  newApp.directive(key, drtsDefault[key])
})
newApp
  .use(store)
  .use(router)
  .mount('#app')
