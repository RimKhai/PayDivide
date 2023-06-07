import { defineStore } from "pinia"

export const useMemberStore = defineStore("memberStore", {
    state: () => ({
        homies: [
            {
                name: 'Секретный Персонаж',
                cost: 15
            },
            {
                name: 'Адиль',
                cost: 15
            },
            {
                name: 'Игорь',
                cost: 15
            }
        ]
    })
})
