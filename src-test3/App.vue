<template>
  <div>
    App
    <p>{{mes}}</p>
    <p>app:{{num}}</p>
    <button @click="addNum">app-add</button>
    <Test :num="num" :addNum="addNum"/>
  </div>
</template>

<script>
import Test from './views/Test';

export default {
  name: 'App',
  data() {
    return {
      mes: 'app-mes',
      num: 0
    };
  },
  methods: {
    addNum() {
      this.num++;
    }
  },
  components: {
    Test
  }
};
</script>
