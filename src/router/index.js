import { createRouter, createWebHistory } from 'vue-router'
import tasksPage from '../views/tasksPage.vue';
import taskEditPage from '../views/taskEditPage.vue';


const routes = [
  {
    path: '/tasks',
    name: 'tasks',
    component: tasksPage
  },
  {
    path: '/tasks/:id',
    name: 'taskEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: taskEditPage,
    props: true
  },
  {
    path: '/',
    redirect: '/tasks'
  },
  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
