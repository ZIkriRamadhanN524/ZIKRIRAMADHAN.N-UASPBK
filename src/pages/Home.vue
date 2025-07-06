<template>
  <div class="home-container">
    <div class="welcome-box">
      <h1>Selamat Datang di <span>Rental PS</span></h1>
      <p>Sewa PlayStation favoritmu sekarang dengan cepat, mudah, dan terpercaya.</p>

      <!-- Tombol dengan @click -->
      <button @click="goToDaftarPs" class="btn-sewa">Lihat Daftar PS</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToDaftarPs() {
  router.push('/ps')
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0eaff, #ffffff);
  padding: 20px;
}

.welcome-box {
  background-color: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  animation: fadeIn 1s ease-in-out;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
}

h1 span {
  color: #007bff;
}

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
}

.btn-sewa {
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-sewa:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
