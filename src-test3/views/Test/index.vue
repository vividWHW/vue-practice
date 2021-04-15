<template>
  <div>
    Test
    <p>Test: {{num}}</p>
    <button @click="addNum">Test-add</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    num: Number,
    addNum: Function
  }
};
</script>
