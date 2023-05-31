import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { BootstrapVue3 } from 'bootstrap-vue-3'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

const pinia = createPinia()

createApp(App).use(pinia).use(BootstrapVue3).mount('#app')
