<template>
  <div class="admin-container">
    <h2>Manajemen Konsol</h2>

    <!-- FORM TAMBAH KONSOL -->
    <form @submit.prevent="addKonsol" class="form-tambah">
      <h3>Tambah Konsol Baru</h3>
      <input v-model="newPs.nama" placeholder="Nama PS" required />
      <input v-model="newPs.tipe" placeholder="Tipe" required />
      <input v-model.number="newPs.harga" type="number" placeholder="Harga per Jam" required />
      <select v-model="newPs.status">
        <option value="Tersedia">Tersedia</option>
        <option value="Disewa">Disewa</option>
      </select>
      <button type="submit">Tambah Konsol</button>
    </form>

    <hr />

    <!-- LIST KONSOL -->
    <ul>
      <li v-for="ps in psList" :key="ps.id">
        <template v-if="editingId === ps.id">
          <!-- FORM EDIT -->
          <form @submit.prevent="saveEdit(ps.id)">
            <input v-model="editData.nama" />
            <input v-model="editData.tipe" />
            <input v-model.number="editData.harga" type="number" />
            <select v-model="editData.status">
              <option value="Tersedia">Tersedia</option>
              <option value="Disewa">Disewa</option>
            </select>
            <button type="submit">Simpan</button>
            <button type="button" @click="cancelEdit">Batal</button>
          </form>
        </template>

        <template v-else>
          {{ ps.nama }} ({{ ps.status }}) -
          <button @click="startEdit(ps)">Edit</button>
          <button @click="deleteKonsol(ps.id)" class="delete-btn">Hapus</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const psList = ref([])
const editingId = ref(null)
const editData = ref({})
const newPs = ref({
  nama: '',
  tipe: '',
  harga: 0,
  status: 'Tersedia',
  gambar: ''
})

async function fetchData() {
  const res = await fetch('http://localhost:3000/ps')
  psList.value = await res.json()
}

onMounted(fetchData)

function startEdit(ps) {
  editingId.value = ps.id
  editData.value = { ...ps }
}

function cancelEdit() {
  editingId.value = null
}

async function saveEdit(id) {
  await fetch(`http://localhost:3000/ps/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editData.value)
  })

  editingId.value = null
  fetchData()
}

async function addKonsol() {
  await fetch('http://localhost:3000/ps', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPs.value)
  })

  newPs.value = {
    nama: '',
    tipe: '',
    harga: 0,
    status: 'Tersedia',
    gambar: ''
  }

  fetchData()
}

async function deleteKonsol(id) {
  const confirmHapus = confirm("Yakin ingin menghapus konsol ini?")
  if (!confirmHapus) return

  await fetch(`http://localhost:3000/ps/${id}`, {
    method: 'DELETE'
  })

  fetchData()
}
</script>

<style scoped>
.admin-container {
  max-width: 800px;
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
  background: #f9f9f9;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 6px;
  text-align: left;
}

input, select {
  display: block;
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

button {
  margin-top: 5px;
  margin-right: 10px;
  padding: 8px 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  display: flex;
}


.delete-btn {
  background-color: #dc3545;
  color: white;
  display: flex;
}

.delete-btn:hover {
  background-color: #b52b39;
}


.form-tambah {
  background: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
</style>
