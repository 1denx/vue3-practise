<template>
  <div class="w-full lg:w-80 xl:w-96">
    <h2 class="font-bold mb-3">購物車</h2>
    <div class="bg-gray-20 rounded-3 p-5" v-if="carts.length === 0">
      <p class="text-center">未選擇商品</p>
    </div>
    <div v-else>
      <ul class="list-group mb-3 m-0 p-0">
        <li class="list-group-item list-none d-flex justify-content-between align-items-center">
          <div
            class="border border-solid border-gray-20 rounded-1 flex flex-justify-between flex-items-center p-2"
            v-for="item in props.carts"
            :key="item.id"
          >
            <div>
              <h3 class="my-0 text-4">{{ item.name }}</h3>
              <small class="text-muted">數量：{{ item.qty }}</small>
            </div>
            <div>
              <span class="text-muted">${{ item.price * item.qty }}</span>
              <button class="btn btn-sm btn-del ms-2" @click="handleRemoveCart(item)">移除</button>
            </div>
          </div>
        </li>
      </ul>
      <div class="text-end">
        <h5 class="text-5 font-bold">總金額：{{ sum }}<span class="text-5 font-bold"></span></h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  carts: {
    type: Array,
    required: true,
  },
  sum: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['remove-cart'])
const showNotification = inject('showNotification')
const handleRemoveCart = (item) => {
  emit('remove-cart', item.id)
  showNotification(`已將 ${item.name} 移除購物車`)
}
</script>
