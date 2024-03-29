import { defineStore } from "pinia"

export const useMemberStore = defineStore("memberStore", {
    state: () => ({
        homies: [
            {   
                id: 0,
                name: 'Секретный Персонаж',
                cost: 15
            },
            {
                id: 1,
                name: 'Адиль',
                cost: 15
            },
            {   
                id: 2,
                name: 'Игорь',
                cost: 15
            }
        ]
    }),
    actions: {
        addNewMember(name) {
            this.homies = [...this.homies, {id: Date.now(), name: name, cost: 0}]
        },
        deleteMember(id) {
            this.homies = this.homies.filter(item => item.id !== id)
        }
    }
})
