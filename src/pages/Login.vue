<template>
  <div>
    <h1>Login</h1>
    <form>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

async function handleLogin() {
  const res = await fetch(`http://localhost:3000/users?username=${username.value}&password=${password.value}`)
  const data = await res.json()

  if (data.length > 0) {
    localStorage.setItem('user', JSON.stringify(data[0]))
    alert("Login berhasil!")
    router.push('/')
  } else {
    alert("Username atau password salah!")
  }
}
</script>
