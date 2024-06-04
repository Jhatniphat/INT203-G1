<script setup></script>

<template>
  <div class="flex justify-end p-2">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Login' }">Login</RouterLink>
    <RouterLink :to="{ name: 'TodoManager' }">TodoManager</RouterLink>
    <RouterLink :to="{ name: 'AboutUs' }">AboutUs</RouterLink>
  </div>
</template>

<style scoped></style>
