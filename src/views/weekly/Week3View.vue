<template>
  <div id="root">
    <div class="container mt-5 ml-5">
      <div class="grid grid-flow-col mb-10">
        <div class="row-span-3">
          <div class="list-group">
            <button
              type="button"
              class="cursor-pointer bg-white border-gray-20 rounded-md hover:bg-gray-10"
              v-for="drink in drinks"
              :key="drink.id"
              @click.prevent="addToCart(drink)"
            >
              <div class="flex w-50 justify-between">
                <h5 class="mb-1 font-size-5">{{ drink.name }}</h5>
                <small class="font-size-4 mt-1">${{ drink.price }}</small>
              </div>
              <p class="mb-1 text-left">{{ drink.description }}</p>
            </button>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-20 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">品項</th>
                  <th scope="col" class="px-6 py-3">描述</th>
                  <th scope="col" class="px-6 py-3">數量</th>
                  <th scope="col" class="px-6 py-3">單價</th>
                  <th scope="col" class="px-6 py-3">小計</th>
                  <th scope="col" class="px-6 py-3">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-10 dark:hover:bg-gray-600"
                  v-for="item in cart"
                  :key="item.id"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ item.name }}
                  </th>
                  <td class="px-6 py-4">{{ item.description }}</td>
                  <td class="px-6 py-4">
                    <select class="form-select" v-model="item.qty" @change="updateCart(item)">
                      <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                    </select>
                  </td>
                  <td class="px-6 py-4">{{ item.price }}</td>
                  <td class="px-6 py-4">{{ itemSubtotal(item) }}</td>
                  <td class="px-6 py-4">
                    <button type="button" class="btn btn-del mx-1" @click="removeFromCart(item.id)">
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="text-end my-3">
            <h5 class="font-bold text-5">
              總計: <span class="font-bold text-5">{{ sum }}</span>
            </h5>
          </div>
          <textarea
            class="form-control mb-3 w-full"
            rows="3"
            placeholder="備註"
            v-model="description"
          ></textarea>
          <div class="text-end">
            <button class="btn btn-primary" @click.prevent="createOrder">送出</button>
          </div>
        </div>
      </div>
      <hr />
      <div class="flex justify-center">
        <div class="card border border-solid border-gray-20 rounded-2 mt-10 w-150">
          <div class="card-body">
            <h2 class="card-title">訂單</h2>
            <div class="overflow-x-auto">
              <table class="table w-full">
                <thead>
                  <tr>
                    <th class="text-left font-medium border-only-b pb-2">品項</th>
                    <th class="text-end font-medium border-only-b pb-2">數量</th>
                    <th class="text-end font-medium border-only-b pb-2">小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.cart" :key="item.id">
                    <td class="py-2 border-only-b">{{ item.name }}</td>
                    <td class="text-end py-2 border-only-b">{{ item.qty }}</td>
                    <td class="text-end py-2 border-only-b">{{ itemSubtotal(item) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="text-end">
              備註: <span>{{ order.description }}</span>
            </div>
            <div class="text-end">
              <h5 class="text-5 font-bold">
                總計: <span class="text-5 font-bold">${{ order.sum }}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const productsData = [
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55,
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45,
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60,
  },
]
const drinks = ref(productsData)
const cart = ref([])
const description = ref('')
const order = ref({})

const sum = computed(() => {
  return cart.value.reduce((pre, next) => {
    return pre + next.price * next.qty
  }, 0)
})

const addToCart = (drink) => {
  cart.value.push({
    ...drink,
    id: new Date().getTime(),
    qty: 1,
  })
}

const updateCart = (item) => {
  cart.value = cart.value.map((cartItem) => {
    if (cartItem.id === item.id) {
      cartItem.qty = parseInt(item.qty)
    }
    return cartItem
  })
}

const removeFromCart = (id) => {
  cart.value = cart.value.filter((cartItem) => cartItem.id !== id)
}

const createOrder = () => {
  order.value = {
    id: new Date().getTime(),
    cart: cart.value,
    description: description.value,
    sum: sum.value,
  }
  cart.value = []
  description.value = ''
}

const itemSubtotal = (item) => {
  return item.price * item.qty
}
</script>
