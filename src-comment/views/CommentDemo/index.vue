<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表评论</h1>
          </div>
        </div>
      </div>
    </header>
    <PublishComment @publish="publish($event)"/>
    <CommentList :commentList="commentList" :deleteComment="deleteComment"/>
  </div>
</template>

<script>
import PublishComment from '../PublishComment';
import CommentList from '../CommentList';

export default {
  name: 'CommentDemo',
  data() {
    return {
      commentList: []
    };
  },
  beforeMount() {
    if (localStorage.getItem('commentList')) {
      this.commentList = JSON.parse(localStorage.getItem('commentList'));
    }
  },
  methods: {
    // 发布评论
    publish(info) {
      const commentObj = {};
      let initId = 0;
      if (this.commentList.length > 0) initId = this.commentList[0].id + 1;
      commentObj.id = initId;
      commentObj.username = info.username;
      commentObj.content = info.comment;
      this.commentList.unshift(commentObj);
      this.saveComment();
    },
    // 删除评论
    deleteComment(comment) {
      const re = window.confirm(`确定要删除${comment.username}的评论吗？`);
      if (!re) return;
      const newList = this.commentList.filter(item => item.id !== comment.id);
      this.commentList = newList;
      this.saveComment();
    },
    // 保存评论
    saveComment() {
      localStorage.setItem('commentList', JSON.stringify(this.commentList));
    }
  },
  components: {
    PublishComment,
    CommentList
  }
};
</script>

<style lang="less" scoped>

</style>
