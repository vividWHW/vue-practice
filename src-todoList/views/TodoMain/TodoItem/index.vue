<template>
  <li>
    <label>
      <input type="checkbox" v-model="todoIsDone" />
      <span :class="{ finished: todo.isDone }">{{todo.content}}</span>
    </label>
    <input
      class="editInput"
      type="text"
      v-show="isEditing"
      v-model="editValue"
      @keydown.enter="handleEdit"
    />
    <span class="edit-tip" v-show="isEditing">按回车键提交修改</span>
    <span class="time">{{handleTime}}</span>
    <button
      class="btn btn-danger"
      @click="handleDelete(todo.id, todo.content)"
      v-show="!isEditing"
    >删除</button>
    <button
      class="btn btn-primary"
      @click="showEditInput"
      v-show="!isEditing"
    >修改</button>
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
    updateTodoIsDone: Function,
    updateTodoContent: Function
  },
  methods: {
    handleDelete(id, content) {
      if (!window.confirm(`确定要删除 ‘${content}’ 这条todo吗？`)) return;
      this.deleteTodo(id);
    },
    showEditInput() {
      this.isEditing = true;
    },
    handleEdit() {
      this.isEditing = false;
      this.updateTodoContent(this.todo.id, this.newContent);
    }
  },
  computed: {
    todoIsDone: {
      get() {
        return this.todo.isDone;
      },
      set() {
        this.updateTodoIsDone(this.todo.id);
      }
    },
    editValue: {
      get() {
        return this.todo.content;
      },
      set(value) {
        this.newContent = value;
      }
    },
    handleTime() {
      return dayjs(this.todo.time).format('MM月DD日 HH:mm');
    }
  }
};
</script>

<style>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li label span {
  margin-left: 5px;
}
li label span.finished {
  color: #777;
  text-decoration: line-through;
}

li input.editInput {
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  margin-left: 15px;
}
li span.edit-tip {
  color: #666;
  margin-left: 5px;
}

li span.time {
  float: right;
}
li:hover span.time {
  display: none;
}

li button.btn {
  float: right;
  display: none;
  margin-top: 3px;
  margin-left: 5px;
}

li:hover button.btn {
  display: block;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
