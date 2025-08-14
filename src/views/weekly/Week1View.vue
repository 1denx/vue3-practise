<script setup>
import { ref } from 'vue'

const productsData = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    desc: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20,
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    desc: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18,
  },
  {
    id: 3,
    name: '翡翠檸檬',
    desc: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34,
  },
  {
    id: 4,
    name: '四季春茶',
    desc: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10,
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    desc: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25,
  },
  {
    id: 6,
    name: '檸檬冰茶',
    desc: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20,
  },
  {
    id: 7,
    name: '芒果綠茶',
    desc: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18,
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    desc: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20,
  },
])

const updateStock = (idx, bool) => {
  if (bool) {
    productsData.value[idx].stock++
  } else {
    if (productsData.value[idx].stock > 0) {
      productsData.value[idx].stock--
    }
  }
}

const editIdx = ref(null)
const tempName = ref('')
const startEdit = (idx) => {
  editIdx.value = idx
  tempName.value = productsData.value[idx].name
}
const saveEdit = (idx) => {
  if (tempName.value.trim() !== '') {
    productsData.value[idx].name = tempName.value.trim()
    editIdx.value = null
  }
}
const cancelEdit = () => {
  editIdx.value = null
}
</script>

<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4 ml-8">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-20 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">品項</th>
          <th scope="col" class="px-6 py-3">描述</th>
          <th scope="col" class="px-6 py-3">價格</th>
          <th scope="col" class="px-6 py-3">庫存</th>
          <th scope="col" class="px-6 py-3">操作</th>
        </tr>
      </thead>
      <tbody v-for="(item, idx) in productsData" :key="item.id">
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-10 dark:hover:bg-gray-600"
        >
          <th v-if="editIdx == idx">
            <input type="text" v-model="tempName" class="input" />
            <button type="button" class="btn btn-primary mx-1" @click="saveEdit(idx)">Save</button>
            <button type="button" class="btn btn-outline mx-1" @click="cancelEdit">Cancel</button>
          </th>
          <th
            v-else
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ item.name }}
          </th>
          <td class="px-6 py-4">{{ item.desc }}</td>
          <td class="px-6 py-4">{{ item.price }}</td>
          <td class="px-6 py-4">{{ item.stock }}</td>
          <td class="px-6 py-4">
            <button
              type="button"
              class="btn btn-del mx-1"
              @click="updateStock(idx, false)"
              :disabled="item.stock === 0"
            >
              －
            </button>
            <button type="button" class="btn btn-add mx-1" @click="updateStock(idx, true)">
              ＋
            </button>
            <button type="button" class="btn btn-edit mx-1" @click="startEdit(idx)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
