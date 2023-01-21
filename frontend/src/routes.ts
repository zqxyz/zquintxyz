import posts from './views/posts.view.vue';
import post from './views/post.view.vue';
import notFound from './views/not-found.view.vue';
import contact from './views/contact.view.vue';
import meta from './views/meta.view.vue';

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
