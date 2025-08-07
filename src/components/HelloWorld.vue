<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="black text-5">{{ msg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
}
</style>
