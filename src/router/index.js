import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/home.vue';
import ECharts01 from '../views/ECharts/echarts.vue';
import ECharts02 from '../views/ECharts/echarts02.vue';
import ECharts03 from '../views/ECharts/e3.vue';
import ECharts04 from '../views/ECharts/e4.vue';
import TopicAnalysis from '../views/ECharts/TopicAnalysis.vue';
import UserAnalysis from '../views/ECharts/UserAnalysis.vue';
import PostVSMoneroPrice from '../views/ECharts/lineMarker.vue';


Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/echarts01',
      name: 'ECharts01',
      component: ECharts01,
    },
    {
      path: '/echarts02',
      name: 'ECharts02',
      component: ECharts02,
    },
    {
      path: '/echarts03',
      name: 'ECharts03',
      component: ECharts03,
    },
    {
      path: '/echarts04',
      name: 'ECharts04',
      component: ECharts04,
    },
    {
      path: '/topic-analysis',
      name: 'TopicAnalysis',
      component: TopicAnalysis,
    },
    {
      path: '/user-analysis',
      name: 'UserAnalysis',
      component: UserAnalysis,
    },
    {
      path: '/post-MoneroPrice',
      name: 'PostVSMoneroPrice',
      component: PostVSMoneroPrice,
    },
  ],
});
