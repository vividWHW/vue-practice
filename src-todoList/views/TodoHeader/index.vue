<template>
  <div class="todo-header">
    <input
      type="text"
      v-model="content"
      @keydown.enter="add"
      placeholder="请输入你的任务名称，按回车键确认"
    />
  </div>
</template>

<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      content: ''
    };
  },
  props: {
    addTodo: Function
  },
  methods: {
    add() {
      const content = this.content.trim();
      if (!content) {
        alert('请输入待办事项内容');
        return;
      }
      this.addTodo(content);
      this.content = '';
    }
  }
};
</script>

<style>
.todo-header input {
  margin-bottom: 15px;
  width: 100%;
  height: 40px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
