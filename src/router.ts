import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Ashwin Vaswani',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      meta: {
        title: 'Ashwin Vaswani // Projects',
      },
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
})

router.afterEach((to: any, from: any) => {
  Vue.nextTick(() => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
  })
})

export default router
