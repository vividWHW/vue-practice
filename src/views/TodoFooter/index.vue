<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="finishedAll" @click="changeAllIsDone"/>
    </label>
    <span>
      <span>已完成{{finished}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="handleDeleteFinished">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    todos: Array,
    changeAllIsDone: Function,
    deleteFinished: Function
  },
  methods: {
    handleDeleteFinished() {
      if (window.confirm(`确定删除所有已完成的${this.finished}项todo吗？`)) {
        this.deleteFinished();
      }
    }
  },
  computed: {
    total() {
      return this.todos.length;
    },
    finished() {
      return this.todos.filter(todo => todo.isDone).length;
    },
    finishedAll: {
      get() {
        return this.total === this.finished;
      },
      set() {

      }
    }
  }
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
