<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"/>
      <TodoMain
        :todos="todos"
        :deleteTodo="deleteTodo"
        :updateTodoIsDone="updateTodoIsDone"
        :updateTodoContent="updateTodoContent"
      />
      <TodoFooter
        v-if="todos.length > 0"
        :todos="todos"
        :changeAllIsDone="changeAllIsDone"
        :deleteFinished="deleteFinished"
      />
      <h3 v-if="todos.length <= 0">暂无待办事项，请添加！</h3>
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
      const id = this.todos.length > 0 ? this.todos[0].id + 1 : 0;
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
      this.todos = this.todos.filter(item => item.id !== id);
      this.saveTodos();
    },
    // 修改todo的完成状态
    updateTodoIsDone(id) {
      const todo = this.todos.find(item => item.id === id);
      todo.isDone = !todo.isDone;
      this.saveTodos();
    },
    // 点击全选，若有未完成的则全部完成，若全部都是完成的则全改为未完成
    changeAllIsDone() {
      // re:是否有未完成的todo
      const re = this.todos.some(todo => !todo.isDone);
      this.todos = this.todos.map((item) => {
        const todo = item;
        todo.isDone = re;
        return todo;
      });
      this.saveTodos();
    },
    // 删除已完成的todo
    deleteFinished() {
      this.todos = this.todos.filter(todo => !todo.isDone);
      this.saveTodos();
    },
    // 修改todo的内容
    updateTodoContent(id, content) {
      const todo = this.todos.find(item => item.id === id);
      todo.content = content;
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

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
  margin-top: 60px;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
