<template>
  <ul class="todo-main">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      :deleteTodo="deleteTodo"
      :updateTodoContent="updateTodoContent"
      :updateTodoIsDone="updateTodoIsDone"
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
    updateTodoContent: Function,
    updateTodoIsDone: Function
  },
  components: {
    TodoItem
  }
};
</script>

<style lang="less" scoped>
.todo-main {
  margin-top: 15px;
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
</style>
