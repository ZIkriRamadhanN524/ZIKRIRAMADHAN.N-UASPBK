// src/store/psStore.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePsStore = defineStore('ps', {
  state: () => ({
    psList: []
  }),
  actions: {
    async fetchPs() {
      const res = await axios.get('http://localhost:3000/ps')
      this.psList = res.data
    }
  }
})
