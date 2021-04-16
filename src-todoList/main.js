import Vue from 'vue';
import App from './App.vue';
import './asset/css/todo.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
