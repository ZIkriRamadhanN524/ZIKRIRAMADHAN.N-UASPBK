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
  max-width: 500px;
  margin: auto;
  padding: 20px;
}
h2 {
    text-align: center;
}

.detail-box {
  background: #f8f8f8;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #ddd;
}
</style>
