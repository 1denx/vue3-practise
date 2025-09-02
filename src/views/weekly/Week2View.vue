<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
    <!-- Segmented Control -->
    <div class="flex bg-gray-100 rounded-lg p-1 shadow-inner mb-6">
      <button
        type="button"
        v-for="tab in tabs"
        :key="tab"
        @click="active = tab"
        class="flex-1 px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 border-0"
        :class="
          active === tab
            ? 'bg-white shadow text-black'
            : 'bg-transparent text-gray-600 hover:text-black'
        "
      >
        {{ tab }}
      </button>
    </div>

    <!-- 表單內容 -->
    <transition name="fade" mode="out-in">
      <form :key="active" class="space-y-4">
        <!-- 登入表單 -->
        <template v-if="active === 'Sign In'">
          <input
            type="email"
            placeholder="Email"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            v-model="userLogin.email"
          />
          <input
            type="password"
            placeholder="Password"
            class="input w-full mx-0 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            v-model="userLogin.password"
          />
          <button type="button" class="w-full btn btn-primary" @click="signIn">Sign In</button>
        </template>

        <!-- 註冊表單 -->
        <template v-else>
          <input
            type="text"
            placeholder="Username"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            v-model.trim="userRegister.nickname"
          />
          <input
            type="email"
            placeholder="Email"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            v-model="userRegister.email"
          />
          <input
            type="password"
            placeholder="Password"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            v-model="userRegister.password"
          />
          <button type="button" class="w-full btn btn-primary" @click="signUp">Sign Up</button>
        </template>
      </form>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { getToken, keepToken } from '@/utils/cookieTool'

const tabs = ['Sign In', 'Sign Up']
const active = ref('Sign In')
const api = 'https://todolist-api.hexschool.io'
const isLoggedIn = ref(false)

const userRegister = ref({
  email: '',
  password: '',
  nickname: '',
})
const userLogin = ref({
  email: '',
  password: '',
})
const userNickname = ref('')

const signUp = async () => {
  if (!userRegister.value.email || !userRegister.value.password || !userRegister.value.nickname) {
    alert('請輸入完整註冊資訊')
    return
  }
  try {
    await axios.post(`${api}/users/sign_up`, userRegister.value)
    userRegister.value = {
      email: '',
      password: '',
      nickname: '',
    }
    alert('註冊成功')
  } catch (err) {
    const msg = err.response?.data?.message || '發生未知錯誤'
    alert(`註冊失敗，${msg}`)
  }
}

const signIn = async () => {
  if (!userLogin.value.email || !userLogin.value.password) {
    alert('請輸入完整登入資訊')
    return
  }
  try {
    const res = await axios.post(`${api}/users/sign_in`, userLogin.value)
    const { token, exp } = res.data
    keepToken(token, exp)
    alert('登入成功')
    await checkout()
    userLogin.value = {
      email: '',
      password: '',
    }
  } catch (err) {
    alert('登入失敗：' + err.response.data.message || '未知錯誤')
  }
}

const checkout = async () => {
  try {
    const res = await axios.get(`${api}/users/checkout`, {
      headers: {
        authorization: getToken(),
      },
    })
    axios.defaults.headers['authorization'] = getToken()
    userNickname.value = res.data.nickname
    isLoggedIn.value = true
    alert(`使用者驗證成功，歡迎 ${res.data.nickname}`)
  } catch (err) {
    console.log('checkout error:', err.response?.data)
    alert(`驗證失敗： ${err.response.data.message}`)
    return false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
