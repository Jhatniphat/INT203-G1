<script setup>
import { computed, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import PageHeader from './components/Header.vue'
let count = ref(0)
// onBeforeMount(() => {
//   count.value = 1 //สั่ง เปลี่ยน count เป็น 1
//   console.log('At App.vue , on Before mount....')
// })
// onMounted(() => {
//   count.value = 10
//   console.log('At App.vue , on mounted....')
// })

// onBeforeUpdate(() => {
//   console.log('At App.vue , on Before Update....')
// })

// onUpdated(() => {
//   console.log('At App.vue , on Update....')
// })

const hasHeader = ref(false)

console.log('At app.vue')
console.log(count.value)
const fullname = ref('Rose Marry')
</script>

<template>
  <div class="w-full">
    <PageHeader class="w-full">
      <template #icon>
        <img
          src="https://cdn.discordapp.com/attachments/1197122848951652364/1209884603267944518/Group_54.png?ex=65e88bd7&is=65d616d7&hm=de65147a6c6fb2a5fd4c3481955e77edff00e4783dda0dce444cd9eb7b16a99d&"
          alt="">
      </template>
      <template #groupName>
        <h1>SUPERIDOL</h1>
      </template>
      <template #title>
        <h1>MATH RAINNING</h1>
      </template>
    </PageHeader>
  </div>
  <div>
    <p> <input type="checkbox" v-model="hasHeader"> Enable Header </p>
    <p style="color: red;">{{ hasHeader }}</p>
  </div>
  <div> {{ fullname }}
    <button @click="fullname = fullname.toUpperCase()"> Change to UpperCase </button>
  </div>
  <h1 class="text-2xl"> Hello world </h1>
  <div class="flex gap-3">
    <button @click="count > 0 ? count-- : count = count" class="bg-red-500 p-2">-</button>
    <h3 class="text-xl">count : {{ count }}</h3>
    <button @click="count++" class="bg-green-500 p-2">+</button>
  </div>
</template>

<style scoped></style>
