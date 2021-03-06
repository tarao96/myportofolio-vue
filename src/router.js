import Vue from 'vue'
import Router from 'vue-router'
import AboutPage from './views/AboutPage.vue'
import WorkPage from './views/WorkPage.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: AboutPage
        },
        {
            path: '/works',
            component: WorkPage
        }
    ]
})