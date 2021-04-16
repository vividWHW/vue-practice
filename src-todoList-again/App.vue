<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain
        :todos="todos"
        :deleteTodo="deleteTodo"
        :updateTodoContent="updateTodoContent"
        :updateTodoIsDone="updateTodoIsDone"
      />
      <TodoFooter
        :todos="todos"
        :updateAllIsDone="updateAllIsDone"
        :deleteDoneTodo="deleteDoneTodo"
      />
    </div>
  </div>
</template>

<script>
import TodoHeader from './views/TodoHeader';
import TodoMain from './views/TodoMain';
import TodoFooter from './views/TodoFooter';

export default {
  name: 'App',
  data() {
    return {
      todos: []
    };
  },
  beforeMount() {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }
  },
  methods: {
    // 添加todo
    addTodo(content) {
      const id = this.todos.length ? this.todos[0].id + 1 : 0;
      this.todos.unshift({
        id,
        content,
        isDone: false,
        time: Date.now()
      });
      this.saveTodos();
    },
    // 删除todo
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.saveTodos();
    },
    // 修改todo内容
    updateTodoContent(id, content) {
      const todo = this.todos.find(item => item.id === id);
      todo.content = content;
      this.saveTodos();
    },
    // 修改todo的完成状态
    updateTodoIsDone(id) {
      const todo = this.todos.find(item => item.id === id);
      todo.isDone = !todo.isDone;
      this.saveTodos();
    },
    // 全选按钮
    updateAllIsDone() {
      const re = this.todos.some(item => !item.isDone);
      this.todos = this.todos.map(item => ({
        ...item,
        isDone: re
      }));
      this.saveTodos();
    },
    // 删除已完成的todo
    deleteDoneTodo() {
      this.todos = this.todos.filter(item => !item.isDone);
      this.saveTodos();
    },
    // 保存todos
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  }
};
</script>

<style lang="less" scoped>
.todo-container {
  width: 600px;
  margin: 60px auto;
  .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
}
</style>
