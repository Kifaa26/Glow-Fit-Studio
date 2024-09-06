import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
//   {
//     path: '/aboutUs',
//     name: 'aboutUs',
//     component: () => import('@/views/AboutView.vue')
//   },
//   {
//     path: '/meetTheTeam',
//     name: 'meetTheTeam',
//     component: () => import('@/views/MeetTheTeamView.vue')
//   },
//   {
//     path: '/bookNow',
//     name: 'bookNow',
//     component: () => import('@/views/BookNowView.vue')
//   },
//   {
//     path: '/admin',
//     name: 'admin',
//     component: () => import('@/views/AdminView.vue')
//   },
//   {
//     path: '/contactUs',
//     name: 'contactUs',
//     component: () => import('@/views/ContactUsView.vue')
//   },
//   {
//     path: '/signup',
//     name: 'signup',
//     component: () => import('@/views/SignUp.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
