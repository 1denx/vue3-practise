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
  <div class="wrapper grid grid-rows-1 grid-cols-8">
    <aside id="default-sidebar" aria-label="Sidebar" class="grid-col-span-1 border-only-r">
      <div class="h-full px-5 py-4 overflow-y-auto">
        <HelloWorld msg="Vue3 新手營" />
        <nav class="mt-3">
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
              <RouterLink to="/day4" :class="linkClass('/day4')">Day4</RouterLink>
              <RouterLink to="/day5" :class="linkClass('/day5')">Day5</RouterLink>
              <RouterLink to="/day6" :class="linkClass('/day6')">Day6</RouterLink>
              <RouterLink to="/day7" :class="linkClass('/day7')">Day7</RouterLink>
              <RouterLink to="/day8" :class="linkClass('/day8')">Day8</RouterLink>
              <RouterLink to="/day9" :class="linkClass('/day9')">Day9</RouterLink>
              <RouterLink to="/day10" :class="linkClass('/day10')">Day10</RouterLink>
            </div>
          </div>
          <div class="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title font-semibold">每週作業</div>
            <div class="collapse-content text-sm flex flex-col">
              <RouterLink to="/week1" :class="linkClass('/week1')">Week1</RouterLink>
              <RouterLink to="/week2" :class="linkClass('/week2')">Week2</RouterLink>
              <RouterLink to="/week3" :class="linkClass('/week3')">Week3</RouterLink>
              <RouterLink to="/week3Advanced" :class="linkClass('/week3Advanced')"
                >Week3 進階</RouterLink
              >
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

    <div class="grid-col-span-7">
      <RouterView />
    </div>
  </div>
</template>
