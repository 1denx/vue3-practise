<template>
  <div>
    <h1 class="mt-1 mb-3 ml-8">Day1 - Vue.js 的基礎魔法：v-text、v-html、v-once</h1>

    <div id="app">
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4 mb-3">
        <legend class="fieldset-legend">Q1</legend>
        <div>
          Ray 身上有 {{ RayMoney }} 元，去超商吃午餐花了 {{ lunchPrice }} 元，買了一杯飲料花了
          {{ drinkPrice }} 元。
        </div>
      </fieldset>

      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4 mb-3">
        <legend class="fieldset-legend">Q2</legend>
        <div class="Q2" v-text="rawHTML"></div>
      </fieldset>

      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4 mb-3">
        <legend class="fieldset-legend">Q3</legend>
        <div class="Q3" v-html="rawHTML"></div>
      </fieldset>

      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4 mb-3">
        <legend class="fieldset-legend">Q4</legend>
        <div class="Q4" v-once>此欄位為單次綁定：去超商吃午餐花了 {{ lunchPrice }} 元</div>
      </fieldset>

      <div role="alert" class="alert alert-vertical sm:alert-horizontal mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info h-6 w-6 shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 class="font-bold">Q4 綁定 v-once 的元素不會被改變，但 Q1 會變動</h3>
          <div class="text-xs">Ray 想富養自己，改吃 1000 元</div>
        </div>
        <button type="button" @click="changeLunchPrice" class="btn btn-sm btn-outline text-black">
          額度提高
        </button>
      </div>

      <div role="alert" class="alert alert-vertical sm:alert-horizontal mt-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="stroke-info h-6 w-6 shrink-0"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>v-html 有機會產生 XSS 弱點：</span>
        <div>
          <a
            href="https://blog.csdn.net/zhaoletf/article/details/115101293"
            target="_blank"
            class="btn btn-sm btn-outline border-black border-solid"
          >
            點擊查看
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const RayMoney = ref(1500)
const lunchPrice = ref(90)
const drinkPrice = ref(65)

const rawHTML = ref(
  "<p style='color: gray;'>姆咪姆咪心動動 (*´∀`)~♥</p>" +
    "<img src='' style='display: none;' onerror='alert(`這是 XSS 攻擊`)'>",
)

function changeLunchPrice() {
  lunchPrice.value = 1000
}
</script>
