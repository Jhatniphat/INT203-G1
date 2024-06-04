<script setup>
import TodoList from './components/TodoList.vue';
import ProductList from './components/ProductList.vue';
import todos from '../data/todos.json';
import TodoMenager from './components/TodoMenager.vue';
import Nav from './views/Nav.vue';
console.log(import.meta.env.VITE_BASE_URL)
</script> 

<template>
  <div class="w-full">
    <!-- <ProductList /> -->
    <!-- <TodoList :todos="todos" /> -->
    <!-- <TodoMenager/> -->

    <Nav></Nav>
    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>./views/TodoMenager.vue
