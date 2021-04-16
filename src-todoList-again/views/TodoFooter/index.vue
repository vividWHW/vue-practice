<template>
  <div class="todo-footer">
    <label>
      <input
        type="checkbox"
        @click="updateAllIsDone"
        :checked="total === isDoneNum"
      />
    </label>
    <span>
      <span>已完成{{isDoneNum}}</span> / 全部{{total}}
    </span>
    <el-button
      type="danger"
      icon="el-icon-delete"
      @click="handleDeleteDone"
    >删除已完成任务</el-button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    todos: Array,
    updateAllIsDone: Function,
    deleteDoneTodo: Function
  },
  computed: {
    total() {
      return this.todos.length;
    },
    isDoneNum() {
      return this.todos.filter(item => item.isDone).length;
    }
  },
  methods: {
    handleDeleteDone() {
      if (!window.confirm(`确定删除${this.isDoneNum}项已完成事项吗？`)) return;
      this.deleteDoneTodo();
    }
  }
};
</script>

<style lang="less" scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
  label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    input {
      position: relative;
      top: -1px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
  button {
    float: right;
  }
}
</style>
