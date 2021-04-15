<template>
  <div>
    <p>This is HelloComponent</p>
    <p>hello!</p>
    <h4>{{num}}</h4>
    <button @click="num++">add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloComponent',
  data() {
    return {
      num: 0
    };
  }
};
</script>

<style scoped lang="less">
p{
  color: pink
}
</style>
