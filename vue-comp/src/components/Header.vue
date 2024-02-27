<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue';

onBeforeUnmount(() => {
    console.log('At Header.vue , on before unmount')
})
onUnmounted(() => {
    console.log('At Header.vue , on Unmount ')
})

</script>
 
<template>
    <header
        class="w-full sticky flex flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 gap-3 shadow-2xl">
        <div class="w-12 h-full">
            <slot name="icon"></slot>
        </div>
        <div class="flex flex-col">
            <div class="text-2xl text-white font-bold">
                <slot name="groupName"></slot>
            </div>
            <div class="text-lg text-white font-light">
                <slot name="title"></slot>
            </div>
        </div>
    </header>
</template>
 
<style scoped></style>