<template>
  <div id="app">
    <HelloWorld msg="Hello Vue！"/>
    <HelloComponent />
    <PracComponent mesFromApp="App's message"/>
<!--     <HelloComponent></HelloComponent>
    <hello-component />
    <hello-component></hello-component> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HelloComponent from './views/HelloComponent';
import PracComponent from './views/PracComponent';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloComponent,
    PracComponent
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
