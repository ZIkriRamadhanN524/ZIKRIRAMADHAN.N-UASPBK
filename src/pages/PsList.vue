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
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 2.5rem;
  color: #1a1a1a;
  font-size: 2.2rem;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
  border-radius: 4px;
}

.grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
}

.info {
  width: 100%;
  text-align: center;
}

h3 {
  margin: 0.5rem 0 1rem 0;
  color: #2c3e50;
  font-size: 1.4rem;
}

p {
  margin: 0.5rem 0;
  color: #4a5568;
  font-size: 1rem;
}

button {
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.95rem;
  width: 100%;
  max-width: 200px;
  position: relative;
  overflow: hidden;
}

button:hover {
  background: linear-gradient(135deg, #3a56d4, #2f0b8a);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
}

button:active {
  transform: translateY(0);
}

button:disabled {
  background: #e2e8f0;
  color: #a0aec0;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.tersedia {
  color: #2ecc71;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.tersedia::before {
  content: '•';
  margin-right: 0.3rem;
  font-size: 1.5rem;
  line-height: 0;
}

.disewa {
  color: #e74c3c;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
}

.disewa::before {
  content: '•';
  margin-right: 0.3rem;
  font-size: 1.5rem;
  line-height: 0;
}

/* Responsive design */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  .grid {
    gap: 1.25rem;
  }
  
  .card {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.25rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  button {
    max-width: 100%;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>