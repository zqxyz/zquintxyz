import Posts from './views/Posts.view.vue';
import SinglePostView from './views/Post.view.vue';
import NotFound from './views/NotFound.vue';

export const routes = [
  { path: '/', component: Posts, meta: { title: 'Home' } },
  { path: '/post/:id', component: SinglePostView, meta: { title: 'Post' } },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { title: 'Page not found' },
  },
];
