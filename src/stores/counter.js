import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter",  {
    state: () => ({
        count: 10,
        heroLevel: 1,
    }),
    actions: {
        increment () {
            if (this.count === 1) {
                this.heroLevel++
                this.count = 10*this.heroLevel
            } else {
                this.count--
            }
        }
    }
})