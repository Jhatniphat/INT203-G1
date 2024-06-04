<script setup>
// Add, Edit, Delete, Read todo here
import AddEditTodo from './AddEditTodo.vue'
import TodoList from './TodoList.vue'
// import todos from '../../data/todos.json'
import { TodoManagement } from '../libs/TodoManagement.js'
import { onMounted, ref } from 'vue'
import {
  getItems,
  getItemById,
  deleteItemById,
  addItem,
  editItem,
} from '../libs/fetchUtils.js'
import { useTodos } from '../stores/todos'

const showModal = ref(false)
const senditem = ref({ id: undefined, category: '', description: '' })
function clearModal(flag) {
  showModal.value = flag
  senditem.value = { id: undefined, category: '', description: '' }
}
function EditTodo(item) {
  showModal.value = true
  senditem.value = item
}
const myTodos = useTodos()

onMounted(async () => {
  if (myTodos.getTodos().length == 0) {
    const items = await getItems(`${import.meta.env.VITE_BASE_URL}/todos`)
    myTodos.addTodos(items)
  }
  console.log(myTodos.getTodos)
})
async function removeTodo(id) {
  const removeStatus = await deleteItemById(
    `${import.meta.env.VITE_BASE_URL}/todos`,
    id
  )
  if (removeStatus === 200) {
    myTodos.removeTodo(id)
  }
}

async function updateTodo(todo) {
  console.log(todo)
  if (todo.id === undefined) {
    const addedItem = await addItem(`${import.meta.env.VITE_BASE_URL}/todos`, {
      category: todo.category,
      description: todo.description,
    })
    myTodos.addTodo(
      addedItem.id,
      addedItem.category,
      addedItem.description
    )
  } else {
    const edited = await editItem(
      `${import.meta.env.VITE_BASE_URL}/todos`,
      todo.id,
      todo
    )
    myTodos.updateTodo(edited.id, edited.category, edited.description)
  }
  showModal.value = false
  senditem.value = { id: undefined, category: '', description: '' }
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <button @click="showModal = true" class="px-2 py-0.5 text-green-600 rounded-lg hover:text-green-500">
        Add New Todo
      </button>
    </div>
    <TodoList :todos="myTodos.getTodos()" @editMode="EditTodo" @deleteTodo="removeTodo" />
    <Teleport to="#addEditModal">
      <div v-show="showModal === true"
        class="absolute left-0 right-0 top-1/3 m-auto bg-slate-50 h-48 w-72 shadow-lg rounded-md">
        <AddEditTodo @closeModal="clearModal" @saveTodo="updateTodo" :todo="senditem" />
      </div>
    </Teleport>
  </div>
</template>

<style scoped></style>
