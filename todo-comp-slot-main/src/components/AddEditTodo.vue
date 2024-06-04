<script setup>
import { computed } from 'vue';

const props = defineProps({
    todo: {
        type: Object,
        default: { id: undefined, category: '', description: '' } //add mode
    
    }
})
const emit = defineEmits(['closeModal','saveTodo'])
const previousTodo = computed(() => 
    props.todo
)
</script>

<template>
    <div class="flex flex-col p-2 gap-5">
        <h1 class="font-semibold text-xl">{{ props.todo.id === undefined ? 'Add Todo' : 'Edit Todo' }}</h1>
    </div>
    <div class="flex flex-col">
        <div class="flex gap-3">
            <span>Category</span>
            <input type="radio" name="category" id="home" value="home" v-model="previousTodo.category">
            <label for="home">home</label>
            <input type="radio" name="category" id="work" value="work"  v-model="previousTodo.category">
            <label for="work">work</label>
        </div>
        <div class="flex gap-3">
            <span>Description</span>
            <input type="text" class="w-full p-0.5 border border-gray-300 rounded-lg outline-none" v-model.trim="previousTodo.description"/>
        </div>
    </div>
    <div class="flex gap-3 p-2">
        <button class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5" @click="$emit('saveTodo' , previousTodo)">
            Save
        </button>
        <button class="bg-slate-100 border border-gray-300 rounded-md hover:opacity-80 px-2 py-0.5" @click="$emit('closeModal' , false)">
            Cancel
        </button>
    </div>
</template>

<style scoped></style>