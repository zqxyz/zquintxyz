import posts from './views/PostsVIew.vue';
import post from './views/PostView.vue';
import notFound from './views/NotFoundView.vue';
import contact from './views/ContactView.vue';
import meta from './views/MetaView.vue';

export const routes = [
  { path: '/', component: posts, meta: { title: 'Home' } },
  { path: '/post/:id', component: post, meta: { title: 'Post' } },
  { path: '/contact', component: contact, meta: { title: 'Contact' } },
  { path: '/meta', component: meta, meta: { title: 'Meta' } },
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
    meta: { title: 'Page not found' },
  },
];
