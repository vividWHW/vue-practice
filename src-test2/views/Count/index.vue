<template>
  <div>
    <p>Count</p>
    <button @click="addNum">add</button>
    <p>testMes from App is {{testMes}}</p>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {

    };
  },
  props: {
    addNum: Function,
    testMes: {
      type: Number,
      required: true,
      default: 100,
      validator(testMes) {
        // 校验不通过不影响显示，但会报错Invalid prop
        return testMes > 0;
      }
    }
  }
};
</script>
