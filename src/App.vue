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
    <div class="h-full px-5 py-4 overflow-y-auto">
      <HelloWorld msg="Vue3 前端新手營｜2025" />
      <nav class="mt-10">
        <div class="collapse-title font-semibold flex flex-col">
          <RouterLink to="/" :class="linkClass('/')">Home</RouterLink>
        </div>

        <div class="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title font-semibold">每日任務</div>
          <div class="collapse-content text-sm flex flex-col">
            <RouterLink to="/day1" :class="linkClass('/day1')">Day1</RouterLink>
            <RouterLink to="/day2" :class="linkClass('/day2')">Day2</RouterLink>
            <RouterLink to="/day3" :class="linkClass('/day3')">Day3</RouterLink>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title font-semibold">每週作業</div>
          <div class="collapse-content text-sm flex flex-col">
            <RouterLink to="/week1" :class="linkClass('/week1')">Week1</RouterLink>
            <RouterLink to="/week2" :class="linkClass('/week2')">Week2</RouterLink>
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title font-semibold">練習範例</div>
          <div class="collapse-content text-sm">
            Go to "My Account" settings and select "Edit Profile" to make changes.
          </div>
        </div>
      </nav>
    </div>
  </aside>

  <div>
    <RouterView />
  </div>
</template>
