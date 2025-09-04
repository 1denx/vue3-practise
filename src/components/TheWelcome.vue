<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <div class="mt-4 ml-15">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>第一週 Vue 環境、基礎概念與 Vue 指令</template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>第二週 深化：方法、監聽與 AJAX</template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>第三週 Vue 與元件概念，Props 與 Emits</template>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>第四週 Vue Router 與 Todolist 全攻略</template>
    </WelcomeItem>
  </div>
</template>
