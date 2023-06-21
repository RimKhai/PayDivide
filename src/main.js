import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import './style.css'
import App from './App.vue'
import AddMembersPage from "./views/addMembersPage/AddMembersPage.vue"
import AddProductsPage from "./views/addProductsPage/AddProductsPage.vue"
import { BootstrapVue3 } from 'bootstrap-vue-3'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"

const pinia = createPinia()

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name: "AddMembersPage",
        path: "/",
        component: AddMembersPage,
      },
      {
        name: "AddProductsPage",
        path: "/products",
        component: AddProductsPage,
        props: true
      },
    ],
  });

createApp(App).use(router).use(pinia).use(BootstrapVue3).mount('#app')
