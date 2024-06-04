<script setup>

</script>
 
<template>
<div class="w-full flex items-end gap-3">
    <router-link to="/"> Home </router-link>
    <router-link to="/login"> Login </router-link>
    <router-link :to="{name : 'About'}"> AboutUs </router-link>
</div>
</template>
 
<style scoped>

</style>