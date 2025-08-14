<template>
  <h1 class="mt-1 mb-3 ml-8">Day9 - Vue.js 的黑魔法：methods 題目</h1>
  <div id="app" class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <template v-for="(fruit, index) in fruitData" :key="index">
        <div class="card border border-solid border-gray-20" style="width: 100%">
          <div class="card-body">
            <img :src="fruit.imgUrl" class="card-img-top w-25" :alt="fruit.title" />
            <h5 class="card-title">水果名稱：{{ fruit.title }}</h5>
            <p class="card-text my-2">價錢：{{ fruit.price }}</p>
            <p class="card-text mb-3">數量：{{ fruit.count }}</p>
            <button type="button" class="btn btn-primary" @click="addProduct(fruit)">
              加入購物車
            </button>
          </div>
        </div>
      </template>
    </div>

    <div class="toast toast-top toast-end">
      <div
        v-for="(toast, index) in toasts"
        :key="index"
        class="alert alert-info bg-white text-gray-50 border border-solid border-gray p-2"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
          />
        </svg>
        <div class="toast-body">
          {{ toast.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toasts = ref([])

const fruitData = ref([
  {
    title: 'apple',
    price: 25,
    count: 50,
    imgUrl: 'https://i.imgur.com/w4sYWlS.jpeg',
  },
  {
    title: 'orange',
    price: 15,
    count: 20,
    imgUrl: 'https://i.imgur.com/PSmzmXi.jpeg',
  },
  {
    title: 'strawberry',
    price: 45,
    count: 10,
    imgUrl: 'https://i.imgur.com/FIMmh6h.png',
  },
  {
    title: 'kiwi',
    price: 55,
    count: 20,
    imgUrl: 'https://i.imgur.com/TIA6v4m.jpeg',
  },
])

const addProduct = (fruit) => {
  const message = `您已將 ${fruit.title} 加入購物車`
  toasts.value.push({ message })
  setTimeout(() => {
    toasts.value.shift()
  }, 3000)
}
</script>
