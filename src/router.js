import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue';
import BasicRules from './views/BasicRules.vue';
import KillTeam from './views/KillTeam.vue';
import Compendium from './views/Compendium.vue';
import Armies from './views/Armies.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/basics',
            name: 'basics',
            component: BasicRules,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/killteam',
            name: 'killteam',
            component: KillTeam,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/compendium',
            name: 'compendium',
            component: Compendium,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/armies',
            name: 'armies',
            component: Armies,
            meta: {
                requiresAuth: true
            }
        }
    ]
})
