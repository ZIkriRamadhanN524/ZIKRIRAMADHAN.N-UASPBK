<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/ps">Daftar PS</router-link>
      <router-link to="/pemesanan">Pemesanan</router-link>
      <router-link to="/riwayat">Riwayat</router-link>
      <router-link to="/admin/konsol">Admin Konsol</router-link>
      <router-link to="/admin/jadwal">Jadwal</router-link>
    </nav>
    <main class="main-container">
      <router-view />
    </main>
  </div>
</template>

<style>
#app {
  font-family: 'Poppins', 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: linear-gradient(to right, #1a2a3a, #2c3e50);
  padding: 1rem 2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar a:hover {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.navbar a.router-link-exact-active {
  background: #007bff;
  color: white;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

.main-container {
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  width: calc(100% - 4rem);
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  margin-top: 1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar {
    padding: 0.8rem 1rem;
    gap: 0.5rem;
    justify-content: center;
  }
  
  .navbar a {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
  
  .main-container {
    padding: 1.5rem;
    width: calc(100% - 2rem);
    margin: 1rem auto;
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    gap: 0.3rem;
  }
  
  .navbar a {
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 0.5rem;
  }
  
  .main-container {
    padding: 1rem;
    width: calc(100% - 1rem);
    margin: 0.5rem auto;
    border-radius: 0;
    box-shadow: none;
  }
}

/* Animation for better interactivity */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.main-container {
  animation: fadeIn 0.5s ease-out;
}

/* Add some icons (assuming you'll add Font Awesome or similar) */
.navbar a::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
}

.navbar a[href="/"]::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>');
}

.navbar a[href="/ps"]::before {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M21 6h-4V3c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 3h6v3H9V3zm11 17H4V8h16v12z"/></svg>');
}

/* Add similar SVG icons for other menu items */
</style>