import Vue from 'vue';
import { Button, Icon, Input } from 'element-ui';
import App from './App.vue';
import './asset/css/index.css';

Vue.config.productionTip = false;

Vue.component(Icon.name, Icon);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);

new Vue({
  render: h => h(App)
}).$mount('#app');
