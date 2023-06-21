import { defineStore } from "pinia"

export const useProductStore = defineStore("productStore", {
    state: () => ({
        products: [
            {   
                id: 0,
                name: 'Огурец',
                cost: 15
            },
            {
                id: 1,
                name: 'Вино',
                cost: 15
            },
            {   
                id: 2,
                name: 'Пиво',
                cost: 15
            }
        ]
    }),
    actions: {
        addNewProduct(name, cost) {
            this.products = [...this.products, {id: Date.now(), name: name, cost: cost}]
        },
        deleteProduct(id) {
            this.products = this.products.filter(item => item.id !== id)
        }
    }
})