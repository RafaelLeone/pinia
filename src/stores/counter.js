import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter",  {
    state: () => ({
        count: localStorage.count ? localStorage.count : 10,
        heroLevel: localStorage.heroLevel ? localStorage.heroLevel : 1,
    }),
    actions: {
        increment () {
            if (this.count === 1) {
                this.heroLevel++
                this.count = 10*this.heroLevel
            } else {
                this.count--
            }
            localStorage.count = this.count
            localStorage.heroLevel = this.heroLevel
        }
    },
})
