<script setup>
import { useTodoStore } from "./stores/todos";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const newTodo = ref("");
const todoStore = useTodoStore();
const { todos } = storeToRefs(todoStore);
const { addTodo } = todoStore;

// const addNewTodo = (text) => {
//   addTodo(text);
//   newTodo.value = "";
// };
</script>

<template>
  <input v-model="newTodo" />
  <button @click="() => addTodo(newTodo)">Add</button>
  <!-- <button @click="addNewTodo(newTodo)">Add</button> -->
  <div v-for="todo in todos" style="display: flex">
    <h1>{{ todo.text }}</h1>
    <!-- <h1 :style="todo.isFinished && {textDecoration:'line-through'}">{{ todo.text }}</h1> -->
    <button @click="() => toggleTodo(todo.id)">toggle</button>
  </div>
</template>

<!-- <script>

// export default{

// }

</script> -->
