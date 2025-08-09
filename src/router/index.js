import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // daily
    {
      path: '/day1',
      name: 'day1',
      component: () => import('../views/daily/DailyQuests1.vue'),
    },
    {
      path: '/day2',
      name: 'day2',
      component: () => import('../views/daily/DailyQuests2.vue'),
    },
    {
      path: '/day3',
      name: 'day3',
      component: () => import('../views/daily/DailyQuests3.vue'),
    },
    // weekly
    {
      path: '/week1',
      name: 'week1',
      component: () => import('../views/weekly/Week1View.vue'),
    },
    {
      path: '/week2',
      name: 'week2',
      component: () => import('../views/weekly/Week2View.vue'),
    },
  ],
})

export default router
