import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Randomizer from '../views/Randomizer.vue';
import Continents from '../views/Continents.vue';
import DetailedPage from '../views/DetailedPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/randomizer',
    name: 'randomizer',
    component: Randomizer,
  },
  {
    path: '/continents',
    name: 'continents',
    component: Continents,
  },
  {
    path: '/detailed-page/:countryId',
    name: 'detailedPage',
    component: DetailedPage,
   
  },
];

const router = new VueRouter({
  routes,
});

export default router;
