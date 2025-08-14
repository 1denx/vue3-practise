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
    {
      path: '/day4',
      name: 'day4',
      component: () => import('../views/daily/DailyQuests4.vue'),
    },
    {
      path: '/day5',
      name: 'day5',
      component: () => import('../views/daily/DailyQuests5.vue'),
    },
    {
      path: '/day6',
      name: 'day6',
      component: () => import('../views/daily/DailyQuests6.vue'),
    },
    {
      path: '/day7',
      name: 'day7',
      component: () => import('../views/daily/DailyQuests7.vue'),
    },
    {
      path: '/day8',
      name: 'day8',
      component: () => import('../views/daily/DailyQuests8.vue'),
    },
    {
      path: '/day9',
      name: 'day9',
      component: () => import('../views/daily/DailyQuests9.vue'),
    },
    {
      path: '/day10',
      name: 'day10',
      component: () => import('../views/daily/DailyQuests10.vue'),
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
