import Vue from 'vue';
import Router from 'vue-router';

import BusinessPlatformIndex from '../views/business-platform/Index.vue';
import StatisticalAnalysisIndex from '../views/statistical-analysis/Index.vue';
import ParameterSettingIndex from '../views/parameter-setting/Index.vue';
import MessageCenterIndex from '../views/message-center/Index.vue';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/business-platform'
    },
    {
      path: '/business-platform',
      component: BusinessPlatformIndex
    },
    {
      path: '/statistical-analysis',
      component: StatisticalAnalysisIndex
    },
    {
      path: '/parameter-settingIndex',
      component: ParameterSettingIndex
    },
    {
      path: '/message-center',
      component: MessageCenterIndex
    },
  ]
});

export default router;