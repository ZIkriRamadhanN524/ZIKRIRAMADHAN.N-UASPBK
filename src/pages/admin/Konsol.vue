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
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2rem;
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

h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #3a3a3a;
  font-size: 1.3rem;
}

.form-tambah {
  background: #ffffff;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: #ffffff;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

input, select {
  display: block;
  margin-bottom: 1rem;
  padding: 0.75rem;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

input:focus, select:focus {
  outline: none;
  border-color: #4361ee;
  box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.1);
}

button {
  margin-top: 0.5rem;
  margin-right: 0.75rem;
  padding: 0.65rem 1.25rem;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

button[type="submit"] {
  background-color: #4361ee;
  color: white;
}

button[type="submit"]:hover {
  background-color: #3a56d4;
  transform: translateY(-1px);
}

button[type="button"] {
  background-color: #f1f5f9;
  color: #3a3a3a;
}

button[type="button"]:hover {
  background-color: #e2e8f0;
}

.delete-btn {
  background-color: #ef4444;
  color: white;
}

.delete-btn:hover {
  background-color: #dc2626;
  transform: translateY(-1px);
}

hr {
  border: none;
  height: 1px;
  background-color: #e2e8f0;
  margin: 2rem 0;
}

form {
  display: grid;
  gap: 1rem;
}

form button {
  margin-top: 0.5rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .admin-container {
    padding: 1.5rem;
    margin: 1rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  li {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .admin-container {
    padding: 1rem;
  }
  
  h2 {
    font-size: 1.4rem;
  }
  
  button {
    width: 100%;
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
  
  .form-tambah {
    padding: 1.5rem;
  }
}
</style>