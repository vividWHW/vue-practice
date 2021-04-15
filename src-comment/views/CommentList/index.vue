<template>
  <div>
    <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-if="commentList.length <= 0">暂无评论，请添加评论！</h2>
        <ul class="list-group">
          <CommentItem
            :deleteComment="deleteComment"
            v-for="item in commentList"
            :key="item.id"
            :item="item"
          />
        </ul>
      </div>
  </div>
</template>

<script>
import CommentItem from '../../component/CommentItem';

export default {
  name: 'CommentList',
  props: {
    commentList: Array,
    deleteComment: Function
  },
  components: {
    CommentItem
  }
};
</script>

<style lang="less" scoped>
.reply {
  margin-top: 0px;
}

li {
  overflow: hidden;
}
</style>
