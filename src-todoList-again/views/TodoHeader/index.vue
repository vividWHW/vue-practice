<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="content"
      @keydown.enter="handleSubmit"
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
    handleSubmit() {
      const content = this.content.trim();
      if (!content) {
        alert('请输入待办事项！');
        return;
      }
      this.addTodo(content);
      this.content = '';
    }
  }
};
</script>

<style lang="less" scoped>
.todo-header input {
  width: 100%;
  height: 40px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
  &:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
}
</style>
