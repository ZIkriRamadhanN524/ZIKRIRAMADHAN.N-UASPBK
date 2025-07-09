<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1>Rental <span>PlayStation</span> Terbaik</h1>
        <p class="subtitle">Nikmati pengalaman gaming premium dengan konsol terbaru dan harga terjangkau</p>
        
        <div class="cta-buttons">
          <button @click="goToDaftarPs" class="btn-primary">
            <i class="icon-controller"></i> Lihat Katalog PS
          </button>
          <router-link to="/pemesanan" class="btn-secondary">
            <i class="icon-calendar"></i> Pesan Sekarang
          </router-link>
        </div>
      </div>
      
      <div class="hero-image">
        <!-- <img src="@/assets/ps-hero.png" alt="PlayStation Console" loading="lazy"> -->
      </div>
    </div>

    <div class="features-section">
      <div class="feature-card">
        <div class="feature-icon">
          <i class="icon-clock"></i>
        </div>
        <h3>24 Jam Nonstop</h3>
        <p>Buka setiap hari, siap melayani kebutuhan gaming Anda kapan saja</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <i class="icon-controller"></i>
        </div>
        <h3>PS5 & PS4 Pro</h3>
        <p>Konsol terbaru dengan performa maksimal dan game terlengkap</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <i class="icon-wifi"></i>
        </div>
        <h3>Internet Cepat</h3>
        <p>Koneksi stabil untuk online gaming tanpa lag</p>
      </div>
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
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 0;
  overflow-x: hidden;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  gap: 3rem;
}

.hero-content {
  flex: 1;
  animation: fadeInLeft 0.8s ease-out;
}

.hero-image {
  flex: 1;
  animation: fadeInRight 0.8s ease-out;
}

.hero-image img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transform: perspective(1000px) rotateY(-10deg);
  transition: transform 0.5s ease;
}

.hero-image img:hover {
  transform: perspective(1000px) rotateY(0deg);
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1e293b;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

h1 span {
  color: #3b82f6;
  position: relative;
}

h1 span::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(59, 130, 246, 0.2);
  z-index: -1;
  border-radius: 4px;
}

.subtitle {
  font-size: 1.25rem;
  color: #475569;
  margin-bottom: 2.5rem;
  max-width: 500px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: white;
  color: #3b82f6;
  border: 2px solid #3b82f6;
}

.btn-secondary:hover {
  background: #f8fafc;
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.features-section {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e0f2fe, #bfdbfe);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: #3b82f6;
}

.feature-card h3 {
  font-size: 1.25rem;
  color: #1e293b;
  margin-bottom: 0.75rem;
}

.feature-card p {
  color: #64748b;
  line-height: 1.6;
}

/* Animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
  
  .hero-content {
    margin-bottom: 3rem;
  }
  
  .subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  
  .cta-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 2rem 1.5rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .feature-card {
    padding: 1.5rem;
  }
  
  .features-section {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
}

/* Icons (you can replace with actual icon library) */
.icon-controller::before { content: "🎮"; }
.icon-calendar::before { content: "📅"; }
.icon-clock::before { content: "⏱️"; }
.icon-wifi::before { content: "📶"; }
</style>