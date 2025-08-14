<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
    <!-- Segmented Control -->
    <div class="flex bg-gray-100 rounded-lg p-1 shadow-inner mb-6">
      <button
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
      <form :key="active" class="space-y-4" @submit.prevent="onSubmit">
        <!-- 登入表單 -->
        <template v-if="active === 'Sign In'">
          <input
            type="email"
            placeholder="Email"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="password"
            placeholder="Password"
            class="input w-full mx-0 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button type="submit" class="w-full btn btn-primary">Sign In</button>
        </template>

        <!-- 註冊表單 -->
        <template v-else>
          <input
            type="text"
            placeholder="Username"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="email"
            placeholder="Email"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <input
            type="password"
            placeholder="Password"
            class="input w-full mx-0 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button type="submit" class="w-full btn btn-primary">Sign Up</button>
        </template>
      </form>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tabs = ['Sign In', 'Sign Up']
const active = ref('Sign In')

function onSubmit() {
  alert(`${active.value} form submitted!`)
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
