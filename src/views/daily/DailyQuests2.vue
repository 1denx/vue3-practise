<template>
  <div>
    <h1 class="mb-3">Day2 - Vue.js 的基礎魔法：v-model 題目</h1>
    <div id="app">
      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
        <legend class="fieldset-legend">Q1 v-model</legend>
        <div class="border-custom mb-3">
          <input type="text" v-model="message" />&nbsp;&nbsp;&nbsp;{{ message }}
        </div>
        <div class="border-custom mb-3">
          <p class="font-medium">延伸練習：.lazy</p>
          <input type="text" v-model.lazy="message" />&nbsp;&nbsp;&nbsp;{{ message }}
          <p class="text-sm text-gray-40">
            說明：當輸入框失去焦點（游標移開），或是按 Enter 時才會觸發。
          </p>
        </div>
        <div class="border-custom">
          <p class="font-medium">延伸練習：.trim</p>
          <input type="text" v-model.trim="message" />&nbsp;&nbsp;&nbsp;{{ message }}
          <p class="text-sm text-gray-40">
            說明：自動刪除前後兩端的空格，不管是半形或全型空格都可以刪除。
          </p>
        </div>
      </fieldset>

      <fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
        <legend class="fieldset-legend">Q2 .number</legend>
        <div class="border-custom mb-3">
          <p class="font-medium">範例 1：type 為 text，沒有使用修飾符</p>
          <input type="text" v-model="phoneNumber" @input="checkType" />&nbsp;&nbsp;&nbsp;{{
            phoneNumber
          }}&nbsp;&nbsp;&nbsp;{{ result }}
          <p class="text-sm text-gray-40">
            說明：使用者輸入的值會以「字串」型態綁定到 value。Vue
            不會幫你自動轉型，需要自己在程式中處理型態轉換。
          </p>
        </div>
        <div class="border-custom mb-3">
          <p class="font-medium">範例 2：type 為 text，使用 .number 修飾符</p>
          <input type="text" v-model.number="phoneNumber" @input="checkType" />&nbsp;&nbsp;&nbsp;{{
            phoneNumber
          }}&nbsp;&nbsp;&nbsp;{{ result }}
        </div>
        <div class="border-custom mb-3">
          <p class="font-medium">範例 3：type 為 number，沒有使用修飾符</p>
          <input
            type="number"
            v-model.number="phoneNumber"
            @input="checkType"
          />&nbsp;&nbsp;&nbsp;{{ phoneNumber }}&nbsp;&nbsp;&nbsp;{{ result }}
          <p class="text-sm text-gray-40">
            .number 修飾符，會限制輸入內容，在 type="number" 時自動啟用。詳見
            <a href="https://cn.vuejs.org/guide/essentials/forms.html#number" target="_blank"
              >官方說明</a
            >
            。
          </p>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<!-- 請不要修改下面內容 -->
<script setup>
import { ref } from 'vue'

const message = ref('這是一段話')
const phoneNumber = ref('0988888888')
const result = ref('')
const checkType = () => {
  result.value = typeof phoneNumber.value
}
</script>
