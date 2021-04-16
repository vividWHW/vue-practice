<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.isDone"
        @click="updateTodoIsDone(todo.id)"
      />
      <span :class="{ isDone: todo.isDone }">{{todo.content}}</span>
    </label>
    <!-- 修改输入框 -->
    <input
      type="text"
      class="editInput"
      v-show="isEditing"
      v-model="editContent"
      @keydown.enter="handleEditSubmit"
    />
    <span class="editTip" v-show="isEditing">按回车键提交修改</span>
    <!-- 时间 -->
    <span class="time" v-show="!isEditing">{{handledTime}}</span>
    <!-- 删除按钮 -->
    <i
      class="el-icon-delete"
      @click="deleteTodo(todo.id)"
      v-show="!isEditing"
    ></i>
    <!-- 修改按钮 -->
    <i
      class="el-icon-edit"
      @click="isEditing = !isEditing"
      v-show="!isEditing"
    ></i>
  </li>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'TodoItem',
  data() {
    return {
      isEditing: false,
      newContent: ''
    };
  },
  props: {
    todo: Object,
    deleteTodo: Function,
    updateTodoContent: Function,
    updateTodoIsDone: Function
  },
  methods: {
    handleEditSubmit() {
      this.updateTodoContent(this.todo.id, this.newContent);
      this.isEditing = false;
    }
  },
  computed: {
    handledTime() {
      return dayjs(this.todo.time).format('MM/DD HH:mm');
    },
    editContent: {
      get() {
        return this.todo.content;
      },
      set(value) {
        this.newContent = value;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@liHeight: 36px;
li {
  list-style: none;
  height: @liHeight;
  line-height: @liHeight;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
  &:before {
    content: initial;
  }
  label {
    cursor: pointer;
    span {
      margin-left: 5px;
      &.isDone {
        color: #777;
        text-decoration: line-through;
      }
    }
  }
  input.editInput {
    height: 26px;
    width: 100px;
    margin-left: 15px;
  }
  span.editTip {
    margin-left: 5px;
    color: #666;
    font-size: 12px;
  }
  span.time {
    float: right;
  }
  i {
    margin-right: 15px;
    float: right;
    display: none;
    height: @liHeight;
    line-height: @liHeight;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      &.el-icon-delete {
        color: #d3372f;
      }
      &.el-icon-edit {
        color: rgb(75, 156, 218);
      }
    }
  }
  &:hover {
    i {
      display: block;
    }
    span.time {
      display: none;
    }
  }
}
</style>
