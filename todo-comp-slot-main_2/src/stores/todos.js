import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

const useTodos = defineStore('todos', () => {
  //state
  let todos = ref([])
  //view
  const getTodos = () => {
    return todos
  }
  //actions
  const addTodos = (newTodos) => {
    newTodos.forEach((newTodo) =>
      addTodo(newTodo.id, newTodo.category, newTodo.description)
    )
  }
  const addTodo = (id, category, desc) => {
    todos.push({
      id: id,
      category: category,
      description: desc
    })
  }
  const updateTodo = (id, category, description) => {
    todos = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, category: category, description: description }
        : todo
    })
  }
  const findTodo = (searchId) => {
    return todos.find((todo) => todo.id === searchId)
  }
  const findIndexTodo = (searchId) => {
    return todos.findIndex((todo) => todo.id === searchId)
  }
  const removeTodo = (removeId) => {
    todos.splice(
      todos.findIndex((todo) => todo.id === removeId),
      1
    )
  }
  return {
    getTodos,
    addTodos,
    addTodo,
    updateTodo,
    findIndexTodo,
    findTodo,
    removeTodo
  }
})

export { useTodos }

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodos, import.meta.hot))
}