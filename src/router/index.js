// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import PsList from '../pages/PsList.vue'
import Pemesanan from '../pages/Pemesanan.vue'
import Riwayat from '../pages/Riwayat.vue'
import Konsol from '../pages/admin/Konsol.vue'
import Jadwal from '../pages/admin/Jadwal.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/ps', component: PsList },
  { path: '/pemesanan', component: Pemesanan },
  { path: '/riwayat', component: Riwayat },
  { path: '/admin/konsol', component: Konsol },
  { path: '/admin/jadwal', component: Jadwal },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
