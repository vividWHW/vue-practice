<template>
  <div>
    App
    {{mes}}
    <p>{{num}}</p>
    <Count :addNum="addNum" :testMes="testMes"/>
  </div>
</template>

<script>
import Count from './views/Count';

export default {
  name: 'App',
  data() {
    return {
      mes: 'test',
      num: 0,
      testMes: 5
    };
  },
  methods: {
    addNum() {
      this.num++;
    }
  },
  components: {
    Count
  }
};
</script>

<style scoped lang="less">
div{
  color: blue;
  p{
    color: red;
  }
}
</style>
