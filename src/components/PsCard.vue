<template>
  <div class="card">
    <div class="info">
      <h3>{{ ps.nama }}</h3>
      <p>Tipe: {{ ps.tipe }}</p>
      <p>Harga Sewa: Rp {{ ps.harga.toLocaleString() }}/jam</p>
      <p>
        Status:
        <strong :class="ps.status === 'Tersedia' ? 'tersedia' : 'disewa'">{{
          ps.status
        }}</strong>
      </p>

      <button v-if="ps.status === 'Tersedia'" @click="$emit('pesan', ps)">
        Pesan Sekarang
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(["ps"]);
defineEmits(["pesan"]);
</script>

<style scoped>
.card {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  flex-wrap: wrap;
  border: 1px solid #eaeaea;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.info {
  flex: 1;
  min-width: 200px;
}

h3 {
  margin: 0 0 10px 0;
  font-size: 1.4rem;
  color: #2c3e50;
}

p {
  margin: 8px 0;
  font-size: 1rem;
  color: #555;
}

button {
  margin-top: 15px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4361ee;
  color: white;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 200px;
}

button:hover {
  background-color: #3a56d4;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(67, 97, 238, 0.3);
}

button:active {
  transform: translateY(0);
}

.tersedia {
  color: #2ecc71;
  font-weight: 600;
}

.disewa {
  color: #e74c3c;
  font-weight: 600;
}

/* Responsive design */
@media (max-width: 768px) {
  .card {
    flex-direction: column;
    gap: 15px;
    padding: 18px;
  }

  h3 {
    font-size: 1.3rem;
  }

  button {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 15px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
  }
}
</style>
