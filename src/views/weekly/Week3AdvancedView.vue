<template>
  <div class="container py-4 px-10">
    <div class="flex flex-wrap gap-6">
      <!-- 商品列表區 -->
      <ProductList :products="products" @add-cart="addCart"></ProductList>
      <!-- 購物車區 -->
      <CartList :carts="carts" :sum="sum" @remove-cart="removeCart"></CartList>
    </div>

    <!-- 通知元件 -->
    <ToastNotify></ToastNotify>
  </div>
</template>

<script setup>
import { ref, computed, provide, reactive } from 'vue'
import ProductList from '@/components/ProductList.vue'
import CartList from '@/components/CartList.vue'
import ToastNotify from '@/components/ToastNotify.vue'

const products = ref([
  {
    id: 1,
    name: '耳罩式藍芽耳機',
    description: '舒適配戴，支援降噪技術',
    price: 2490,
    stock: 6,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&amp;w=2065&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: '無線藍牙音箱',
    description: '高音質立體聲，防水設計',
    price: 1890,
    stock: 0,
    image:
      'https://images.unsplash.com/photo-1570676770859-137ffa9e6b73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: '無線滑鼠',
    description: '人體工學滑鼠具備優良的握持感和操作精度',
    price: 790,
    stock: 12,
    image:
      'https://images.unsplash.com/photo-1722682810969-06dfc9c9d517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx3aXJlbGVzcyUyMG1vdXNlfGVufDB8MHwwfHx8Mg%3D%3D',
  },
  {
    id: 4,
    name: '機械鍵盤',
    description: '支援2.4GHz、藍牙和有線連接',
    price: 2990,
    stock: 3,
    image:
      'https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8',
  },
  {
    id: 5,
    name: '智慧手錶',
    description: '健康監測，多種運動模式',
    price: 8990,
    stock: 7,
    image:
      'https://images.unsplash.com/photo-1620618802705-79f663a9012a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fFNtYXJ0d2F0Y2h8ZW58MHwwfDB8fHwy',
  },
  {
    id: 6,
    name: '平板電腦',
    description: '10.9吋，256GB儲存',
    price: 18900,
    stock: 2,
    image:
      'https://images.unsplash.com/photo-1601836211234-ca6cbde9a1cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRhYmxldHxlbnwwfDB8MHx8fDI%3D',
  },
])
const carts = ref([])

const sum = computed(() => {
  return carts.value.reduce((pre, next) => {
    return pre + next.price * next.qty
  }, 0)
})

const addCart = (product) => {
  const existProduct = carts.value.find((item) => item.id === product.id)
  if (existProduct) {
    existProduct.qty++
  } else {
    carts.value.push({
      ...product,
      qty: 1,
    })
  }
}

const removeCart = (id) => {
  carts.value = carts.value.filter((cartItem) => cartItem.id !== id)
}

const notificationState = reactive({
  message: '',
  isShow: false,
})
const showNotification = (message) => {
  notificationState.message = message
  notificationState.isShow = true
  setTimeout(() => {
    notificationState.isShow = false
  }, 2000)
}

provide('notificationState', notificationState)
provide('showNotification', showNotification)
</script>
