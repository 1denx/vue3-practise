<template>
  <h1 class="mt-1 mb-3 ml-8">Day5 - Vue.js 的基礎魔法：v-if、v-else 題目</h1>
  <div id="app" class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <template v-for="(fruit, index) in fruitData" :key="index">
        <div v-if="fruit.price > 25">
          <div class="card border border-solid border-gray-20" style="width: 100%">
            <div class="card-body">
              <h5 class="card-title">水果名稱：{{ fruit.title }}</h5>
              <p class="card-text my-2">價錢：{{ fruit.price }}</p>
              <p class="card-text mb-3">數量：{{ fruit.count }}</p>
              <button type="button" class="btn btn-primary">加入購物車</button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
</script>
