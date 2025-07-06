<template>
  <div class="card">
    <div class="info">
      <h3>{{ ps.nama }}</h3>
      <p>Tipe: {{ ps.tipe }}</p>
      <p>Harga Sewa: Rp {{ ps.harga.toLocaleString() }}/jam</p>
      <p>Status: <strong :class="ps.status === 'Tersedia' ? 'tersedia' : 'disewa'">{{ ps.status }}</strong></p>

      <button v-if="ps.status === 'Tersedia'" @click="$emit('pesan', ps)">Pesan Sekarang</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['ps'])
defineEmits(['pesan'])
</script>

<style scoped>
.card {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  flex-wrap: wrap;
}

.info {
  flex: 1;
}

button {
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.tersedia {
  color: green;
}

.disewa {
  color: red;
}
</style>
