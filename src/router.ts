import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'
import Meta from 'vue-meta'
import VueProgressiveImage from 'vue-progressive-image'
import Home from './views/Home.vue'

Vue.use(Router)
Vue.use(Meta)
Vue.use(VueProgressiveImage)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (projects.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: () =>
        import(/* webpackChunkName: "project" */ './views/Project.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'Ashwin Vaswani // About',
      },
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    { path: '*', redirect: { name: 'home' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    document
      .getElementsByClassName('app__content')[0]
      .scrollTo({ top: 0, behavior: 'smooth' })
  },
} as RouterOptions)

export default router
