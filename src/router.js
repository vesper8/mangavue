import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';
import Manga from './views/Manga.vue';
import Reader from './views/Reader.vue';
import Genre from './views/Genre.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/search',
      components: {
        wide: Search,
      },
      props: route => ({ query: route.query.q }),
      name: 'search',
    },
    {
      path: '/genre/:genreName',
      components: {
        wide: Genre,
      },
      name: 'genre',
    },
    {
      path: '/manga/:mangaId',
      components: {
        wide: Manga,
      },
      name: 'manga',
    },
    {
      path: '/manga/:mangaId/read/:chapterId/:page',
      component: Reader,
      props: true,
      name: 'reader',
    },
  ],
});
