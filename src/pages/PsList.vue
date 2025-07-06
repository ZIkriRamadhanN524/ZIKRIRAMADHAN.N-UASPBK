<template>
  <div class="container">
    <h2>Daftar PS yang Tersedia</h2>

    <div class="grid">
      <div v-for="ps in psList" :key="ps.id" class="card">
        <div class="info">
          <h3>{{ ps.nama }}</h3>
          <p>Tipe: {{ ps.tipe }}</p>
          <p>Harga: Rp {{ ps.harga.toLocaleString() }}/jam</p>
          <p>
            Status:
            <span :class="ps.status === 'Tersedia' ? 'tersedia' : 'disewa'">
              {{ ps.status }}
            </span>
          </p>
          <button
            :disabled="ps.status !== 'Tersedia'"
            @click="pesanPS(ps)"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const psList = ref([])
const router = useRouter()

onMounted(async () => {
  const res = await fetch('http://localhost:3000/ps')
  psList.value = await res.json()
})

function pesanPS(ps) {
  router.push({
    path: '/pemesanan',
    query: {
      id: ps.id,
      nama: ps.nama,
      harga: ps.harga
    }
  })
}
</script>

<style scoped>
.container {
  padding: 30px;
  max-width: 1200px;
  margin: auto;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.card {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
}

img {
  width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 10px;
}

.info {
  width: 100%;
  text-align: center;
}

button {
  margin-top: 10px;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.tersedia {
  color: green;
  font-weight: bold;
}

.disewa {
  color: red;
  font-weight: bold;
}
</style>
