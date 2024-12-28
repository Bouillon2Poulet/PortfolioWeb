import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BioView from '../views/BioView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView.vue'
import LinksView from '@/views/LinksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/bio',
      name: 'bio',
      component: BioView,
    },
    {
      path: '/cv',
      name: 'cv',
      component: ResumeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectView,
      props: true,
    },    {
      path: '/links',
      name: 'links',
      component: LinksView
    },
  ],
})

export default router
