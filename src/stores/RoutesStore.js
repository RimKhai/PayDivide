import { defineStore } from "pinia"

export const useRoutesStore = defineStore("routesStore", {
    state: () => ({
        routeNames: {
            AddProductsPage: 'AddProductsPage'
        }
    }),
})