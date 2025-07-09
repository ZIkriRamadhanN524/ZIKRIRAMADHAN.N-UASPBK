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
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
  border-radius: 3px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.jadwal-item {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  border-left: 4px solid #4361ee;
}

.jadwal-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.tanggal {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4361ee;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tanggal::before {
  content: '📅';
  font-size: 1.1rem;
}

.detail {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.95rem;
}

.detail span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  background-color: #f1f3ff;
  border-radius: 6px;
  color: #2c3e50;
}

p {
  text-align: center;
  color: #6c757d;
  font-size: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
    margin: 1rem;
  border-radius: 10px;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .jadwal-item {
    padding: 1rem;
  }
  
  .detail {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .detail span {
    width: 100%;
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 1.3rem;
  }
  
  .tanggal {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }
  
  .tanggal::before {
    display: none;
  }
}
</style>
