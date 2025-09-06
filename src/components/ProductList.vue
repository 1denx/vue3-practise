<template>
  <div class="flex-1 min-w-0 lg:flex-2">
    <h2 class="font-bold mb-3">商品列表</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="card border border-solid border-gray-20 overflow-hidden"
        v-for="product in props.products"
        :key="product.id"
      >
        <img :src="product.image" class="object-cover h-150px" :alt="product.name" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="fw-bold text-primary">$ {{ product.price }}</p>
          <button class="btn btn-primary" @click="handleAddCart(product)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['add-cart'])
const handleAddCart = (product) => {
  emit('add-cart', product)
  showNotification(`您已將 ${product.name} 加入購物車`)
}

const showNotification = inject('showNotification')
</script>
