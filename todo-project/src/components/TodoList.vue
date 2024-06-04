<script setup>
import BaseCard from './Card.vue';
import ListModal from './ListModal.vue';
import todos from '../../data/todos.json';
</script>

<template>
  <div>
    <ListModal :items="todos">
      <template #header>TODO LIST</template>
      <template #default="{ item }">
        <BaseCard size="sm" variant="flat">
          <template #title>{{ item.id }}</template>
      <template #subtitle>{{ item.catagory }}</template>
      <template #content>{{ item.description}}</template>
      </BaseCard>
      </template>
    </ListModal>
    <!-- <BaseCard size="lg" variant="flat">
      <template #title>Sample Sentence</template>
      <template #subtitle>motto</template>
      <template #content>Present is a gift.</template>
    </BaseCard> -->
  </div>
</template>

<style scoped></style>