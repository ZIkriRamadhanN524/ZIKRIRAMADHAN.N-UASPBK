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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(to bottom, #f0f4f8, #e0e0e0);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: #1e2a38;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 6px;
}

.navbar a:hover {
  background-color: #007bff;
  color: white;
  transform: translateY(-2px);
}

.navbar a.router-link-exact-active {
  background-color: #0056b3;
  color: white;
}

.main-container {
  flex: 1;
  padding: 30px 20px;
  max-width: 1200px;
  margin: auto;
  width: 100%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
}
</style>
