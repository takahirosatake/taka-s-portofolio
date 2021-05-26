import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Works from '@/components/Works'
import Contact from '@/components/Contact'
import WorkDetail from '@/components/WorkDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
  {
    path: '/works/:id',
    name:'work',
    component: WorkDetail,
    props: route => ({ 
        id: Number(route.params.id),
        work: Object(route.params.work)
    })
  },
  {
    path:'*',
    redirect:'/',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
