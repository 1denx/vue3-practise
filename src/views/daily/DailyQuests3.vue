<template>
  <h1 class="mb-3">Day3 - Vue.js 的基礎魔法：v-model 表單題目</h1>
  <div id="app">
    <div class="container">
      <div class="Q1 mb-5">
        <form>
          <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
            <legend class="fieldset-legend">Q1</legend>
            <div v-for="fruit in fruitData" :key="fruit.title" class="form-check">
              <input
                type="checkbox"
                :id="fruit.title"
                :value="fruit.title"
                class="form-check-input"
                v-model="checkedFruits"
              />
              <label :for="fruit.title" class="form-check-label">{{ fruit.title }}</label>
            </div>
            <div class="mt-3">
              透過 checkbox 選擇的水果：<span class="fw-bold">{{ checkedFruits.join(', ') }}</span>
            </div>
          </fieldset>
        </form>
      </div>

      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
        <legend class="fieldset-legend">Q2</legend>
        <select class="form-select mb-2" v-model="selected">
          <option v-for="fruit in fruitData" :key="fruit.title" :value="fruit.title">
            {{ fruit.title }}
          </option>
        </select>
        <div class="mt-3">
          透過 select 選擇的水果：<span class="fw-bold">{{ selected }}</span>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<!-- 請不要修改下面內容 -->
<script setup>
import { ref } from 'vue'

const checkedFruits = ref([])
const selected = ref('')

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

<style>
.container {
  max-width: 600px;
  margin-top: 50px;
}
.form-check {
  display: flex;
  align-items: center;
}
.form-check-label {
  margin-left: 0.5rem;
}
</style>
