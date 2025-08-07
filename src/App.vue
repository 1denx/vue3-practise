<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

function linkClass(path) {
  return route.path === path ? 'text-primary-120 font-bold' : 'text-gray-50'
}
</script>

<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 border-only-r"
    aria-label="Sidebar"
  >
    <div class="h-full p-l-15 py-4 overflow-y-auto">
      <HelloWorld msg="Vue3 前端新手營｜2025" />
      <nav class="mt-10 flex flex-col">
        <RouterLink to="/" :class="linkClass('/')">Home</RouterLink>
        <RouterLink to="/week1" :class="linkClass('/week1')">Week1</RouterLink>
        <RouterLink to="/week2" :class="linkClass('/week2')">Week2</RouterLink>
      </nav>
    </div>
  </aside>

  <div>
    <RouterView />
  </div>
</template>
