import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: "codeing",
        isFinished: false,
      },
    ],
  }),
  actions: {
    addTodo(text) {
      if (!text) return;
      //  if (text != null) return;
      this.todos.push({
        id: Math.floor(Math.random() * 1000000),
        text,
        isFinished: false,
      });
    },
  },
  // actions: {
  //   toggleTodo(id) {
  //     const index = this.todos.findIndex((todo) => todo.id == id);
  //     this.todos[index].isFinished = !this.todos[index].isFinished;
  //   },
  // },
});
