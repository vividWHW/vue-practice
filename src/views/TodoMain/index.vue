<template>
  <ul class="todo-main">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :deleteTodo="deleteTodo"
      :updateTodoIsDone="updateTodoIsDone"
      :updateTodoContent="updateTodoContent"
    />
  </ul>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  name: 'TodoMain',
  props: {
    todos: Array,
    deleteTodo: Function,
    updateTodoIsDone: Function,
    updateTodoContent: Function
  },
  components: {
    TodoItem,
  }
};
</script>

<style>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
