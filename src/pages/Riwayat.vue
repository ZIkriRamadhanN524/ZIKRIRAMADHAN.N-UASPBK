<template>
  <div class="container">
    <h2>Riwayat Penyewaan</h2>

    <ul v-if="riwayat.length">
      <li v-for="item in riwayat" :key="item.id">
        <strong>{{ item.psNama }}</strong> - {{ item.tanggal }} jam {{ item.waktu }} (oleh {{ item.namaPenyewa }})
      </li>
    </ul>
    <p v-else>Belum ada pemesanan.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const riwayat = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/pemesanan')
  riwayat.value = await res.json()
})

const user = JSON.parse(localStorage.getItem('user'))

onMounted(async () => {
  if (!user) return

  const res = await fetch(`http://localhost:3000/pemesanan?userId=${user.id}`)
  riwayat.value = await res.json()
})

</script>

<style scoped>
.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}

h2 {
    text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: #fff;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>
