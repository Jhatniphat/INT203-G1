<script setup>
import { useTodos } from '../stores/todos'
const todos = useTodos()
</script>

<template>
  <div>
    <div>
      <p v-for="todo in todos.getTodos()">
      {{ todo }}
      </p>
      
    </div>
    <h2
      class="flex justify-center font-semibold text-xl p-20 bg-white shadow-lg"
    >
      B.Sc.IT, School of Information Technology, KMUTT
    </h2>
  </div>
</template>

<style scoped></style>
