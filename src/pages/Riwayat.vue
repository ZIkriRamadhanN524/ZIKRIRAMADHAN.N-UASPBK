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
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h2 {
  text-align: center;
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
}

li {
  background: #ffffff;
  padding: 1.25rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border-left: 4px solid #4e73df;
}

li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

li strong {
  color: #4e73df;
  font-weight: 600;
}

p {
  text-align: center;
  color: #6c757d;
  font-size: 1.1rem;
  padding: 1.5rem;
  background: #f1f5f9;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
    margin: 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}
</style>