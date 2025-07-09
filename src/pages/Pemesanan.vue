<template>
  <div class="container">
    <h2>Form Pemesanan</h2>

    <div class="detail-box">
      <p><strong>Nama PS:</strong> {{ route.query.nama }}</p>
      <p><strong>Harga per Jam:</strong> Rp {{ route.query.harga }}</p>
    </div>

    <form @submit.prevent="submitPemesanan">
      <input v-model="nama" type="text" placeholder="Nama Penyewa" required />
      <input v-model="tanggal" type="date" required />
      <input v-model="waktu" type="time" required />
      <button type="submit">Kirim Pemesanan</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const nama = ref('')
const tanggal = ref('')
const waktu = ref('')

async function submitPemesanan() {
  const pemesanan = {
    namaPenyewa: nama.value,
    psId: route.query.id,
    psNama: route.query.nama,
    tanggal: tanggal.value,
    waktu: waktu.value
  }

  function submitPemesanan() {
  if (!nama.value || !tanggal.value || !waktu.value) {
    alert("Semua field harus diisi!");
    return;
  }

  const selectedDate = new Date(tanggal.value + 'T' + waktu.value)
  const now = new Date()
  if (selectedDate < now) {
    alert("Waktu penyewaan tidak boleh di masa lalu!");
    return
  }

const user = JSON.parse(localStorage.getItem('user'))

const pemesanan = {
  namaPenyewa: nama.value,
  psId: route.query.id,
  psNama: route.query.nama,
  tanggal: tanggal.value,
  waktu: waktu.value,
  userId: user?.id || null
}


  fetch('http://localhost:3000/pemesanan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pemesanan)
  })
    .then(() => {
      alert("Pemesanan berhasil!")
      nama.value = ''
      tanggal.value = ''
      waktu.value = ''
    })
    .catch((err) => {
      alert("Gagal mengirim pemesanan")
      console.error(err)
    })
}


  try {
    await fetch('http://localhost:3000/pemesanan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pemesanan)
    })

    alert(`Pemesanan berhasil!\nNama: ${nama.value}\nTanggal: ${tanggal.value}\nJam: ${waktu.value}`)

    // Reset form
    nama.value = ''
    tanggal.value = ''
    waktu.value = ''
  } catch (err) {
    alert('Gagal mengirim pemesanan.')
    console.error(err)
  }
}
</script>


<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  animation: fadeInUp 0.5s ease-out;
}

h2 {
  text-align: center;
  color: #1a1a1a;
  font-size: 2rem;
  margin-bottom: 1.5rem;
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
  height: 4px;
  background: linear-gradient(90deg, #4361ee, #3a0ca3);
  border-radius: 4px;
}

.detail-box {
  background: #f8fafc;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  border-left: 4px solid #4361ee;
}

.detail-box p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #2d3748;
}

.detail-box strong {
  color: #1a1a1a;
  min-width: 120px;
  display: inline-block;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f9fafb;
}

input:focus {
  outline: none;
  border-color: #4361ee;
  box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
  background-color: #ffffff;
}

input[type="date"],
input[type="time"] {
  position: relative;
  padding-right: 1rem;
}

input[type="date"]::-webkit-calendar-picker-indicator,
input[type="time"]::-webkit-calendar-picker-indicator {
  position: absolute;
  right: 0;
  padding: 0.5rem;
  opacity: 0.5;
  cursor: pointer;
}

button {
  background: linear-gradient(135deg, #4361ee, #3a0ca3);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

button:hover {
  background: linear-gradient(135deg, #3a56d4, #2f0b8a);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
}

button:active {
  transform: translateY(0);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
    margin: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1.25rem;
    margin: 1rem;
    border-radius: 12px;
  }
  
  h2 {
    font-size: 1.5rem;
  margin-bottom: 1rem;
  }
  
  .detail-box {
    padding: 1rem;
  }
  
  .detail-box p {
    font-size: 1rem;
  }
  
  input {
    padding: 0.8rem;
  }
}
</style>