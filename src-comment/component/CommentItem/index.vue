<template>
  <div>
    <li class="list-group-item">
      <div class="handle">
        <a href="javascript:;" @click="deleteComment(item)">删除</a>
      </div>
      <p class="user"><span >{{item.username}}</span><span>说:</span></p>
      <p class="content">{{item.content}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    item: Object,
    deleteComment: Function
  }
};
</script>

<style lang="less" scoped>
.handle {
  margin-top: 30px;
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
  a {
    display: block;
    text-decoration: none;
    &:link {
      color: #333;
    }
    &:hover {
      color: red;
    }
  }
}
.list-group-item {
  .content {
    padding: 0px 50px;
  }
  .user {
    font-size: 22px;
  }
}
</style>
