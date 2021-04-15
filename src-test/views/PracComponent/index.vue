<template>
  <div>
    <p>{{message}}</p>
    <p>{{mesFromApp}}</p>
  </div>
</template>

<script>
export default {
  name: 'PracComponent',
  data() {
    return {
      message: 'test'
    };
  },
  props: {
    mesFromApp: String
  }
};
</script>
