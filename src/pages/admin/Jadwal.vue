<template>
  <div class="container">
    <h2>Jadwal Penyewaan</h2>

    <div v-if="jadwal.length">
      <ul>
        <li v-for="item in sortedJadwal" :key="item.id" class="jadwal-item">
          <div class="tanggal">
            <strong>{{ formatTanggal(item.tanggal) }}</strong> - {{ item.waktu }}
          </div>
          <div class="detail">
            <span>🎮 {{ item.psNama }}</span>
            <span>👤 {{ item.namaPenyewa }}</span>
          </div>
        </li>
      </ul>
    </div>
    <p v-else>Tidak ada jadwal penyewaan.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const jadwal = ref([])

onMounted(async () => {
  const res = await fetch('http://localhost:3000/pemesanan')
  jadwal.value = await res.json()
})

// Urutkan berdasarkan tanggal terdekat
const sortedJadwal = computed(() => {
  return [...jadwal.value].sort((a, b) => new Date(a.tanggal) - new Date(b.tanggal))
})

// Format Tanggal (opsional)
function formatTanggal(tgl) {
  const d = new Date(tgl)
  return d.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
}
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

.jadwal-item {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.tanggal {
  font-weight: bold;
  margin-bottom: 5px;
}

.detail {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
