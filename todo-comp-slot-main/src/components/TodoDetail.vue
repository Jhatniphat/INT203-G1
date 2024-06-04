<script setup>
import { useRoute , useRouter } from 'vue-router';
const { params } = useRoute()
const router = useRouter()
console.log(params.todoId)

const goBack = () => {
    router.go(-1) // สั่งถอยหลังไปหนึ่งตาม history
}
</script>

<template>
    <div>
        <img :src="`../../imgs/${$route.params.todoId}.jpg`" alt="" class="w-72 h-72">
        <button @click="goBack">Back</button>
    </div>
</template>

<style scoped></style>