<script setup>

//composition api
import {ref} from 'vue'
const count = ref(0)

const decreaseCount=()=>{
  count.value <= 0 ? (count.value = 0) : --count.value
}
const isDark = ref(false)
//ref(default value) สร้าง reactive variable
//when this var change , it will update at DOM 

</script>

<template>
  <div class="min-h-screen" :class="isDark ? 'bg-black' : 'bg-white'">

    <div class="flex justify-end p-2">
      <input type="checkbox" class="toggle" v-model="isDark" @click="isDark = !isDark"/>
    </div>
    <h1 class="text-green-500 font-semibold tracking-widest text-2xl">My First Counter Application</h1>

  
  <div class="flex p-4 space-x-2 bg-white">
    <button class="px-3 py-1 bg-red-600 rounded-lg text-white" @click="decreaseCount ">-</button>
    <!-- @click ==  v-on:click -->
    <p class="text-xl font-semibold">Counter: {{ count }}</p>
    <button class="px-3 py-1 text-white bg-green-500 rounded-lg" @click="++count">+</button>
  </div>

</div>

</template>
 
<style scoped></style>