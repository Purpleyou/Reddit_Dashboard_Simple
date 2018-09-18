import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Echarts from "echarts";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Echarts);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
