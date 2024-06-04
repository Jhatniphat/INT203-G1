<script setup>
import TodoList from './TodoList.vue';
// import todos from '../../data/todos.json';
import { onMounted, ref } from 'vue';
import AddEditTodo from './AddEditTodo.vue';
import { getItems, getItemById, deleteItemById, addItem, editItem } from '../libs/fetchUtils';
import { todoManagement } from '@/libs/TodoManagement';

let showModal = ref(false)
const clearModal = (flagModal) => {
    showModal.value = flagModal
}
const toAddMode = () => {
    showModal.value = true
    editingTodo.value = {}
}
const toEditMode = (todo) => {
    showModal.value = true
    editingTodo.value = todo
}
let editingTodo = ref({})

//GET
const myTodos = ref(new todoManagement())
onMounted(async () => {
    const items = await getItems(import.meta.env.VITE_BASE_URL)
    myTodos.value.addTodos(items)
    console.log(myTodos.value.getTodos())

})

//DELETE
const removeTodo = async (removeId) => {
    const removeStatus = await deleteItemById(import.meta.env.VITE_BASE_URL, removeId)
    if (removeStatus === 200) {
        myTodos.value.removeTodo(removeId)
    }
}

//ADD
const updateTodo = async (newTodo) => {
    if (newTodo.id === undefined) {
        //backend
        const addedItem = await addItem(import.meta.env.VITE_BASE_URL,
            { category: newTodo.category, description: newTodo.description })
        console.log()
        // myTodos.value.addTodo(addedItem) 
        myTodos.value.addTodo(addedItem.id, addedItem.category, addedItem.description)
        //frontend
        editingTodo.value = { id: undefined, category: undefined, description: undefined }
    }
    else {
        //backend , PUT (replace new Todo)
        // editItem(url, id, editItem)
        const editedItem = await editItem(import.meta.env.VITE_BASE_URL, newTodo.id, newTodo)
        //frontEnd
        myTodos.value.updateTodo(editItem.id, editItem.category, editItem.description)
        editingTodo.value = { id: undefined, category: undefined, description: undefined }
    }

}

const todos = myTodos.value.getTodos()

</script>

<template>
    <div>
        <div class="flex justify-end">
            <button class="px-2 py-2 text-green-400 font-bold" @click="toAddMode">Add New Todo</button>
        </div>
        <TodoList :todos="myTodos.getTodos()" @editMode="toEditMode" @deleteTodo="removeTodo" />
        <Teleport to="#addEditModal">
            <div v-show="showModal" class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 h-48 w-72 shadow-lg">
                <!-- <button class="px-2 py-2 text-red-500 font-bold" @click="showModal = false">Close</button> -->
                <AddEditTodo @closeModal="clearModal" :todo="editingTodo" @saveTodo="updateTodo" />
            </div>
        </Teleport>
    </div>
</template>

<style scoped></style>