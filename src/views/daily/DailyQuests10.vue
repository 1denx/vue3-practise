<template>
  <h1 class="mt-1 mb-3 ml-8">Day10 - Vue.js 的黑魔法：computed 題目</h1>
  <div id="app" class="container">
    <div class="total-price my-3">
      <h2>總價：{{ totalPrice }} 元</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <template v-for="(fruit, index) in fruitData" :key="index">
        <div class="card border border-solid border-gray-20" style="width: 100%">
          <div class="card-body">
            <img :src="fruit.imgUrl" class="card-img-top w-25" :alt="fruit.title" />
            <h5 class="card-title">水果名稱：{{ fruit.title }}</h5>
            <p class="card-text my-2">
              價錢：<input type="number" min="0" v-model="fruit.price" class="p-1 w-25" />
            </p>
            <p class="card-text mb-3">
              數量：<input type="number" min="0" v-model="fruit.count" class="p-1 w-25" />
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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
const totalPrice = computed(() => {
  let sum = 0
  fruitData.value.forEach((fruit) => {
    sum += fruit.price * fruit.count
  })
  return sum
})
</script>
