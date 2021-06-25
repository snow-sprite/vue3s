import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as drts from '@/directives'
import { VueSvgIconPlugin } from '@yzfe/vue3-svgicon'

const drtsDefault = drts.default
const newApp = createApp(App)
  .use(VueSvgIconPlugin, { tagName: "icon" })
  .use(VueSvgIconPlugin, { tagName: "icon" })
Object.keys(drtsDefault).forEach(key => {
  newApp.directive(key, drtsDefault[key])
})
newApp
  .use(store)
  .use(router)
  .mount('#app')
