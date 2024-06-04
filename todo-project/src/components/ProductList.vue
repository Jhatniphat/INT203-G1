<script setup>
import products from '../../data/products.json';
import BaseCard from './Card.vue';
import ListModal from './ListModal.vue';
</script>
 
<template>
<div>
    <ListModal :items="products">
      <template #header>Product LIST</template>
      <template #default="{ item }">
      <div class="flex">
        <div class="w-1/12">{{ item.id  }}</div>
        <div class="w-3/12">{{ item.name }}</div>
        <div class="w-5/12">{{ item.detail }}</div>
        <div class="w-2/12">{{ item.price }}</div>
        <div class="w-1/12">{{ item.instock }}</div>
      </div>
    </template>
    </ListModal>
</div>
</template>
<!-- "id": 1,
"name": "Laptop",
"detail": "High-performance laptop with SSD and powerful processor",
"price": 999.99,
"instock": true -->
<style scoped>

</style>